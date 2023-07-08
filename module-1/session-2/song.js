songList = {
  title: "song title 1",
  artist: [{ name: "artis name" }],
  duration: 200,
};

const getSong = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(songList);
  }, 2000);
});

const getTrackSongWithPromises = () => {
  getSong
    .then((result) => {
      console.log(`Fetch data using promises => ${result}`);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getTrackSongWithAsync = async () => {
  try {
    const result = await getSong;
    console.log("Fetch data using async" + result);
  } catch (error) {
    console.log(`Failed to fetch data using async ${error}`);
  }
};

getTrackSongWithPromises();
getTrackSongWithAsync();
