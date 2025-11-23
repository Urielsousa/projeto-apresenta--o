const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".showAll");
const buttonMapAll = document.querySelector(".map-all");
let myLi = "";

function showAll(productsArray) {
  myLi = "";
  productsArray.forEach((product) => {
    myLi += `<li class="">
        <img src="${product.src}" alt="${product.name}" />
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price}</p>
      </li>
  `;
  });
  list.innerHTML = myLi;
}

function mapAll() {
  const newPrice = menuOptions.map((product) => ({
    ...product, //spreat
    price: product.price * 0.9,
  }));
  showAll(newPrice);
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAll);
