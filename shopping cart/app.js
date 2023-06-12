let cartItemsContainer = document.querySelector(".left__carts-container");
let scrolledHeight;
document.body.addEventListener("keyup", (e) => {
  let { key } = e;

  if (key === "Enter") {
    cartItemsContainer.insertAdjacentHTML(
      "beforeend",
      `
          <div class="cart-item">
            <div class="cart-img">
              <img src="" alt="" class="cart__img" />
            </div>
            <div class="cart-infos">
              <div class="info__category">Cloths</div>
              <div class="info__name">Cotton T-shirt</div>
            </div>
            <div class="cart-count">
              <input type="number" value="1" class="count__input" />
            </div>
            <div class="cart-price">$1212</div>
            <button class="cart-close">X</button>
          </div>
`
    );
  }

  scrolledHeight = cartItemsContainer.scrollHeight;
  cartItemsContainer.scrollTo(scrolledHeight, scrolledHeight);
});
