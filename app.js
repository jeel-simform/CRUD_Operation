
let table = document.getElementById("table");
// setting local storage

function setLocalStorage() {
    table.innerHTML = "";
    let arr = JSON.parse(localStorage.getItem("productData"));
    arr.forEach((product) => {
        // console.log(product.product_id);
        // let id=product.product_id;
      table.innerHTML += `
        <tr>
            <td>${product.product_id}</td>
            <td>${product.product_name}</td>
            <td>${product.image_url}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
            <td>
                <button class="btn btn-sm btn-success" onClick="onEdit(${product.product_id})">
                    <i class="fa fa-edit"></i>
                </button>
            </td>
            <td>
                <button class="btn btn-sm btn-danger delete" onClick="onDelete(${product.product_id})")>
                    <i class="fa fa-trash"></i>
                </button>
            </td>
        </tr>`;
    });
    // location.replace('./index.html')
  
}

setTimeout(() => {
  setLocalStorage();
}, 2);

// submitBtn.addEventListener("click", (e) => {
//   alert('insert called')
//   e.preventDefault();
//   // getting data from local storage
//   let arr = JSON.parse(localStorage.getItem("productData")) || [];
//   // getting input form input fields
//   // let product_id= document.querySelector('#product_id').value;
//   let product_name = document.querySelector("#product_name").value;
//   let image_url = document.querySelector("#image_url").value;
//   let price = document.querySelector("#price").value;
//   let description = document.querySelector("#description").value;

//   // let name = document.querySelector("#name").value;
//   // let password = document.querySelector("#password").value;
//   let product_id =Date.now();   ;
  
//   // push it into arr
//   if (
//     product_name.length <= 0 &&
//     image_url.length <= 0 &&
//     price < 0 &&
//     description.length <= 0
//   ) {
//     alert("enter something");
//   } else if (
//     product_name.length > 0 &&
//     image_url.length > 0 &&
//     price > 0 &&
//     description.length >0
//   ) {
//     let arrData = {
//       product_id,
//       product_name,
//       image_url,
//       price,
//       description,
//     };
//     // const arr=[]

//     arr.push(arrData);
//     localStorage.setItem("productData", JSON.stringify(arr));
//     console.log("productData added succesfully from suybmit btn");
//     // console.log(JSON.stringify(arr));
//     location.replace('./index.html')
//     setLocalStorage();
//     alert("added succesfully");
//   } else {
//     alert("enter something");
//   }
// });

//deletebutton
function onDelete(id) {
  console.log("delete id"+id);
  let text=`are you sure to delete this ${id}product`;

    if(confirm(text)==false){
      return;
    }else{
      let arr = JSON.parse(localStorage.getItem('productData'));

      arr = arr.filter((product) => product.product_id != id);
    
      localStorage.setItem('productData', JSON.stringify(arr));
      setLocalStorage();
    }
}
// edit function
function onEdit(id) {
  localStorage.setItem('product_id', JSON.stringify(id));
  alert('edit function called ')
  location.replace('./edit.html')
}
