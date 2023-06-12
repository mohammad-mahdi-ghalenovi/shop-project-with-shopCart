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
    cartItemsContainer.innerHTML = "";

    data.forEach((product) => {
      createProducts(product[1]);
    });
  } else {
    console.log("Empty");
  }
}

function createProducts(product) {
  cartItemsContainer.insertAdjacentHTML(
    "beforeend",
    `
  <div class="cart-item">
  <div class="cart-img">
      <img src="${product.images[0]}" alt="" class="cart__img" />
  </div>
  <div class="cart-infos">
      <div class="info__category">${product.category}</div>
      <div class="info__name">${product.title}</div>
  </div>
  <div class="cart-count">
      <input type="number" value="1" class="count__input" />
  </div>
  <div class="cart-price">$${product.price}</div>
  <button class="cart-close">X</button>
</div>
  `
  );
}
