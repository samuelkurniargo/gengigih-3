db = connect("mongodb://localhost:27017/spotify");

db.songs.insertMany([
    {
      title: "Hotel California",
      artist: "Eagles",
      album: "Hotel California",
    },
    {
      title: "Sweet Child o' Mine",
      artist: "Guns N' Roses",
      album: "Appetite for Destruction",
    },
    {
      title: "Wonderwall",
      artist: "Oasis",
      album: "(What's the Story) Morning Glory?",
    },
    {
      title: "Happy Song",
      artist: "Bring Me The Horizon",
      album: "That's The Spirit",
    },
    {
      title: "Throne",
      artist: "Bring Me The Horizon",
      album: "That's The Spirit",
    },
    {
      title: "Drown",
      artist: "Bring Me The Horizon",
      album: "That's The Spirit",
    },
    {
      title: "Akad",
      artist: "Payung Teduh",
      album: "Ruang Tunggu",
    },
    {
      title: "Di Atas Meja",
      artist: "Payung Teduh",
      album: "Ruang Tunggu",
    },
    {
      title: "Angin Pujaan Hujan",
      artist: "Payung Teduh",
      album: "Payung Teduh",
    },
    {
      title: "Hysteria",
      artist: "Muse",
      album: "Absolution",
    },
    {
      title: "Time is Running Out",
      artist: "Muse",
      album: "Absolution",
    },
  ]);