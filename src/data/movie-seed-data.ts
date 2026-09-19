export interface ISeedMovie {
    title: string;
    synopsis: string;
    releaseYear: number;
    duration: number;
    director: string;
    cast: string[];
    language: string;
    country: string;
    pricing: "FREE" | "PREMIUM";
    youtubeLink: string;
    posterUrl: string;
    genreKeywords: string[];
    platformKeywords: string[];
}

export const SEED_MOVIES_50: ISeedMovie[] = [
    {
        "title": "The Shawshank Redemption",
        "synopsis": "Two imprisoned men bond over years, finding solace and eventual redemption through acts of common decency.",
        "releaseYear": 1994,
        "duration": 142,
        "director": "Frank Darabont",
        "cast": [
            "Tim Robbins",
            "Morgan Freeman"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=6hB3S9bIaco",
        "posterUrl": "https://res.cloudinary.com/dbsa8cib9/image/upload/v1778654959/healthcare/images/zak8t5vxrqp-1778654955811-q6y0go1tsgesmtfrydojo3demqu.jpg",
        "genreKeywords": [
            "Crime",
            "Drama"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "Inception",
        "synopsis": "A thief who steals corporate secrets through dream-sharing technology is given a chance to erase his past.",
        "releaseYear": 2010,
        "duration": 148,
        "director": "Christopher Nolan",
        "cast": [
            "Leonardo DiCaprio",
            "Joseph Gordon-Levitt"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=YoHD9XEInc0",
        "posterUrl": "https://res.cloudinary.com/dbsa8cib9/image/upload/v1778656046/healthcare/images/0wfnxkwx8zk-1778656041850-gqgwnjwjsqgkoqke2rppogenu4v.jpg",
        "genreKeywords": [
            "Thriller",
            "Action",
            "Science Fiction"
        ],
        "platformKeywords": [
            "HBO Max",
            "Netflix"
        ]
    },
    {
        "title": "The Dark Knight",
        "synopsis": "When the menace known as the Joker wreaks havoc and chaos on Gotham City, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "releaseYear": 2008,
        "duration": 152,
        "director": "Christopher Nolan",
        "cast": [
            "Christian Bale",
            "Heath Ledger",
            "Aaron Eckhart",
            "Michael Caine"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        "posterUrl": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "genreKeywords": [
            "Drama",
            "Crime",
            "Action"
        ],
        "platformKeywords": [
            "Netflix",
            "HBO Max"
        ]
    },
    {
        "title": "Interstellar",
        "synopsis": "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft along with a team of researchers to find a new planet for humans.",
        "releaseYear": 2014,
        "duration": 169,
        "director": "Christopher Nolan",
        "cast": [
            "Matthew McConaughey",
            "Anne Hathaway",
            "Jessica Chastain",
            "Michael Caine"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        "posterUrl": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "genreKeywords": [
            "Adventure",
            "Drama",
            "Science Fiction"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "The Matrix",
        "synopsis": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        "releaseYear": 1999,
        "duration": 136,
        "director": "Lana Wachowski, Lilly Wachowski",
        "cast": [
            "Keanu Reeves",
            "Laurence Fishburne",
            "Carrie-Anne Moss",
            "Hugo Weaving"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=vKQi3bBA1y8",
        "posterUrl": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Action"
        ],
        "platformKeywords": [
            "Netflix",
            "HBO Max"
        ]
    },
    {
        "title": "Dune: Part Two",
        "synopsis": "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe.",
        "releaseYear": 2024,
        "duration": 166,
        "director": "Denis Villeneuve",
        "cast": [
            "Timothée Chalamet",
            "Zendaya",
            "Rebecca Ferguson",
            "Javier Bardem"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=Way9Dexny3w",
        "posterUrl": "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        "genreKeywords": [
            "Action",
            "Adventure",
            "Science Fiction"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "HBO Max"
        ]
    },
    {
        "title": "Blade Runner 2049",
        "synopsis": "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        "releaseYear": 2017,
        "duration": 164,
        "director": "Denis Villeneuve",
        "cast": [
            "Ryan Gosling",
            "Harrison Ford",
            "Ana de Armas",
            "Sylvia Hoeks"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=gCcx85zbxz4",
        "posterUrl": "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Drama",
            "Action"
        ],
        "platformKeywords": [
            "Netflix",
            "HBO Max"
        ]
    },
    {
        "title": "Mad Max: Fury Road",
        "synopsis": "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper and a drifter named Max.",
        "releaseYear": 2015,
        "duration": 120,
        "director": "George Miller",
        "cast": [
            "Tom Hardy",
            "Charlize Theron",
            "Nicholas Hoult",
            "Hugh Keays-Byrne"
        ],
        "language": "English",
        "country": "Australia",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=hEJnMQG9ev8",
        "posterUrl": "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Adventure",
            "Action"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "HBO Max"
        ]
    },
    {
        "title": "Jurassic Park",
        "synopsis": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the cloned dinosaurs to run loose.",
        "releaseYear": 1993,
        "duration": 127,
        "director": "Steven Spielberg",
        "cast": [
            "Sam Neill",
            "Laura Dern",
            "Jeff Goldblum",
            "Richard Attenborough"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=lc0UehYemQA",
        "posterUrl": "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Adventure",
            "Action"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Terminator 2: Judgment Day",
        "synopsis": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten-year-old son John from an even more advanced and powerful cyborg.",
        "releaseYear": 1991,
        "duration": 137,
        "director": "James Cameron",
        "cast": [
            "Arnold Schwarzenegger",
            "Linda Hamilton",
            "Edward Furlong",
            "Robert Patrick"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=CRRlbK5w8AE",
        "posterUrl": "https://image.tmdb.org/t/p/w500/jFTVD4XoWQTcg7wdyJKa8PEds5q.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Action"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Paramount+"
        ]
    },
    {
        "title": "Avengers: Endgame",
        "synopsis": "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance.",
        "releaseYear": 2019,
        "duration": 181,
        "director": "Anthony Russo, Joe Russo",
        "cast": [
            "Robert Downey Jr.",
            "Chris Evans",
            "Mark Ruffalo",
            "Chris Hemsworth"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=TcMBFSGVi1c",
        "posterUrl": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Adventure",
            "Action"
        ],
        "platformKeywords": [
            "Apple TV",
            "Disney+"
        ]
    },
    {
        "title": "Gladiator",
        "synopsis": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        "releaseYear": 2000,
        "duration": 155,
        "director": "Ridley Scott",
        "cast": [
            "Russell Crowe",
            "Joaquin Phoenix",
            "Connie Nielsen",
            "Oliver Reed"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=owK1qxDselE",
        "posterUrl": "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        "genreKeywords": [
            "Drama",
            "Adventure",
            "Action"
        ],
        "platformKeywords": [
            "Paramount+",
            "Netflix"
        ]
    },
    {
        "title": "1917",
        "synopsis": "April 6th, 1917. As an infantry battalion assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
        "releaseYear": 2019,
        "duration": 119,
        "director": "Sam Mendes",
        "cast": [
            "Dean-Charles Chapman",
            "George MacKay",
            "Daniel Mays",
            "Colin Firth"
        ],
        "language": "English",
        "country": "UK",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=YqNYrYUiMfg",
        "posterUrl": "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
        "genreKeywords": [
            "War",
            "Drama",
            "Action"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Pulp Fiction",
        "synopsis": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "releaseYear": 1994,
        "duration": 154,
        "director": "Quentin Tarantino",
        "cast": [
            "John Travolta",
            "Uma Thurman",
            "Samuel L. Jackson",
            "Bruce Willis"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
        "posterUrl": "https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
        "genreKeywords": [
            "Drama",
            "Crime"
        ],
        "platformKeywords": [
            "HBO Max",
            "Netflix"
        ]
    },
    {
        "title": "The Godfather",
        "synopsis": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        "releaseYear": 1972,
        "duration": 175,
        "director": "Francis Ford Coppola",
        "cast": [
            "Marlon Brando",
            "Al Pacino",
            "James Caan",
            "Robert Duvall"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=UaVTIH8mujA",
        "posterUrl": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "genreKeywords": [
            "Drama",
            "Crime"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Goodfellas",
        "synopsis": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        "releaseYear": 1990,
        "duration": 145,
        "director": "Martin Scorsese",
        "cast": [
            "Robert De Niro",
            "Ray Liotta",
            "Joe Pesci",
            "Lorraine Bracco"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=2ilzidi_J8Q",
        "posterUrl": "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        "genreKeywords": [
            "Drama",
            "Crime",
            "Biography"
        ],
        "platformKeywords": [
            "Netflix",
            "HBO Max"
        ]
    },
    {
        "title": "The Departed",
        "synopsis": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
        "releaseYear": 2006,
        "duration": 151,
        "director": "Martin Scorsese",
        "cast": [
            "Leonardo DiCaprio",
            "Matt Damon",
            "Jack Nicholson",
            "Mark Wahlberg"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=iojhqm0JTW4",
        "posterUrl": "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
        "genreKeywords": [
            "Thriller",
            "Drama",
            "Crime"
        ],
        "platformKeywords": [
            "Netflix",
            "HBO Max"
        ]
    },
    {
        "title": "Se7en",
        "synopsis": "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        "releaseYear": 1995,
        "duration": 127,
        "director": "David Fincher",
        "cast": [
            "Morgan Freeman",
            "Brad Pitt",
            "Kevin Spacey",
            "Gwyneth Paltrow"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=znmZoVkCjpI",
        "posterUrl": "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
        "genreKeywords": [
            "Thriller",
            "Mystery",
            "Drama",
            "Crime"
        ],
        "platformKeywords": [
            "Netflix",
            "HBO Max"
        ]
    },
    {
        "title": "The Silence of the Lambs",
        "synopsis": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "releaseYear": 1991,
        "duration": 118,
        "director": "Jonathan Demme",
        "cast": [
            "Jodie Foster",
            "Anthony Hopkins",
            "Lawrence A. Bonney",
            "Kasi Lemmons"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=W6Mm8Sbe__o",
        "posterUrl": "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
        "genreKeywords": [
            "Thriller",
            "Drama",
            "Crime"
        ],
        "platformKeywords": [
            "MGM+",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Shutter Island",
        "synopsis": "In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.",
        "releaseYear": 2010,
        "duration": 138,
        "director": "Martin Scorsese",
        "cast": [
            "Leonardo DiCaprio",
            "Mark Ruffalo",
            "Ben Kingsley",
            "Max von Sydow"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=5iaYLCiq5RM",
        "posterUrl": "https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
        "genreKeywords": [
            "Drama",
            "Thriller",
            "Mystery"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "No Country for Old Men",
        "synopsis": "Violence and mayhem ensue after a hunter stumbles upon the aftermath of a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
        "releaseYear": 2007,
        "duration": 122,
        "director": "Ethan Coen, Joel Coen",
        "cast": [
            "Tommy Lee Jones",
            "Javier Bardem",
            "Josh Brolin",
            "Woody Harrelson"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=38A__WT3-o0",
        "posterUrl": "https://image.tmdb.org/t/p/w500/6d5XOczc226jECq0LIX0siKtgHR.jpg",
        "genreKeywords": [
            "Thriller",
            "Drama",
            "Crime"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Paramount+"
        ]
    },
    {
        "title": "Gone Girl",
        "synopsis": "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
        "releaseYear": 2014,
        "duration": 149,
        "director": "David Fincher",
        "cast": [
            "Ben Affleck",
            "Rosamund Pike",
            "Neil Patrick Harris",
            "Tyler Perry"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=2-_-1nJf8Vg",
        "posterUrl": "https://image.tmdb.org/t/p/w500/ts996lKsxvjkO2yiYG0ht4qAicO.jpg",
        "genreKeywords": [
            "Thriller",
            "Mystery",
            "Drama"
        ],
        "platformKeywords": [
            "Netflix",
            "HBO Max"
        ]
    },
    {
        "title": "Fight Club",
        "synopsis": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "releaseYear": 1999,
        "duration": 139,
        "director": "David Fincher",
        "cast": [
            "Brad Pitt",
            "Edward Norton",
            "Helena Bonham Carter",
            "Meat Loaf"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=qtRKdV9zM81",
        "posterUrl": "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        "genreKeywords": [
            "Thriller",
            "Drama"
        ],
        "platformKeywords": [
            "Hulu",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "The Grand Budapest Hotel",
        "synopsis": "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
        "releaseYear": 2014,
        "duration": 99,
        "director": "Wes Anderson",
        "cast": [
            "Ralph Fiennes",
            "F. Murray Abraham",
            "Mathieu Amalric",
            "Adrien Brody"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=1Fg5iWmQjwk",
        "posterUrl": "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
        "genreKeywords": [
            "Crime",
            "Comedy",
            "Adventure"
        ],
        "platformKeywords": [
            "Disney+",
            "Hulu"
        ]
    },
    {
        "title": "The Truman Show",
        "synopsis": "An insurance salesman discovers his entire life is actually a reality TV show broadcast live around the clock to millions of viewers worldwide.",
        "releaseYear": 1998,
        "duration": 103,
        "director": "Peter Weir",
        "cast": [
            "Jim Carrey",
            "Ed Harris",
            "Laura Linney",
            "Noah Emmerich"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=dlnmQbPGuls",
        "posterUrl": "https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Drama",
            "Comedy"
        ],
        "platformKeywords": [
            "Paramount+",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "The Wolf of Wall Street",
        "synopsis": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        "releaseYear": 2013,
        "duration": 180,
        "director": "Martin Scorsese",
        "cast": [
            "Leonardo DiCaprio",
            "Jonah Hill",
            "Margot Robbie",
            "Matthew McConaughey"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=iszwuX1AK6A",
        "posterUrl": "https://image.tmdb.org/t/p/w500/kW9LmvYHAaS9iA0tHmZVq8hQYoq.jpg",
        "genreKeywords": [
            "Crime",
            "Comedy",
            "Biography"
        ],
        "platformKeywords": [
            "Apple TV",
            "Paramount+"
        ]
    },
    {
        "title": "Superbad",
        "synopsis": "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
        "releaseYear": 2007,
        "duration": 113,
        "director": "Greg Mottola",
        "cast": [
            "Jonah Hill",
            "Michael Cera",
            "Christopher Mintz-Plasse",
            "Bill Hader"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=4eaZ_48ZYog",
        "posterUrl": "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
        "genreKeywords": [
            "Comedy"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "The Big Lebowski",
        "synopsis": "Jeff 'The Dude' Lebowski, mistaken for a millionaire of the same name, seeks restitution for his ruined rug and enlists his bowling buddies to help get it.",
        "releaseYear": 1998,
        "duration": 117,
        "director": "Joel Coen, Ethan Coen",
        "cast": [
            "Jeff Bridges",
            "John Goodman",
            "Julianne Moore",
            "Steve Buscemi"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=cd-goJgG-bg",
        "posterUrl": "https://image.tmdb.org/t/p/w500/3bv6WAp6BSxxYvB5ozKFUYuRA8C.jpg",
        "genreKeywords": [
            "Crime",
            "Comedy"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Groundhog Day",
        "synopsis": "A narcissistic TV weatherman along with his producer and cameraman finds himself repeating the same day over and over again in Punxsutawney, Pennsylvania.",
        "releaseYear": 1993,
        "duration": 101,
        "director": "Harold Ramis",
        "cast": [
            "Bill Murray",
            "Andie MacDowell",
            "Chris Elliott",
            "Stephen Tobolowsky"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=tSVeDx9fk60",
        "posterUrl": "https://image.tmdb.org/t/p/w500/gCgt1WARPZaXnq523ySQEUKinCs.jpg",
        "genreKeywords": [
            "Romance",
            "Fantasy",
            "Comedy"
        ],
        "platformKeywords": [
            "Paramount+",
            "Netflix"
        ]
    },
    {
        "title": "Knives Out",
        "synopsis": "A detective investigates the death of a patriarch of an eccentric, combative family in a witty, modern whodunnit mystery.",
        "releaseYear": 2019,
        "duration": 130,
        "director": "Rian Johnson",
        "cast": [
            "Daniel Craig",
            "Chris Evans",
            "Ana de Armas",
            "Jamie Lee Curtis"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=qGqiHJTsRkQ",
        "posterUrl": "https://image.tmdb.org/t/p/w500/pThyQovXQrw2m0s9x82twj48Jq4.jpg",
        "genreKeywords": [
            "Mystery",
            "Crime",
            "Comedy"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "Shaun of the Dead",
        "synopsis": "The uneventful, aimless lives of a London electronics salesman and his slacker roommate are disrupted by the zombie apocalypse.",
        "releaseYear": 2004,
        "duration": 99,
        "director": "Edgar Wright",
        "cast": [
            "Simon Pegg",
            "Nick Frost",
            "Kate Ashfield",
            "Lucy Davis"
        ],
        "language": "English",
        "country": "UK",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=LIfcaZ42Cjc",
        "posterUrl": "https://image.tmdb.org/t/p/w500/dgXPhzNJH8HFTBjXPB177yNx6RI.jpg",
        "genreKeywords": [
            "Horror",
            "Comedy"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Back to the Future",
        "synopsis": "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
        "releaseYear": 1985,
        "duration": 116,
        "director": "Robert Zemeckis",
        "cast": [
            "Michael J. Fox",
            "Christopher Lloyd",
            "Lea Thompson",
            "Crispin Glover"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=qvsgGtivCgs",
        "posterUrl": "https://image.tmdb.org/t/p/w500/vN5B5WgYscRGcQpVhHl6p9DDTP0.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Comedy",
            "Adventure"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "Parasite",
        "synopsis": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        "releaseYear": 2019,
        "duration": 132,
        "director": "Bong Joon-ho",
        "cast": [
            "Song Kang-ho",
            "Lee Sun-kyun",
            "Cho Yeo-jeong",
            "Choi Woo-shik"
        ],
        "language": "Korean",
        "country": "South Korea",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=5xH0RzeSojI",
        "posterUrl": "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "genreKeywords": [
            "Comedy",
            "Thriller",
            "Drama"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Hulu"
        ]
    },
    {
        "title": "Alien",
        "synopsis": "The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission on a desolate moon.",
        "releaseYear": 1979,
        "duration": 117,
        "director": "Ridley Scott",
        "cast": [
            "Sigourney Weaver",
            "Tom Skerritt",
            "John Hurt",
            "Veronica Cartwright"
        ],
        "language": "English",
        "country": "UK",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=LjLamj-b0I8",
        "posterUrl": "https://image.tmdb.org/t/p/w500/vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Horror"
        ],
        "platformKeywords": [
            "Disney+",
            "Hulu"
        ]
    },
    {
        "title": "American Psycho",
        "synopsis": "A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his violent, hedonistic fantasies.",
        "releaseYear": 2000,
        "duration": 102,
        "director": "Mary Harron",
        "cast": [
            "Christian Bale",
            "Justin Theroux",
            "Josh Lucas",
            "Chloë Sevigny"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=5YnGhW4UEhc",
        "posterUrl": "https://image.tmdb.org/t/p/w500/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg",
        "genreKeywords": [
            "Horror",
            "Drama",
            "Crime"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "The Shining",
        "synopsis": "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
        "releaseYear": 1980,
        "duration": 146,
        "director": "Stanley Kubrick",
        "cast": [
            "Jack Nicholson",
            "Shelley Duvall",
            "Danny Lloyd",
            "Scatman Crothers"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=S014oGZiSdI",
        "posterUrl": "https://image.tmdb.org/t/p/w500/xazWoLealQwEgqZ89MLZklLZD3k.jpg",
        "genreKeywords": [
            "Drama",
            "Horror"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "HBO Max"
        ]
    },
    {
        "title": "Get Out",
        "synopsis": "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
        "releaseYear": 2017,
        "duration": 104,
        "director": "Jordan Peele",
        "cast": [
            "Daniel Kaluuya",
            "Allison Williams",
            "Bradley Whitford",
            "Catherine Keener"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=DzfpyUB60YY",
        "posterUrl": "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
        "genreKeywords": [
            "Thriller",
            "Mystery",
            "Horror"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "Hereditary",
        "synopsis": "A grieving family is haunted by tragic and disturbing occurrences after the death of their secretive grandmother, unraveling terrifying secrets about their ancestry.",
        "releaseYear": 2018,
        "duration": 127,
        "director": "Ari Aster",
        "cast": [
            "Toni Collette",
            "Alex Wolff",
            "Milly Shapiro",
            "Gabriel Byrne"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=V6wWKNij_1M",
        "posterUrl": "https://image.tmdb.org/t/p/w500/4GFPuL14eXi66V96xBWY73Y9PfR.jpg",
        "genreKeywords": [
            "Mystery",
            "Drama",
            "Horror"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "HBO Max"
        ]
    },
    {
        "title": "A Quiet Place",
        "synopsis": "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
        "releaseYear": 2018,
        "duration": 90,
        "director": "John Krasinski",
        "cast": [
            "Emily Blunt",
            "John Krasinski",
            "Millicent Simmonds",
            "Noah Jupe"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=WR7cc5t7tv8",
        "posterUrl": "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
        "genreKeywords": [
            "Drama",
            "Science Fiction",
            "Horror"
        ],
        "platformKeywords": [
            "Netflix",
            "Paramount+"
        ]
    },
    {
        "title": "The Thing",
        "synopsis": "A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims, spreading paranoia among the crew.",
        "releaseYear": 1982,
        "duration": 109,
        "director": "John Carpenter",
        "cast": [
            "Kurt Russell",
            "Wilford Brimley",
            "TK Carter",
            "David Clennon"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=5ftmr17M-a4",
        "posterUrl": "https://image.tmdb.org/t/p/w500/tzGY49kseSE9QAKk47uuDGwnSCu.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Mystery",
            "Horror"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Psycho",
        "synopsis": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.",
        "releaseYear": 1960,
        "duration": 109,
        "director": "Alfred Hitchcock",
        "cast": [
            "Anthony Perkins",
            "Janet Leigh",
            "Vera Miles",
            "John Gavin"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=Wz717bW_gwg",
        "posterUrl": "https://image.tmdb.org/t/p/w500/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
        "genreKeywords": [
            "Thriller",
            "Mystery",
            "Horror"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "The Conjuring",
        "synopsis": "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        "releaseYear": 2013,
        "duration": 112,
        "director": "James Wan",
        "cast": [
            "Vera Farmiga",
            "Patrick Wilson",
            "Lili Taylor",
            "Ron Livingston"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=k10ETZ41q5o",
        "posterUrl": "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        "genreKeywords": [
            "Thriller",
            "Mystery",
            "Horror"
        ],
        "platformKeywords": [
            "Netflix",
            "HBO Max"
        ]
    },
    {
        "title": "Halloween",
        "synopsis": "Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield to kill again.",
        "releaseYear": 1978,
        "duration": 91,
        "director": "John Carpenter",
        "cast": [
            "Donald Pleasence",
            "Jamie Lee Curtis",
            "PJ Soles",
            "Nancy Kyes"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=ek1ePFp-nBI",
        "posterUrl": "https://image.tmdb.org/t/p/w500/wijlZ3HaYMvlDTPqJoTCWKFkCPU.jpg",
        "genreKeywords": [
            "Thriller",
            "Horror"
        ],
        "platformKeywords": [
            "Shudder",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Spirited Away",
        "synopsis": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        "releaseYear": 2001,
        "duration": 125,
        "director": "Hayao Miyazaki",
        "cast": [
            "Rumi Hiiragi",
            "Miyu Irino",
            "Mari Natsuki",
            "Takashi Naito"
        ],
        "language": "Japanese",
        "country": "Japan",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=ByXuk9QqQkk",
        "posterUrl": "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        "genreKeywords": [
            "Fantasy",
            "Adventure",
            "Animation"
        ],
        "platformKeywords": [
            "Netflix",
            "HBO Max"
        ]
    },
    {
        "title": "Spider-Man: Across the Spider-Verse",
        "synopsis": "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When heroes clash on handling a threat, Miles must redefine heroism.",
        "releaseYear": 2023,
        "duration": 140,
        "director": "Joaquim Dos Santos, Kemp Powers",
        "cast": [
            "Shameik Moore",
            "Hailee Steinfeld",
            "Brian Tyree Henry",
            "Oscar Isaac"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=cqGjhVJWtEg",
        "posterUrl": "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        "genreKeywords": [
            "Adventure",
            "Action",
            "Animation"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "Spider-Man: Into the Spider-Verse",
        "synopsis": "Teen Miles Morales becomes the new Spider-Man and joins other Spider-Heroes from parallel dimensions to stop a menace to all reality.",
        "releaseYear": 2018,
        "duration": 117,
        "director": "Bob Persichetti, Peter Ramsey",
        "cast": [
            "Shameik Moore",
            "Jake Johnson",
            "Hailee Steinfeld",
            "Mahershala Ali"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=tg52up16eq0",
        "posterUrl": "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        "genreKeywords": [
            "Adventure",
            "Action",
            "Animation"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "WALL-E",
        "synopsis": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
        "releaseYear": 2008,
        "duration": 98,
        "director": "Andrew Stanton",
        "cast": [
            "Ben Burtt",
            "Elissa Knight",
            "Jeff Garlin",
            "Fred Willard"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=CZ1CATNbXg0",
        "posterUrl": "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Family",
            "Adventure",
            "Animation"
        ],
        "platformKeywords": [
            "Apple TV",
            "Disney+"
        ]
    },
    {
        "title": "Coco",
        "synopsis": "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        "releaseYear": 2017,
        "duration": 105,
        "director": "Lee Unkrich, Adrian Molina",
        "cast": [
            "Anthony Gonzalez",
            "Gael García Bernal",
            "Benjamin Bratt",
            "Alanna Ubach"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=Rvr68u6k5sI",
        "posterUrl": "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        "genreKeywords": [
            "Fantasy",
            "Family",
            "Adventure",
            "Animation"
        ],
        "platformKeywords": [
            "Apple TV",
            "Disney+"
        ]
    },
    {
        "title": "The Lion King",
        "synopsis": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        "releaseYear": 1994,
        "duration": 88,
        "director": "Roger Allers, Rob Minkoff",
        "cast": [
            "Matthew Broderick",
            "Jeremy Irons",
            "James Earl Jones",
            "Whoopi Goldberg"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=lFzVJEksoDY",
        "posterUrl": "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        "genreKeywords": [
            "Drama",
            "Adventure",
            "Animation"
        ],
        "platformKeywords": [
            "Apple TV",
            "Disney+"
        ]
    },
    {
        "title": "Toy Story",
        "synopsis": "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom.",
        "releaseYear": 1995,
        "duration": 81,
        "director": "John Lasseter",
        "cast": [
            "Tom Hanks",
            "Tim Allen",
            "Don Rickles",
            "Jim Varney"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=CxwTLktovTU",
        "posterUrl": "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
        "genreKeywords": [
            "Comedy",
            "Adventure",
            "Animation"
        ],
        "platformKeywords": [
            "Apple TV",
            "Disney+"
        ]
    },
    {
        "title": "Finding Nemo",
        "synopsis": "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish embarks on a journey to bring him home.",
        "releaseYear": 2003,
        "duration": 100,
        "director": "Andrew Stanton",
        "cast": [
            "Albert Brooks",
            "Ellen DeGeneres",
            "Alexander Gould",
            "Willem Dafoe"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=2zLkasScy7A",
        "posterUrl": "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
        "genreKeywords": [
            "Comedy",
            "Adventure",
            "Animation"
        ],
        "platformKeywords": [
            "Apple TV",
            "Disney+"
        ]
    },
    {
        "title": "Up",
        "synopsis": "78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.",
        "releaseYear": 2009,
        "duration": 96,
        "director": "Pete Docter",
        "cast": [
            "Edward Asner",
            "Jordan Nagai",
            "Christopher Plummer",
            "Bob Peterson"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=ORFWdXl_zJ4",
        "posterUrl": "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
        "genreKeywords": [
            "Comedy",
            "Adventure",
            "Animation"
        ],
        "platformKeywords": [
            "Apple TV",
            "Disney+"
        ]
    },
    {
        "title": "Princess Mononoke",
        "synopsis": "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony.",
        "releaseYear": 1997,
        "duration": 134,
        "director": "Hayao Miyazaki",
        "cast": [
            "Yoji Matsuda",
            "Yuriko Ishida",
            "Yuko Tanaka",
            "Kaoru Kobayashi"
        ],
        "language": "Japanese",
        "country": "Japan",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=4OiMOHRDs14",
        "posterUrl": "https://image.tmdb.org/t/p/w500/cMYCDADoLKLbB83g4WnJegaZimC.jpg",
        "genreKeywords": [
            "Fantasy",
            "Adventure",
            "Animation"
        ],
        "platformKeywords": [
            "Netflix",
            "HBO Max"
        ]
    },
    {
        "title": "Ratatouille",
        "synopsis": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.",
        "releaseYear": 2007,
        "duration": 111,
        "director": "Brad Bird",
        "cast": [
            "Patton Oswalt",
            "Ian Holm",
            "Lou Romano",
            "Brian Dennehy"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=NgsQ8mVkN8w",
        "posterUrl": "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
        "genreKeywords": [
            "Family",
            "Comedy",
            "Animation"
        ],
        "platformKeywords": [
            "Apple TV",
            "Disney+"
        ]
    },
    {
        "title": "La La Land",
        "synopsis": "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
        "releaseYear": 2016,
        "duration": 128,
        "director": "Damien Chazelle",
        "cast": [
            "Ryan Gosling",
            "Emma Stone",
            "Rosemarie DeWitt",
            "J.K. Simmons"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=0pdqf4P9MB8",
        "posterUrl": "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        "genreKeywords": [
            "Romance",
            "Music",
            "Drama",
            "Comedy"
        ],
        "platformKeywords": [
            "Hulu",
            "Netflix"
        ]
    },
    {
        "title": "Forrest Gump",
        "synopsis": "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
        "releaseYear": 1994,
        "duration": 142,
        "director": "Robert Zemeckis",
        "cast": [
            "Tom Hanks",
            "Robin Wright",
            "Gary Sinise",
            "Sally Field"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=bLvqoHBptjg",
        "posterUrl": "https://image.tmdb.org/t/p/w500/Cw4hIUIAmSYfK9QfaUW5igp9La.jpg",
        "genreKeywords": [
            "Comedy",
            "Romance",
            "Drama"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "Her",
        "synopsis": "In a near future, a lonely writer develops an unlikely relationship with an operating system designed to meet his every need.",
        "releaseYear": 2013,
        "duration": 126,
        "director": "Spike Jonze",
        "cast": [
            "Joaquin Phoenix",
            "Amy Adams",
            "Scarlett Johansson",
            "Rooney Mara"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=6QRvTv_tpw0",
        "posterUrl": "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Romance",
            "Drama"
        ],
        "platformKeywords": [
            "Netflix",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Titanic",
        "synopsis": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        "releaseYear": 1997,
        "duration": 194,
        "director": "James Cameron",
        "cast": [
            "Leonardo DiCaprio",
            "Kate Winslet",
            "Billy Zane",
            "Kathy Bates"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=I7c1etV7D7g",
        "posterUrl": "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        "genreKeywords": [
            "Romance",
            "Drama"
        ],
        "platformKeywords": [
            "Disney+",
            "Paramount+"
        ]
    },
    {
        "title": "Eternal Sunshine of the Spotless Mind",
        "synopsis": "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
        "releaseYear": 2004,
        "duration": 108,
        "director": "Michel Gondry",
        "cast": [
            "Jim Carrey",
            "Kate Winslet",
            "Kirsten Dunst",
            "Mark Ruffalo"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=07-QBnEkgXU",
        "posterUrl": "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Romance",
            "Drama"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Pride & Prejudice",
        "synopsis": "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class.",
        "releaseYear": 2005,
        "duration": 129,
        "director": "Joe Wright",
        "cast": [
            "Keira Knightley",
            "Matthew Macfadyen",
            "Brenda Blethyn",
            "Donald Sutherland"
        ],
        "language": "English",
        "country": "UK",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=1dYv5u6v55Y",
        "posterUrl": "https://image.tmdb.org/t/p/w500/o8UhmEbWPHmTUxP0lMuCoqNkbB3.jpg",
        "genreKeywords": [
            "Romance",
            "Drama"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "Before Sunrise",
        "synopsis": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
        "releaseYear": 1995,
        "duration": 101,
        "director": "Richard Linklater",
        "cast": [
            "Ethan Hawke",
            "Julie Delpy",
            "Andrea Eckert",
            "Hanno Pöschl"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=9v6X-D8lUw8",
        "posterUrl": "https://image.tmdb.org/t/p/w500/kf1Jb1c2JAOqjuzA3H4oDM263uB.jpg",
        "genreKeywords": [
            "Romance",
            "Drama"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "The Notebook",
        "synopsis": "An elderly man reads to a woman with dementia the story of two young lovers who were separated by their social differences in 1940s South Carolina.",
        "releaseYear": 2004,
        "duration": 123,
        "director": "Nick Cassavetes",
        "cast": [
            "Ryan Gosling",
            "Rachel McAdams",
            "James Garner",
            "Gena Rowlands"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=FC6biTjEyZw",
        "posterUrl": "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
        "genreKeywords": [
            "Romance",
            "Drama"
        ],
        "platformKeywords": [
            "HBO Max",
            "Netflix"
        ]
    },
    {
        "title": "Casablanca",
        "synopsis": "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.",
        "releaseYear": 1942,
        "duration": 102,
        "director": "Michael Curtiz",
        "cast": [
            "Humphrey Bogart",
            "Ingrid Bergman",
            "Paul Henreid",
            "Claude Rains"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=BkL9l7qovsE",
        "posterUrl": "https://image.tmdb.org/t/p/w500/5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
        "genreKeywords": [
            "War",
            "Romance",
            "Drama"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "HBO Max"
        ]
    },
    {
        "title": "Amélie",
        "synopsis": "Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.",
        "releaseYear": 2001,
        "duration": 122,
        "director": "Jean-Pierre Jeunet",
        "cast": [
            "Audrey Tautou",
            "Mathieu Kassovitz",
            "Rufus",
            "Lorella Cravotta"
        ],
        "language": "French",
        "country": "France",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=HUECWi5pX7o",
        "posterUrl": "https://image.tmdb.org/t/p/w500/nSxDa3M9aMvGVLoItzWTepQ5h5d.jpg",
        "genreKeywords": [
            "Romance",
            "Comedy"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "synopsis": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "releaseYear": 2001,
        "duration": 178,
        "director": "Peter Jackson",
        "cast": [
            "Elijah Wood",
            "Ian McKellen",
            "Orlando Bloom",
            "Viggo Mortensen"
        ],
        "language": "English",
        "country": "New Zealand",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=V75dMMIW2B4",
        "posterUrl": "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        "genreKeywords": [
            "Action",
            "Fantasy",
            "Adventure"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "HBO Max"
        ]
    },
    {
        "title": "The Lord of the Rings: The Two Towers",
        "synopsis": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        "releaseYear": 2002,
        "duration": 179,
        "director": "Peter Jackson",
        "cast": [
            "Elijah Wood",
            "Ian McKellen",
            "Viggo Mortensen",
            "Sean Astin"
        ],
        "language": "English",
        "country": "New Zealand",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=LbfMDwc4azU",
        "posterUrl": "https://image.tmdb.org/t/p/w500/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
        "genreKeywords": [
            "Action",
            "Fantasy",
            "Adventure"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "HBO Max"
        ]
    },
    {
        "title": "The Lord of the Rings: The Return of the King",
        "synopsis": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        "releaseYear": 2003,
        "duration": 201,
        "director": "Peter Jackson",
        "cast": [
            "Elijah Wood",
            "Viggo Mortensen",
            "Ian McKellen",
            "Sean Astin"
        ],
        "language": "English",
        "country": "New Zealand",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
        "posterUrl": "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "genreKeywords": [
            "Action",
            "Fantasy",
            "Adventure"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "HBO Max"
        ]
    },
    {
        "title": "Harry Potter and the Prisoner of Azkaban",
        "synopsis": "Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.",
        "releaseYear": 2004,
        "duration": 142,
        "director": "Alfonso Cuarón",
        "cast": [
            "Daniel Radcliffe",
            "Emma Watson",
            "Rupert Grint",
            "Gary Oldman"
        ],
        "language": "English",
        "country": "UK",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=1ZdlAg3j8nI",
        "posterUrl": "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
        "genreKeywords": [
            "Family",
            "Fantasy",
            "Adventure"
        ],
        "platformKeywords": [
            "Peacock",
            "HBO Max"
        ]
    },
    {
        "title": "Pan's Labyrinth",
        "synopsis": "In the Falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
        "releaseYear": 2006,
        "duration": 118,
        "director": "Guillermo del Toro",
        "cast": [
            "Ivana Baquero",
            "Sergi López",
            "Maribel Verdú",
            "Doug Jones"
        ],
        "language": "Spanish",
        "country": "Spain",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=E7XGNPXdlGk",
        "posterUrl": "https://image.tmdb.org/t/p/w500/z7xXihu5wHuSMWymq5VAulPVuvg.jpg",
        "genreKeywords": [
            "War",
            "Fantasy",
            "Drama"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "The Princess Bride",
        "synopsis": "A bedridden boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles in his quest to be reunited with his true love.",
        "releaseYear": 1987,
        "duration": 98,
        "director": "Rob Reiner",
        "cast": [
            "Cary Elwes",
            "Robin Wright",
            "Mandy Patinkin",
            "Chris Sarandon"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=WNNUc1t8K60",
        "posterUrl": "https://image.tmdb.org/t/p/w500/2FC9L9MrjBoGHYjYZjdWQdopVYb.jpg",
        "genreKeywords": [
            "Romance",
            "Fantasy",
            "Comedy",
            "Adventure"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Disney+"
        ]
    },
    {
        "title": "The Green Mile",
        "synopsis": "A tale set on death row in a Southern jail, where gentle giant John Coffey possesses the mysterious power to heal people's ailments and change the lives of the guards.",
        "releaseYear": 1999,
        "duration": 189,
        "director": "Frank Darabont",
        "cast": [
            "Tom Hanks",
            "Michael Clarke Duncan",
            "David Morse",
            "Bonnie Hunt"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=Ki4haFrqSrw",
        "posterUrl": "https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
        "genreKeywords": [
            "Fantasy",
            "Drama",
            "Crime"
        ],
        "platformKeywords": [
            "Netflix",
            "HBO Max"
        ]
    },
    {
        "title": "Everything Everywhere All at Once",
        "synopsis": "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
        "releaseYear": 2022,
        "duration": 139,
        "director": "Daniel Kwan, Daniel Scheinert",
        "cast": [
            "Michelle Yeoh",
            "Stephanie Hsu",
            "Ke Huy Quan",
            "Jamie Lee Curtis"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=wxN1T1uxQ2g",
        "posterUrl": "https://image.tmdb.org/t/p/w500/u68AjlvlutfEIcpmbYpKcdi09ut.jpg",
        "genreKeywords": [
            "Comedy",
            "Fantasy",
            "Science Fiction",
            "Adventure",
            "Action"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "The Prestige",
        "synopsis": "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
        "releaseYear": 2006,
        "duration": 130,
        "director": "Christopher Nolan",
        "cast": [
            "Christian Bale",
            "Hugh Jackman",
            "Scarlett Johansson",
            "Michael Caine"
        ],
        "language": "English",
        "country": "UK",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=o4gHCmTQDVI",
        "posterUrl": "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
        "genreKeywords": [
            "Science Fiction",
            "Mystery",
            "Drama"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Django Unchained",
        "synopsis": "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
        "releaseYear": 2012,
        "duration": 165,
        "director": "Quentin Tarantino",
        "cast": [
            "Jamie Foxx",
            "Christoph Waltz",
            "Leonardo DiCaprio",
            "Kerry Washington"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=0fUCuvNlOCg",
        "posterUrl": "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
        "genreKeywords": [
            "Action",
            "Drama",
            "Western"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "Oppenheimer",
        "synopsis": "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
        "releaseYear": 2023,
        "duration": 180,
        "director": "Christopher Nolan",
        "cast": [
            "Cillian Murphy",
            "Emily Blunt",
            "Matt Damon",
            "Robert Downey Jr."
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=uYPbbksJxIg",
        "posterUrl": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "genreKeywords": [
            "History",
            "Drama",
            "Biography"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "Whiplash",
        "synopsis": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
        "releaseYear": 2014,
        "duration": 106,
        "director": "Damien Chazelle",
        "cast": [
            "Miles Teller",
            "J.K. Simmons",
            "Melissa Benoist",
            "Paul Reiser"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=7d_jQycdQGo",
        "posterUrl": "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
        "genreKeywords": [
            "Music",
            "Drama"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    },
    {
        "title": "Taxi Driver",
        "synopsis": "A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action.",
        "releaseYear": 1976,
        "duration": 114,
        "director": "Martin Scorsese",
        "cast": [
            "Robert De Niro",
            "Jodie Foster",
            "Cybill Shepherd",
            "Albert Brooks"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=cDCFwF5g-W8",
        "posterUrl": "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
        "genreKeywords": [
            "Drama",
            "Crime"
        ],
        "platformKeywords": [
            "Apple TV",
            "Amazon Prime Video"
        ]
    },
    {
        "title": "The Social Network",
        "synopsis": "As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea, and by the co-founder who was squeezed out.",
        "releaseYear": 2010,
        "duration": 120,
        "director": "David Fincher",
        "cast": [
            "Jesse Eisenberg",
            "Andrew Garfield",
            "Justin Timberlake",
            "Rooney Mara"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=lB95KLmpRx4",
        "posterUrl": "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
        "genreKeywords": [
            "Drama",
            "Biography"
        ],
        "platformKeywords": [
            "Apple TV",
            "Netflix"
        ]
    },
    {
        "title": "Saving Private Ryan",
        "synopsis": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have all been killed in action.",
        "releaseYear": 1998,
        "duration": 169,
        "director": "Steven Spielberg",
        "cast": [
            "Tom Hanks",
            "Matt Damon",
            "Tom Sizemore",
            "Edward Burns"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "PREMIUM",
        "youtubeLink": "https://www.youtube.com/watch?v=9CiW_DbaaIM",
        "posterUrl": "https://image.tmdb.org/t/p/w500/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
        "genreKeywords": [
            "Action",
            "War",
            "Drama"
        ],
        "platformKeywords": [
            "Netflix",
            "Paramount+"
        ]
    },
    {
        "title": "Catch Me If You Can",
        "synopsis": "Barely 21 yet, Frank is a skilled forger who has passed as a doctor, lawyer and pilot. FBI agent Carl Hanratty, obsessed with tracking him down, finds him elusive.",
        "releaseYear": 2002,
        "duration": 141,
        "director": "Steven Spielberg",
        "cast": [
            "Leonardo DiCaprio",
            "Tom Hanks",
            "Christopher Walken",
            "Martin Sheen"
        ],
        "language": "English",
        "country": "USA",
        "pricing": "FREE",
        "youtubeLink": "https://www.youtube.com/watch?v=s-7pyIxz8Qg",
        "posterUrl": "https://image.tmdb.org/t/p/w500/ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg",
        "genreKeywords": [
            "Drama",
            "Crime",
            "Biography"
        ],
        "platformKeywords": [
            "Amazon Prime Video",
            "Netflix"
        ]
    }
];

// Helper to get movies by genre keyword
export function getSeedMoviesByGenre(genre: string): ISeedMovie[] {
    const q = genre.toLowerCase();
    return SEED_MOVIES_50.filter((m) =>
        m.genreKeywords.some((k: string) => k.toLowerCase().includes(q) || q.includes(k.toLowerCase()))
    );
}

// All supported genres with movie counts
export const SEED_GENRE_COUNTS = [
    { genre: "Action", count: getSeedMoviesByGenre("Action").length },
    { genre: "Sci-Fi", count: getSeedMoviesByGenre("Sci-Fi").length },
    { genre: "Drama", count: getSeedMoviesByGenre("Drama").length },
    { genre: "Comedy", count: getSeedMoviesByGenre("Comedy").length },
    { genre: "Crime", count: getSeedMoviesByGenre("Crime").length },
    { genre: "Horror", count: getSeedMoviesByGenre("Horror").length },
    { genre: "Animation", count: getSeedMoviesByGenre("Animation").length },
    { genre: "Romance", count: getSeedMoviesByGenre("Romance").length },
    { genre: "Adventure", count: getSeedMoviesByGenre("Adventure").length },
    { genre: "Fantasy", count: getSeedMoviesByGenre("Fantasy").length },
];
