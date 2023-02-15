const p_id = document.querySelector("#p_id");
const p_name = document.querySelector("#p_name");
const p_price = document.querySelector("#p_price");
const selectId = document.querySelector("#selectId");

let p_id_asc = true;
let p_name_asc = true;
let p_price_asc = true;

// console.log(p_id);
let table = document.getElementById("table");
// setting local storage
function renderOptions() {
  let products = JSON.parse(localStorage.getItem("productData"));
  document.querySelector("#selectId").innerHTML =
    '<option value="all">All</option>';
  const arr = products.map((product) => product.product_id);
  arr.forEach((Id) => {
    document
      .querySelector("#selectId")
      .insertAdjacentHTML("beforeend", `<option value=${Id}>${Id}</option>`);
  });
}
renderOptions();

selectId.addEventListener("change", () => {
  let products = JSON.parse(localStorage.getItem("productData"));
  console.log(selectId.value);
  if (selectId.value == "all") {
    rendertable(products);
  } else {
    let tempproduct = [...products].filter(
      (product) => product.product_id === Number(selectId.value)
    );
    rendertable(tempproduct);
  }
});

search.addEventListener("keyup", () => {
  let products = JSON.parse(localStorage.getItem("productData"));
  let tempproduct = [...products].filter((product) =>
    product.product_name.toLowerCase().includes(search.value.toLowerCase())
  );
  rendertable(tempproduct);
});

p_id.addEventListener("click", (e) => {
  e.preventDefault();
  let products = JSON.parse(localStorage.getItem("productData"));
  // console.log(products);
  let temp_products;
  if (p_id_asc) {
    temp_products = [...products].sort((a, b) => a.product_id - b.product_id);
    console.log(temp_products);
  } else {
    // console.log(temp_products);
    temp_products = [...products].sort((a, b) => b.product_id - a.product_id);
    console.log(temp_products);
    // rendertable(temp_products)
  }
  p_id_asc = !p_id_asc;
  rendertable(temp_products);
  // console.log(products);
});

p_name.addEventListener("click", (e) => {
  e.preventDefault();
  let products = JSON.parse(localStorage.getItem("productData"));
  // console.log(products);
  let temp_products;
  if (p_name_asc) {
    // temp_products = [...products].sort((a, b) =>
    //       a.productName.localeCompare(b.productName)
    // console.log(temp_products);
    temp_products = [...products].sort((a, b) =>
      b.product_name.localeCompare(a.product_name)
    );
  } else {
    // console.log(temp_products);
    temp_products = [...products].sort((a, b) =>
      a.product_name.localeCompare(b.product_name)
    );
    // rendertable(temp_products)
  }
  p_name_asc = !p_name_asc;
  rendertable(temp_products);
  // console.log(products);
});

p_price.addEventListener("click", (e) => {
  e.preventDefault();
  let products = JSON.parse(localStorage.getItem("productData"));
  // console.log(products);
  let temp_products;
  if (p_price_asc) {
    temp_products = [...products].sort((a, b) => a.price - b.price);
    console.log(temp_products);
  } else {
    // console.log(temp_products);
    temp_products = [...products].sort((a, b) => b.price - a.price);
    console.log(temp_products);
    // rendertable(temp_products)
  }
  p_price_asc = !p_price_asc;
  rendertable(temp_products);
  // console.log(products);
});

function rendertable(temp_products) {
  table.innerHTML = "";
  // let arr = JSON.parse(localStorage.getItem("productData"));
  temp_products.forEach((product) => {
    // console.log(product.product_id);
    // let id=product.product_id;
    table.innerHTML += `
      <tr>
          <td>${product.product_id}</td>
          <td>${product.product_name}</td>
          <td><img src="${product.image_url}"></td>
          <td>${product.price}</td>
          <td>${product.description}</td>
          <td>
              <button class="btn btn-sm btn-success" onClick="onEdit(${product.product_id})">
                  <i class="fa fa-edit></i>
              </button>
          </td>
          <td>
              <button class="btn btn-sm btn-danger delete" onClick="onDelete(${product.product_id})")>
                  <i class="fa fa-trash"></i>
              </button>
          </td>

          <td>
              <button class="btn btn-sm btn-danger delete" onClick="onDelete(${product.product_id})")>
              <i class="fa-light fa-eye"></i>
              </button>
          </td>
      </tr>`;
  });
}

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
            <td><img src="${product.image_url}"></td>
            <td>${product.price}</td>
            <td>${product.description}</td>
            <td>
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

              <td>
                <button class="btn btn-sm btn-primary" onClick="onView(${product.product_id})" >
                <i class="fa fa-eye"></i>
                </button>
              </td>
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
  console.log("delete id" + id);
  let text = `are you sure to delete this ${id}product`;

  if (confirm(text) == false) {
    return;
  } else {
    let arr = JSON.parse(localStorage.getItem("productData"));

    arr = arr.filter((product) => product.product_id != id);

    localStorage.setItem("productData", JSON.stringify(arr));
    setLocalStorage();
  }
}
// edit function
function onEdit(id) {
  localStorage.setItem("product_id", JSON.stringify(id));
  alert("edit function called ");
  location.replace("./edit.html");
}

function onView(id) {
  localStorage.setItem("product_id", JSON.stringify(id));
  alert("view function called ");
  location.replace("./view.html");
}
