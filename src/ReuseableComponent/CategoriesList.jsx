import sports from "../img/sport_2.jpg";
import general from "../img/general.jpg";
import entertainment from "../img/entertainment.jpg";
import geography from "../img/geography.jpg";

export const Categories = [
  {
    id: "general",
    imageCategory: general,
    title: "General",
    route: "general",
    bgColor: "#1e88e5",
    description:
      "Welcome to the General Knowledge Quiz! This quiz is designed to test your awareness across a variety of topics including history, science, geography, current events, literature, pop culture, and more.Whether you're brushing up on facts or challenging your memory, this quiz will keep you on your toes. Each question will have multiple choice answers, so take your time, think critically, and choose the best option. Ready to test how much you know about the world around you? Let’s begin!",
  },
  {
    id: "sport",
    imageCategory: sports,
    title: "Sport",
    route: "sports",
    bgColor: "#b4e7ff",

    description:
      "Welcome to the Sports Quiz! This quiz will challenge your knowledge of all sports from football and basketball to athletics, tennis, and iconic moments in sports history. You’ll be asked questions about players, teams, tournaments, records, and legendary events from both local and international scenes. Whether you’re a casual fan or a die-hard sports lover, there’s something here to test your game. Ready to test how much you know about sports? Let’s begin!",
  },
  {
    id: "entertainment",
    imageCategory: entertainment,
    title: "Entertainment",
    route: "entertainment",
    bgColor: "#fb8c00",
    description:
      "Get ready to dive into the world of entertainment! This quiz covers movies, music, celebrities, TV shows, and pop culture moments from past to present. Whether you're a film buff, music lover, or just enjoy keeping up with the stars, this quiz will put your entertainment knowledge to the test. Ready to test how much you know about the world around you? Let’s begin!",
  },
  {
    id: "geography",
    imageCategory: geography,
    title: "Geography",
    route: "geography",
    bgColor: "#43a047",
    description:
      "Ready to explore the world? This quiz will test your knowledge of countries, capitals, continents, landmarks, and physical features of the Earth. From maps to mountains, cities to seas. challenge yourself and see how well you know our planet. Are you ready? Let's begin!",
  },
];
