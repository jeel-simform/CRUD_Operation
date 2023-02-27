
const backBtn=document.querySelector("#backBtn");

let id=localStorage.getItem("productId");
let products=JSON.parse(localStorage.getItem('productData'));
let p=products.find(({productId}) =>productId==id);

backBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.localStorage.removeItem('productId')
    window.location = "../index.html";
})
  document.querySelector('#productName').value=p.productName;
  document.querySelector('#imageUrl').src=p.imageUrl;
  document.querySelector('#price').value=p.price;
  document.querySelector('#description').value=p.description;
