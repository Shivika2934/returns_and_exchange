document
  .querySelector('button[type="submit"]')
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get the search input value
    const searchQuery = document
      .getElementById("order-name-return")
      .value.toLowerCase();

    // Get all the order items
    const orders = document.querySelectorAll(".grid .row .col-6");

    // Loop through the orders and display the one that matches the search query
    orders.forEach((order) => {
      const orderText = order.querySelector("p").textContent.toLowerCase();
      if (orderText.includes(searchQuery)) {
        order.style.display = "block";
      } else {
        order.style.display = "none";
      }
    });
  });
