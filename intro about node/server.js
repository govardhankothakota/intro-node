let teluguFilmIndustry = {
  movies: [
    {
      title: "RRR",
      releaseYear: 2022,
      genre: ["Action", "Drama"],
      actors: [
        {
          name: "N.T. Rama Rao Jr.",
          role: "Komaram Bheem",
          character: "Freedom fighter",
        },
        {
          name: "Ram Charan",
          role: "Alluri Sitarama Raju",
          character: "Freedom fighter",
        },
        {
          name: "Alia Bhatt",
          role: "Sita",
          character: "Alluri's love interest",
        },
      ],
      director: "S. S. Rajamouli",
      crew: [
        { role: "Producer", name: "D. V. V. Danayya" },
        { role: "Music Director", name: "M. M. Keeravani" },
        { role: "Cinematographer", name: "K. K. Senthil Kumar" },
      ],
    },
    {
      title: "Baahubali: The Beginning",
      releaseYear: 2015,
      genre: ["Action", "Fantasy"],
      actors: [
        {
          name: "Prabhas",
          role: "Shivudu / Mahendra Baahubali",
          character: "The protagonist",
        },
        {
          name: "Rana Daggubati",
          role: "Bhallaladeva",
          character: "Antagonist",
        },
        {
          name: "Anushka Shetty",
          role: "Devasena",
          character: "Shivudu's love interest",
        },
      ],
      director: "S. S. Rajamouli",
      crew: [
        { role: "Producer", name: "Shobu Yarlagadda" },
        { role: "Music Director", name: "M. M. Keeravani" },
        { role: "Cinematographer", name: "K. K. Senthil Kumar" },
      ],
    },
    {
      title: "Pushpa: The Rise",
      releaseYear: 2021,
      genre: ["Action", "Thriller"],
      actors: [
        {
          name: "Allu Arjun",
          role: "Pushpa Raj",
          character: "Red sandalwood smuggler",
        },
        {
          name: "Rashmika Mandanna",
          role: "Srivalli",
          character: "Pushpa's love interest",
        },
        {
          name: "Fahadh Faasil",
          role: "Bhanwar Singh Shekhawat",
          character: "Antagonist",
        },
      ],
      director: "Sukumar",
      crew: [
        { role: "Producer", name: "Naveen Yerneni" },
        { role: "Music Director", name: "Devi Sri Prasad" },
        { role: "Cinematographer", name: "Miroslaw Kuba Brozek" },
      ],
    },
  ],
};

console.log("------------->");
console.log(`Movie : ${teluguFilmIndustry.movies[0].title}`);
console.log(`Director : ${teluguFilmIndustry.movies[0].director}`);
console.log(`Released : ${teluguFilmIndustry.movies[0].releaseYear}`);
console.log(
  `Gener : ${teluguFilmIndustry.movies[0].genre[0]},${teluguFilmIndustry.movies[0].genre[1]}`
);
console.log(
  `Actors : ${teluguFilmIndustry.movies[0].actors[0].name},${teluguFilmIndustry.movies[0].actors[1].name},${teluguFilmIndustry.movies[0].actors[2].name}`
);
console.log(`Music Director : ${teluguFilmIndustry.movies[0].crew[1].name}`);
console.log("------------->");

console.log(`Movie : ${teluguFilmIndustry.movies[1].title}`);
console.log(`Director : ${teluguFilmIndustry.movies[1].director}`);
console.log(`Released : ${teluguFilmIndustry.movies[1].releaseYear}`);
console.log(
  `Gener : ${teluguFilmIndustry.movies[1].genre[0]},${teluguFilmIndustry.movies[1].genre[1]}`
);
console.log(
  `Actors : ${teluguFilmIndustry.movies[1].actors[0].name},${teluguFilmIndustry.movies[1].actors[1].name},${teluguFilmIndustry.movies[1].actors[2].name}`
);
console.log(`Music Director : ${teluguFilmIndustry.movies[1].crew[1].name}`);
console.log("------------->");

console.log(`Movie : ${teluguFilmIndustry.movies[2].title}`);
console.log(`Director : ${teluguFilmIndustry.movies[2].director}`);
console.log(`Released : ${teluguFilmIndustry.movies[2].releaseYear}`);
console.log(
  `Gener : ${teluguFilmIndustry.movies[2].genre[0]},${teluguFilmIndustry.movies[2].genre[1]}`
);
console.log(
  `Actors : ${teluguFilmIndustry.movies[2].actors[0].name},${teluguFilmIndustry.movies[2].actors[1].name},${teluguFilmIndustry.movies[2].actors[2].name}`
);
console.log(`Music Director : ${teluguFilmIndustry.movies[2].crew[1].name}`);
console.log("------------->");
