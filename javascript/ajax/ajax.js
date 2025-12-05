// let url = "https://jsonplaceholder.typicode.com/posts";
// let xhr = new XMLHttpRequest();

// xhr.open("GET", url, true);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     let data = xhr.response;
//     let json = JSON.parse(data);
//     json.map((item) => {
//       console.log(item.title);
//     });
//   }
// };

// xhr.onload = function () {
//   if ((xhr.status = 200)) {
//     let data = xhr.response;
//     let json = JSON.parse(data);
//     json.map((item) => {
//       console.log(item.id);
//     });
//   }
// };

// xhr.send();

// let promise = new Promise((resolve, reject) => {
//   xhr.onload = function () {
//     if ((xhr.status = 200)) {
//       let data = xhr.response;
//       let json = JSON.parse(data);
//       resolve({ status: xhr.status, data: json });
//     } else {
//       reject({ status: xhr.status, data: xhr.response });
//     }
//   };

//   xhr.send();
// });

// function getdata(data){
// console.log(data);
// }
// promise
//   .then((data) => {
//     return data;
//   }).then((data) => {
//     getdata(data);

//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(getdata());

// let url = "https://jsonplaceholder.typicode.com/posts";
// let fetchData = fetch(url);

// fetchData
//   .then((response) => {
//     // return response.json(); //return promise
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("something went wrong");
//     }
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch();

// let data = fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((json) => json);

// data
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/**
 * Asynchronous function to make a POST request to JSONPlaceholder API
 * @returns {Promise<Response>} - Returns a Promise that resolves to the Response object
 */
let call = async () =>{
  // Fetch data from the API using POST method
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (response.ok) {
    let data = await response.json();
    return data;
  } else {
    throw new Error("something went wrong");
  }
};

call()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
