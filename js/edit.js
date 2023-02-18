const editBtn = document.querySelector("#editBtn");
const cancelBtn = document.querySelector("#cancelBtn");

let id = localStorage.getItem("productId");
let products = JSON.parse(localStorage.getItem("productData"));
let p = products.find(({ productId }) => productId == id);

editBtn.addEventListener("click", (e) => {
    const productName=document.querySelector("#productName").value;
    const imageUrl=document.querySelector("#imageUrl").value;
    const price=document.querySelector("#price").value;
    const description=document.querySelector("#description").value;
  if (
    productName.length > 0 &&
    isValidUrl(imageUrl) &&
    price > 0 &&
    description.length > 0
  ) {
    e.preventDefault();
    p.productName = productName
    p.price = price
    p.description = description
    p.imageUrl = imageUrl

    window.localStorage.setItem("productData", JSON.stringify(products));
    window.localStorage.removeItem("productId");
  }else{
    alert('please enter valid')
  }

  window.location.replace("../index.html");
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.localStorage.removeItem("productId");
  window.location = "../index.html";
});
document.querySelector("#productName").value = p.productName;
document.querySelector("#imageUrl").value = p.imageUrl;
document.querySelector("#price").value = p.price;
document.querySelector("#description").value = p.description;

function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (err) {
      return false;
    }
  }