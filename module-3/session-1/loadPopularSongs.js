db = connect("mongodb://localhost:27017/spotify");

db.popularSongs.insertMany([
  {
    title: "Shape of You",
    playCount: 5000000,
    period: "2021-2022",
  },
  {
    title: "Rolling in the Deep",
    playCount: 4500000,
    period: "2021-2022",
  },
  {
    title: "Hotel California",
    playCount: 4000000,
    period: "2021-2022",
  },
  {
    title: "Drown",
    playCount: 3500000,
    period: "2021-2022",
  },
  {
    title: "Akad",
    playCount: 3000000,
    period: "2021-2022",
  },
  {
    title: "Happy Song",
    playCount: 2500000,
    period: "2021-2022",
  },
  {
    title: "Imagine",
    playCount: 2000000,
    period: "2021-2022",
  },
  {
    title: "Sweet Child o' Mine",
    playCount: 1500000,
    period: "2021-2022",
  },
  {
    title: "Angin Pujaan Hujan",
    playCount: 1000000,
    period: "2021-2022",
  },
  {
    title: "Wonderwall",
    playCount: 500000,
    period: "2021-2022",
  },
]);
