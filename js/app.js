const p_id = document.querySelector("#p_id");
const p_name = document.querySelector("#p_name");
const p_price = document.querySelector("#p_price");
const selectId = document.querySelector("#selectId");
let table = document.getElementById("table");

let p_id_asc = true;
let p_name_asc = true;
let p_price_asc = true;


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
  let temp_products;
  if (p_id_asc) {
    temp_products = [...products].sort((a, b) => a.product_id - b.product_id);
  } else {
    temp_products = [...products].sort((a, b) => b.product_id - a.product_id);
  }
  p_id_asc = !p_id_asc;
  rendertable(temp_products);
});

p_name.addEventListener("click", (e) => {
  e.preventDefault();
  let products = JSON.parse(localStorage.getItem("productData"));
  let temp_products;
  if (p_name_asc) {
    temp_products = [...products].sort((a, b) =>
      b.product_name.localeCompare(a.product_name)
    );
  } else {
    temp_products = [...products].sort((a, b) =>
      a.product_name.localeCompare(b.product_name)
    );
  }
  p_name_asc = !p_name_asc;
  rendertable(temp_products);
});

p_price.addEventListener("click", (e) => {
  e.preventDefault();
  let products = JSON.parse(localStorage.getItem("productData"));
  let temp_products;
  if (p_price_asc) {
    temp_products = [...products].sort((a, b) => a.price - b.price);
    console.log(temp_products);
  } else {
    temp_products = [...products].sort((a, b) => b.price - a.price);
    console.log(temp_products);
  }
  p_price_asc = !p_price_asc;
  rendertable(temp_products);
});

function rendertable(temp_products) {
  table.innerHTML = "";
  temp_products.forEach((product) => {
    table.innerHTML += `
      <tr>
          <td>${product.product_id}</td>
          <td>${product.product_name}</td>
          <td><img src="${product.image_url}"></td>
          <td>₹${product.price}</td>
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
}

function setLocalStorage() {
  table.innerHTML = "";
  let arr = JSON.parse(localStorage.getItem("productData"));
  arr.forEach((product) => {
    table.innerHTML += `
        <tr>
            <td>${product.product_id}</td>
            <td>${product.product_name}</td>
            <td><img src="${product.image_url}"></td>
            <td>₹${product.price}</td>
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
}

setTimeout(() => {
  setLocalStorage();
}, 2);

function onDelete(id) {
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
function onEdit(id) {
  localStorage.setItem("product_id", JSON.stringify(id));
  location.replace("../pages/edit.html");
}

function onView(id) {
  localStorage.setItem("product_id", JSON.stringify(id));
  location.replace("../pages/view.html");
}
