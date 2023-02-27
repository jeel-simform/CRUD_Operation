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
  const arr = products.map((product) => product.productId);
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
      (product) => product.productId === Number(selectId.value)
    );
    rendertable(tempproduct);
  }
});

search.addEventListener("keyup", () => {
  let products = JSON.parse(localStorage.getItem("productData"));
  let tempproduct = [...products].filter((product) =>
    product.productName.toLowerCase().includes(search.value.toLowerCase())
  );
  rendertable(tempproduct);
});

p_id.addEventListener("click", (e) => {
  e.preventDefault();
  let products = JSON.parse(localStorage.getItem("productData"));
  let temp_products;
  if (p_id_asc) {
    temp_products = [...products].sort((a, b) => a.productId - b.productId);
  } else {
    temp_products = [...products].sort((a, b) => b.productId - a.productId);
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
      b.productName.localeCompare(a.productName)
    );
  } else {
    temp_products = [...products].sort((a, b) =>
      a.productName.localeCompare(b.productName)
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
          <td>${product.productId}</td>
          <td>${product.productName}</td>
          <td><img src="${product.imageUrl}"></td>
          <td>₹${product.price}</td>
          <td>${product.description}</td>
          <td>
          <td>
            <button class="btn btn-sm btn-success" onClick="onEdit(${product.productId})">
            <i class="fa fa-edit"></i>
            </button>
          </td>
          <td>
            <button class="btn btn-sm btn-danger delete" onClick="onDelete(${product.productId})")>
            <i class="fa fa-trash"></i>
            </button>
          </td>

          <td>
            <button class="btn btn-sm btn-primary" onClick="onView(${product.productId})" >
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
            <td>${product.productId}</td>
            <td>${product.productName}</td>
            <td><img src="${product.imageUrl}"></td>
            <td>₹${product.price}</td>
            <td>${product.description}</td>
            <td>
              <td>
                <button class="btn btn-sm btn-success" onClick="onEdit(${product.productId})">
                <i class="fa fa-edit"></i>
                </button>
              </td>
              <td>
                <button class="btn btn-sm btn-danger delete" onClick="onDelete(${product.productId})")>
                <i class="fa fa-trash"></i>
                </button>
              </td>

              <td>
                <button class="btn btn-sm btn-primary" onClick="onView(${product.productId})" >
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

    arr = arr.filter((product) => product.productId != id);

    localStorage.setItem("productData", JSON.stringify(arr));
    setLocalStorage();
  }
}
function onEdit(id) {
  localStorage.setItem("productId", JSON.stringify(id));
  location.replace("../pages/edit.html");
}

function onView(id) {
  localStorage.setItem("productId", JSON.stringify(id));
  location.replace("../pages/view.html");
}
