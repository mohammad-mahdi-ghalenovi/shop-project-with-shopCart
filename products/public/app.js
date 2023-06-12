const inputElem = document.querySelector("input");
const productContainer = document.querySelector(".product-container");
const successNotitfication = document.querySelector(".success-notif");
let typedProduct;

inputElem.addEventListener("keydown", (e) => {
  let { key } = e;

  typedProduct = inputElem.value.toLowerCase();

  if (key === "Enter") {
    findProductBySearch(typedProduct);
  }
});

function findProductBySearch(product) {
  fetch(`https://dummyjson.com/products/search?q=${product}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.products[0]);
    })
    .catch((err) => console.log(err));
}

// create products

window.addEventListener("load", () => {
  fetch(`https://dummyjson.com/products`)
    .then((res) => res.json())
    .then((data) => {
      data.products.forEach((product) => {
        createProducts(product);
      });
    })
    .catch((err) => console.log(err));
});

function createProducts(product) {
  productContainer.insertAdjacentHTML(
    "beforeend",
    `
    <div class="product">
    <div class="product-img" style="background-image: url(${product.images[0]})"></div>
    <div class="product-info">
        <div class="info__title">${product.title}</div>
        <div class="info__category">${product.category}</div>
    </div>
    <div class="product-price">
        <p>$${product.price}</p>
        <p>In stoke</p>
    </div>
    <div class="product-controls">
        <button class="add-to-cart" onclick="findProduct(${product.id})">Add to cart</button>
        <button class="add-to-favourite">Like</button>
    </div>
  </div>
    `
  );
}

function findProduct(productID) {
  fetch(`https://dummyjson.com/products/${productID}`)
    .then((res) => res.json())
    .then((data) => {
      sendToShopCart(data);
    })
    .catch((err) => console.log(err));
}

function sendToShopCart(product) {
  fetch(
    "https://shop-project1-d3570-default-rtdb.firebaseio.com/products.json",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      showNotfi();
    })
    .catch((err) => console.log(err));
}

function showNotfi() {
  successNotitfication.style.display = "block";

  setTimeout(() => {

    successNotitfication.classList.add("notif-active");

    setTimeout(() => {

      successNotitfication.classList.remove("notif-active");

      setTimeout(() => {
        
        successNotitfication.style.display = "none";

      }, 1000);
    }, 1000);
  }, 1000);
}