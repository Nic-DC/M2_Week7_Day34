console.log("wiii");
// const getData = async (url) => {
//   const resp = await fetch(url);

//   if (resp.status === 404) throw new Error("resource not found");
//   if (!resp.ok) throw new Error("generic error, something wrong with the fetch");

//   const events = await resp.json();

//   return events;
// };

// const displayEvents = (events) => {
//   const eventsList = document.getElementById("currentEvents");

//   if (!Array.isArray(events)) throw new Error("You need to pass an array into the function");

//   events.forEach((event, idx) => {
//     const listItem = document.createElement("li");
//     listItem.className = "list-group-item d-flex justify-content-between align-items-center";

//     listItem.innerHTML = `<span class="mr-auto">${idx} — ${event.name}</span> <span class=flex-shrink-0><span class="badge badge-dark mr-2">${event.price}€</span> <a href="./details.html">VIEW DETAILS</a></span>`;
//     eventsList.appendChild(listItem);
//   });
// };

// const getAndDisplay = async (url) => {
//   const events = await getData(url);
//   console.log(events);
//   displayEvents(events);
// };

// window.onload = () => {
// const API_URL = "https://striveschool-api.herokuapp.com/api/agenda/"

// try {
//     // COMBINED APPROACH WITH OUTER SYNCHRONOUS CONTEXT
//     getAndDisplay(API_URL)
//     // getData(API_URL).then(events => { console.log(events); displayEvents(events) })

// } catch (err) {
//     console.log("ERROR HAPPENED", err)
//     const h2 = document.querySelector("h2")
//     h2.classList.add("text-danger")
//     h2.innerText = err.message + ", try to refresh the page"
// }
// console.log("LAST LOG")
// }

// window.onload = async () => {
//   const API_URL = "https://striveschool-api.herokuapp.com/api/agenda/";
//   // ASYNC AWAIT APPROACH
//   try {
//     const resp = await fetch(API_URL);

//     // EXITS THE EXECUTION IN ONE OF THESE TWO THROWINGS
//     if (resp.status === 404) throw new Error("resource not found");
//     if (!resp.ok) throw new Error("generic error, something wrong with the fetch");

//     // IF ERROR IS THROWN NOTHING HERE WILL BE RUNNING
//     const events = await resp.json();

//     const eventsList = document.getElementById("currentEvents");

//     eventsList.innerHTML = "";

//     if (!Array.isArray(events)) throw new Error("You need to pass an array into the function");
//     events.forEach((event, idx) => {
//       const listItem = document.createElement("li");
//       listItem.className = "list-group-item d-flex justify-content-between align-items-center";

//       listItem.innerHTML = `<span class="mr-auto">${idx} — ${event.name}</span> <span class=flex-shrink-0><span class="badge badge-dark mr-2">${event.price}€</span> <a href="./details.html?eventId=${event._id}">VIEW DETAILS</a></span>`;
//       eventsList.appendChild(listItem);
//     });
//   } catch (err) {
//     console.log("ERROR HAPPENED", err);
//     const h2 = document.querySelector("h2");
//     h2.classList.add("text-danger");
//     h2.innerText = err.message + ", try to refresh the page";
//   }

// ALTERNATIVE Promise.then()
// fetch(API_URL)
//     .then(resp => resp.json())
//     .then(events => {
//         //DOM MANIPULATION

//         console.log(events)
//         const eventsList = document.getElementById("currentEvents")

//         events.forEach((event, idx) => {
//             const listItem = document.createElement("li")
//             listItem.className = "list-group-item d-flex justify-content-between align-items-center"

//             listItem.innerHTML = `<span class="mr-auto">${idx} — ${event.name}</span> <span class=flex-shrink-0><span class="badge badge-dark mr-2">${event.price}€</span> <a href="#">VIEW DETAILS</a></span>`
//             eventsList.appendChild(listItem)
//         })
//     })

//   console.log("LAST LOG");
// };
// const options = {
//   method: "GET",
//   headers: {
//     Authorization:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmQyYWQ0YmUzZDAwMTU4NDYwMzgiLCJpYXQiOjE2NjgwODcwODIsImV4cCI6MTY2OTI5NjY4Mn0.VtbiHHI8R5YkZzRvBB0wBIO4SqtTZr10KGYVPHIVfOc",
//   },
// };

window.onload = async () => {
  //const API_URL = "https://striveschool-api.herokuapp.com/api/product/";
  // ASYNC AWAIT APPROACH
  try {
    //const resp = await fetch(API_URL, options);
    const resp = await fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmQyYWQ0YmUzZDAwMTU4NDYwMzgiLCJpYXQiOjE2NjgwODcwODIsImV4cCI6MTY2OTI5NjY4Mn0.VtbiHHI8R5YkZzRvBB0wBIO4SqtTZr10KGYVPHIVfOc",
      },
    });

    // EXITS THE EXECUTION IN ONE OF THESE TWO THROWINGS
    // if (resp.status === 404) throw new Error("resource not found");
    // if (!resp.ok) throw new Error("generic error, something wrong with the fetch");

    // IF ERROR IS THROWN NOTHING HERE WILL BE RUNNING
    const events = await resp.json();
    console.log(events);

    // const eventsList = document.getElementById("currentEvents");

    // eventsList.innerHTML = "";

    //   if (!Array.isArray(events)) throw new Error("You need to pass an array into the function");
    //   events.forEach((event, idx) => {
    //     const listItem = document.createElement("li");
    //     listItem.className = "list-group-item d-flex justify-content-between align-items-center";

    //     listItem.innerHTML = `<span class="mr-auto">${idx} — ${event.name}</span> <span class=flex-shrink-0><span class="badge badge-dark mr-2">${event.price}€</span> <a href="./details.html?eventId=${event._id}">VIEW DETAILS</a></span>`;
    //     eventsList.appendChild(listItem);
    //   });
  } catch (err) {
    console.log("ERROR HAPPENED", err);
    // const h2 = document.querySelector("h2");
    // h2.classList.add("text-danger");
    // h2.innerText = err.message + ", try to refresh the page";
  }
};
