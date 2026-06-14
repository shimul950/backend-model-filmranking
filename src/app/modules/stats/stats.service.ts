import status from "http-status";
import { PaymentStatus, Role } from "../../../generated/prisma/enums";
import AppError from "../../errorHelpers/appError";
import { IRequestUser } from "../../interfaces/requestUser.interface";
import { prisma } from "../../lib/prisma";

const getDashboardStatsData = async (user: IRequestUser) => {
    let statsData;

    switch (user.role) {
        case Role.ADMIN:
            statsData = await getAdminStatsData();
            break;
        case Role.USER:
            statsData = await getUserStatsData(user);
            break;
        default:
            throw new AppError(status.BAD_REQUEST, "Invalid user role")
    }

    return statsData;
}
//ADMIN AND USER DASHBOARD DATA

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
        recentUsersCount,
        recentReviewsCount,
        recentPaymentsCount

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

        recentUsers,
        recentReviews,
        recentPayments


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
            averageRating: averageRating._avg.rating ?? 0,
        },

        charts: {
            ratingDistributionPieChart,
            reviewGrowthLineChart,
            mostReviewedMoviesBarChart,
        },

        recentActivities: {
            recentUsersCount,
            recentReviewsCount,
            recentPaymentsCount
        }
    };
};

const getUserStatsData = async (user: IRequestUser) => {
    const userData = await prisma.user.findUniqueOrThrow({
        where: {
            email: user.email
        }
    })

    const reviewCount = await prisma.review.count({
        where: {
            userId: user.userId
        }
    })

    const wishlistCount = await prisma.watchlist.count({
        where: {
            userId: user.userId
        }
    })

    return {
        userData,
        reviewCount,
        wishlistCount
    }
}

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
        },
    });

    return movies.map((movie) => ({
        movie:
            movieDetails.find((m) => m.id === movie.mediaId)?.title ??
            "Unknown",
        reviews: movie._count.id,
    }));
};

// DASHBOARD RECENT ACTIVITIES DATA FINDING
const recentUsers = prisma.user.findMany({
    take: 5,
    orderBy: {
        createdAt: "desc",
    },
    select: {
        id: true,
        name: true,
        createdAt: true,
    },
});

const recentReviews = prisma.review.findMany({
    take: 5,
    orderBy: {
        createdAt: "desc",
    },
    select: {
        id: true,
        rating: true,
        createdAt: true,
        user: {
            select: {
                name: true,
            },
        },
        media: {
            select: {
                title: true,
            },
        },
    },
});

const recentPayments = prisma.payment.findMany({
    take: 5,
    orderBy: {
        createdAt: "desc",
    },
    select: {
        id: true,
        amount: true,
        createdAt: true,
        user: {
            select: {
                name: true,
            },
        },
    },
});

export const statsService = {
    getDashboardStatsData
}