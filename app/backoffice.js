const productId = new URLSearchParams(window.location.search).get("productId");

const endpoint = productId
  ? "https://striveschool-api.herokuapp.com/api/product/" + productId
  : "https://striveschool-api.herokuapp.com/api/product/";
const method = productId ? "PUT" : "POST";

window.onload = async () => {
  if (productId) {
    const response = await fetch(endpoint);
    const productObj = await response.json();

    const { name, description, brand, imageUrl, price } = productObj;

    console.log(time);

    document.getElementById("name").value = name;
    document.getElementById("description").value = description;
    document.getElementById("brand").value = brand;
    // document.getElementById("brand").value = brand.split(".")[0];
    document.getElementById("price").value = price;
    document.getElementById("imageUrl").value = imageUrl;

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
    const myProduct = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      brand: document.getElementById("brand").value,
      imageUrl: (document.getElementById("imageUrl").value = imageUrl),
      price: document.getElementById("price").value,
    };

    const response = await fetch(endpoint, {
      method: method,
      body: JSON.stringify(myProduct),
      headers: {
        "Content-Type": "application/json",
        //Authorization:
        //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmQyYWQ0YmUzZDAwMTU4NDYwMzgiLCJpYXQiOjE2NjgwODcwODIsImV4cCI6MTY2OTI5NjY4Mn0.VtbiHHI8R5YkZzRvBB0wBIO4SqtTZr10KGYVPHIVfOc",
      },
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmQyYWQ0YmUzZDAwMTU4NDYwMzgiLCJpYXQiOjE2NjgwODcwODIsImV4cCI6MTY2OTI5NjY4Mn0.VtbiHHI8R5YkZzRvBB0wBIO4SqtTZr10KGYVPHIVfOc",
    });

    if (!response.ok) throw new Error("generic error, something wrong with the fetch");

    const product = await response.json();
    isLoading(false);
    if (productId) {
      alert("Product with id: " + product._id + "got edited successfully");
    } else {
      alert("Product created successfully, id is:  " + product._id);
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
    alert("PRODUCT DELETED, id was: " + deletedObj._id);
    window.location.assign("/");
  }
};
// console.log("testing");
