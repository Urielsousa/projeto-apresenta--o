const list = document.querySelector("ul");
const buttonShowAll = document.querySelector(".showAll");
let myLi = "";

function showAll() {
  myLi = "";
  menuOptions.forEach((product) => {
    myLi += `<li class="">
        <img src="${product.src}" alt="${product.name}" />
        <p>${product.name}</p>
        <p class="item-price">R$ ${product.price},00</p>
      </li>
  `;
  });
  list.innerHTML = myLi;
}

buttonShowAll.addEventListener("click", showAll);
