let cartItemsContainer = document.querySelector(".left__carts-container");

window.addEventListener("load", () => {
  fetch("https://shop-project1-d3570-default-rtdb.firebaseio.com/products.json")
    .then((res) => res.json())
    .then((data) => {
      convertProducts(data);
    });
});

function convertProducts(data) {
  if (data) {
    data = Object.entries(data);

    data.forEach((product) => {
      createProducts(product)
    });
  } else {
    console.log("Empty");
  }
}