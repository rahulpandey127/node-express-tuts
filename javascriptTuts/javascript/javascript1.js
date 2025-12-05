let promise = new Promise((resolve, reject) => {
  let pending = "Pending....";

  async function dataFetch() {
    let data = await fetch("https://jsonplaceholder.typicode.com/photos");

    let result = await data.json();

    if (result.length > 0) {
      resolve(result);
    } else {
      reject("Error :Data not found");
    }
  }

  console.log(pending);
  setTimeout(() => {
    dataFetch();
  }, 1000);
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
