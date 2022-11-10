const eventId = new URLSearchParams(window.location.search).get("eventId");

const endpoint = eventId
  ? "https://striveschool-api.herokuapp.com/api/agenda/" + eventId
  : "https://striveschool-api.herokuapp.com/api/agenda/";
const method = eventId ? "PUT" : "POST";

window.onload = async () => {
  if (eventId) {
    const response = await fetch(endpoint);
    const eventObj = await response.json();

    const { name, description, time, price } = eventObj;

    console.log(time);

    document.getElementById("name").value = name;
    document.getElementById("description").value = description;
    document.getElementById("time").value = time.split(".")[0];
    document.getElementById("price").value = price;

    const deleteBtn = document.querySelector(".btn-danger").classList.remove("d-none");
  }
};

const isLoading = (bool) => {
  const spinner = document.querySelector(".spinner-border");
  if (bool) {
    spinner.classList.remove("d-none");
  } else {
    spinner.classList.add("d-none");
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();
  isLoading(true);
  console.log("HEY FORM GOT SUBMITTED");

  try {
    const myEvent = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      price: document.getElementById("price").value,
      time: document.getElementById("time").value,
    };

    const response = await fetch(endpoint, {
      method: method,
      body: JSON.stringify(myEvent),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("generic error, something wrong with the fetch");

    const event = await response.json();
    isLoading(false);
    if (eventId) {
      alert("Event with id: " + event._id + "got edited successfully");
    } else {
      alert("Event created successfully, id is:  " + event._id);
    }
  } catch (error) {
    alert("Something went wrong, " + error);
  }
};

const handleDelete = async () => {
  const hasAccepted = confirm("do you really want to delete this?");
  if (hasAccepted) {
    const response = await fetch(endpoint, {
      method: "DELETE",
    });

    const deletedObj = await response.json();
    alert("Event DELETED, id was: " + deletedObj._id);
    window.location.assign("/");
  }
};
