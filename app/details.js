console.log("wiii");

const eventId = new URLSearchParams(window.location.search).get("eventId");
console.log("RESOURCE ID IS: " + eventId);

window.onload = async () => {
  const resp = await fetch("https://striveschool-api.herokuapp.com/api/agenda/" + eventId);
  const eventObj = await resp.json();

  const { name, description, time, price, _id, createdAt, updatedAt } = eventObj;

  console.log(description);

  const container = document.getElementById("event-details");

  container.innerHTML = `<h1 class="display-4">${name}</h1>
                        <p>${description}</p>
                        <p class="text-monospace">${new Date(time).toLocaleString()}</p>
                        <h3 class="mb-4">${price}€</h3>
                        <h6 class="bg-light py-3 pl-2">Server Details</h6>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item pl-2"><strong>id: </strong> ${_id} </li>
                            <li class="list-group-item pl-2"><strong>createdAt: </strong> ${createdAt}</li>
                            <li class="list-group-item pl-2"><strong>updatedAt: </strong> ${updatedAt}</li>
                        </ul>
                        <a href="./backoffice.html?eventId=${eventId}"> <button class="btn btn-success">Edit Event</button></a>`;
};
