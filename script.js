const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".showAll");
const buttonMapAll = document.querySelector(".map-all");
const buttonSomeAll = document.querySelector(".some-all");
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

function SomeALlitens() {
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0);

  list.innerHTML = `
<li> 
<p> O valor total dos intens é R$ ${totalValue}</p> 
</li> 
`;
}

buttonShowAll.addEventListener("click", () => showAll(menuOptions));
buttonMapAll.addEventListener("click", mapAll);
buttonSomeAll.addEventListener("click", SomeALlitens);
