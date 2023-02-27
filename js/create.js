
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let arr = JSON.parse(localStorage.getItem("productData")) || [];
    let productName = document.querySelector("#productName").value;
    let imageUrl = document.querySelector("#imageUrl").value;
    let price = document.querySelector("#price").value;
    let description = document.querySelector("#description").value;
    let productId =Date.now();   ;
    
    if (
      productName.length <= 0 &&
      imageUrl.length <= 0 &&
      price < 0 &&
      description.length <= 0
    ) {
      alert("enter something");
    } else if (
      productName.length > 0 &&
      isValidUrl(imageUrl) &&
      price > 0 &&
      description.length >0
    ) {
      let arrData = {
        productId,
        productName,
        imageUrl,
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

function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}