db = connect("mongodb://localhost:27017/spotify");

db.artists.insertMany([
  {
    name: "Eagles",
    dateOfBirth: ISODate("1960-08-01"),
    genres: ["Rock"],
  },
  {
    name: "Guns N' Roses",
    dateOfBirth: ISODate("1960-08-01"),
    genres: ["Rock"],
  },
  {
    name: "Oasis",
    dateOfBirth: ISODate("1960-08-01"),
    genres: ["Rock"],
  },
  {
    name: "Bring Me The Horizon",
    dateOfBirth: ISODate("1960-08-01"),
    genres: ["Metalcore", "Pop Rock", "Rock Alternative"],
  },
  {
    name: "The Beatles",
    dateOfBirth: ISODate("1960-08-01"),
    genres: ["Rock", "Pop"],
  },
  {
    name: "John Lennon",
    dateOfBirth: ISODate("1960-08-01"),
    genres: ["Rock"],
  },
  {
    name: "Adele",
    dateOfBirth: ISODate("1960-08-01"),
    genres: ["Pop", "Soul"],
  },
  {
    name: "Ed Sheeran",
    dateOfBirth: ISODate("1960-08-01"),
    genres: ["Pop", "Folk"],
  },
  {
    name: "Michael Jackson",
    dateOfBirth: ISODate("1960-08-01"),
    genres: ["Pop", "R&B"],
  },
  {
    name: "Queen",
    dateOfBirth: ISODate("1960-08-01"),
    genres: ["Rock"],
  },
]);
