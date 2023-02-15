
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let arr = JSON.parse(localStorage.getItem("productData")) || [];
    let product_name = document.querySelector("#product_name").value;
    let image_url = document.querySelector("#image_url").value;
    let price = document.querySelector("#price").value;
    let description = document.querySelector("#description").value;
    let product_id =Date.now();   ;
    
    if (
      product_name.length <= 0 &&
      image_url.length <= 0 &&
      price < 0 &&
      description.length <= 0
    ) {
      alert("enter something");
    } else if (
      product_name.length > 0 &&
      image_url.length > 0 &&
      price > 0 &&
      description.length >0
    ) {
      let arrData = {
        product_id,
        product_name,
        image_url,
        price,
        description,
      };
      arr.push(arrData);
      localStorage.setItem("productData", JSON.stringify(arr));
      location.replace('../index.html')
      setLocalStorage();
    } else {
      alert("enter valid input");
    }
  });

  cancelBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location = "../index.html";
})