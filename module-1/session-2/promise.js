const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

console.log("Before 1 second!");
wait(2000).then(() => {
  console.log("after 2 second");
  console.log("after 3 second");
  console.log("after 4 second");
});
