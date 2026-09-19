import status from "http-status";
import { PaymentStatus, Role } from "../../../generated/prisma/enums";
import AppError from "../../errorHelpers/appError";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { prisma } from "../../lib/prisma";

const getDashboardStatsData = async (user: IRequestUser) => {
    let statsData;

    switch (user.role) {
        case Role.ADMIN:
        case Role.SUPER_ADMIN:
            statsData = await getAdminStatsData();
            break;
        case Role.USER:
            statsData = await getUserStatsData(user);
            break;
        default:
            throw new AppError(status.BAD_REQUEST, "Invalid user role");
    }

    return statsData;
};

// ADMIN AND USER DASHBOARD DATA

const getAdminStatsData = async () => {
    const [
        genreCount,
        mediaCount,
        paymentCount,
        platformCount,
        userCount,
        wishlistCount,
        reviewCount,
        totalRevenue,
        averageRating,
        ratingDistributionPieChart,
        reviewGrowthLineChart,
        mostReviewedMoviesBarChart,
        recentUsersData,
        recentReviewsData,
        recentPaymentsData
    ] = await Promise.all([
        prisma.genre.count(),
        prisma.media.count(),
        prisma.payment.count(),
        prisma.platform.count(),
        prisma.user.count(),
        prisma.watchlist.count(),
        prisma.review.count(),

        prisma.payment.aggregate({
            _sum: { amount: true },
            where: {
                status: PaymentStatus.PAID,
            },
        }),

        prisma.review.aggregate({
            _avg: {
                rating: true,
            },
        }),

        getRatingDistribution(),
        getReviewGrowthData(),
        getMostReviewedMovies(),

        getRecentUsers(),
        getRecentReviews(),
        getRecentPayments()
    ]);

    return {
        overview: {
            totalUsers: userCount,
            totalMedia: mediaCount,
            totalGenres: genreCount,
            totalPlatforms: platformCount,
            totalWishlists: wishlistCount,
            totalPayments: paymentCount,
            totalReviews: reviewCount,
            totalRevenue: totalRevenue._sum.amount ?? 0,
            averageRating: Number((averageRating._avg.rating ?? 0).toFixed(1)),
        },

        charts: {
            ratingDistributionPieChart,
            reviewGrowthLineChart,
            mostReviewedMoviesBarChart,
        },

        recentActivities: {
            recentUsers: recentUsersData,
            recentReviews: recentReviewsData,
            recentPayments: recentPaymentsData,
            recentUsersCount: recentUsersData,
            recentReviewsCount: recentReviewsData,
            recentPaymentsCount: recentPaymentsData,
        }
    };
};

const getUserStatsData = async (user: IRequestUser) => {
    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email: user.email
        },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            image: true,
            status: true,
            createdAt: true,
        }
    });

    const [reviewCount, commentCount, wishlistCount, recentReviews, recentWatchlist] = await Promise.all([
        prisma.review.count({
            where: {
                userId: user.userId
            }
        }),
        prisma.comment.count({
            where: {
                userId: user.userId
            }
        }),
        prisma.watchlist.count({
            where: {
                userId: user.userId
            }
        }),
        prisma.review.findMany({
            where: {
                userId: user.userId
            },
            take: 5,
            orderBy: {
                createdAt: "desc"
            },
            include: {
                media: true
            }
        }),
        prisma.watchlist.findMany({
            where: {
                userId: user.userId
            },
            take: 6,
            orderBy: {
                createdAt: "desc"
            },
            include: {
                media: true
            }
        })
    ]);

    return {
        userData,
        reviewCount,
        commentCount,
        wishlistCount,
        recentReviews,
        recentWatchlist
    };
};

// DASHBOARD CHART DATA FINDING 
const getRatingDistribution = async () => {
    const ratings = await prisma.review.groupBy({
        by: ["rating"],
        _count: {
            id: true,
        },
        orderBy: {
            rating: "asc",
        },
    });

    return ratings.map((item) => ({
        name: `${item.rating} Star`,
        value: item._count.id,
    }));
};

const getReviewGrowthData = async () => {
    const reviews = await prisma.review.findMany({
        select: {
            createdAt: true,
        },
    });

    const monthlyData = reviews.reduce(
        (acc: Record<string, number>, review) => {
            const month = review.createdAt.toLocaleString("en-US", {
                month: "short",
            });

            acc[month] = (acc[month] || 0) + 1;

            return acc;
        },
        {}
    );

    return Object.entries(monthlyData).map(([month, reviews]) => ({
        month,
        reviews,
    }));
};

const getMostReviewedMovies = async () => {
    const movies = await prisma.review.groupBy({
        by: ["mediaId"],
        _count: {
            id: true,
        },
        orderBy: {
            _count: {
                id: "desc",
            },
        },
        take: 10,
    });

    const movieIds = movies.map((movie) => movie.mediaId);

    const movieDetails = await prisma.media.findMany({
        where: {
            id: {
                in: movieIds,
            },
        },
        select: {
            id: true,
            title: true,
            posterUrl: true,
            releaseYear: true,
            averageRating: true,
        },
    });

    return movies.map((movie) => {
        const detail = movieDetails.find((m) => m.id === movie.mediaId);
        return {
            id: movie.mediaId,
            movie: detail?.title ?? "Unknown",
            posterUrl: detail?.posterUrl ?? null,
            releaseYear: detail?.releaseYear ?? null,
            averageRating: detail?.averageRating ?? 0,
            reviews: movie._count.id,
        };
    });
};

// DASHBOARD RECENT ACTIVITIES DATA FINDING
const getRecentUsers = async () => {
    return prisma.user.findMany({
        take: 6,
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            name: true,
            email: true,
            image: true,
            role: true,
            status: true,
            createdAt: true,
        },
    });
};

const getRecentReviews = async () => {
    return prisma.review.findMany({
        take: 6,
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            rating: true,
            content: true,
            status: true,
            createdAt: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                },
            },
            media: {
                select: {
                    id: true,
                    title: true,
                    posterUrl: true,
                },
            },
        },
    });
};

const getRecentPayments = async () => {
    return prisma.payment.findMany({
        take: 6,
        orderBy: {
            createdAt: "desc",
        },
        select: {
            id: true,
            amount: true,
            currency: true,
            provider: true,
            status: true,
            transactionId: true,
            createdAt: true,
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true,
                },
            },
            media: {
                select: {
                    id: true,
                    title: true,
                    posterUrl: true,
                },
            },
        },
    });
};

export const statsService = {
    getDashboardStatsData
};
