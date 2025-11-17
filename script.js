const list = document.querySelector("ul");
let myLi = " ";

menuOptions.forEach((product) => {
  myLi += `

    <li class="">
      <img src="${product.src}" alt="${product.name}" />
        <p>${product.name}</p>
        <p class="item-price">${product.price}</p>
      </li>

      `;
});
list.innerHTML = myLi;
console.log(myLi);
