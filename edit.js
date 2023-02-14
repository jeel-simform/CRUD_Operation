const editBtn=document.querySelector("#editBtn");
const cancelBtn=document.querySelector("#cancelBtn");

let id=localStorage.getItem("product_id");
let products=JSON.parse(localStorage.getItem('productData'));
let p=products.find(({product_id}) =>product_id==id);


editBtn.addEventListener('click',(e)=>{
    // alert('edit event')
    e.preventDefault();
    p.product_name=document.querySelector('#product_name').value;
    p.price=document.querySelector('#price').value;
    p.description=document.querySelector('#description').value;
    p.image_url=document.querySelector('#image_url').value;

    window.localStorage.setItem('productData',JSON.stringify(products));
    window.localStorage.removeItem('product_id')
    window.location.replace('./index.html')
})

cancelBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    // alert('calcel event')
    window.localStorage.removeItem('product_id')
    window.location = "./index.html";
})
  document.querySelector('#product_name').value=p.product_name;
  document.querySelector('#image_url').value=p.image_url;
  document.querySelector('#price').value=p.price;
  document.querySelector('#description').value=p.description;
