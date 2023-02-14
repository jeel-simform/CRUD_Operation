
const backBtn=document.querySelector("#backBtn");

let id=localStorage.getItem("product_id");
let products=JSON.parse(localStorage.getItem('productData'));
let p=products.find(({product_id}) =>product_id==id);

backBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    // alert('calcel event')
    window.localStorage.removeItem('product_id')
    window.location = "./index.html";
})
  document.querySelector('#product_name').value=p.product_name;
  document.querySelector('#image_url').value=p.image_url;
  document.querySelector('#price').value=p.price;
  document.querySelector('#description').value=p.description;
