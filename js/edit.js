const editBtn = document.querySelector("#editBtn");
const cancelBtn = document.querySelector("#cancelBtn");

let id = localStorage.getItem("product_id");
let products = JSON.parse(localStorage.getItem("productData"));
let p = products.find(({ product_id }) => product_id == id);

editBtn.addEventListener("click", (e) => {
    const product_name=document.querySelector("#product_name").value;
    const image_url=document.querySelector("#image_url").value;
    const price=document.querySelector("#price").value;
    const description=document.querySelector("#description").value;
  if (
    product_name.length > 0 &&
    isValidUrl(image_url) &&
    price > 0 &&
    description.length > 0
  ) {
    e.preventDefault();
    p.product_name = product_name
    p.price = price
    p.description = description
    p.image_url = image_url

    window.localStorage.setItem("productData", JSON.stringify(products));
    window.localStorage.removeItem("product_id");
  }else{
    alert('please enter valid')
  }

  window.location.replace("../index.html");
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.localStorage.removeItem("product_id");
  window.location = "../index.html";
});
document.querySelector("#product_name").value = p.product_name;
document.querySelector("#image_url").value = p.image_url;
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