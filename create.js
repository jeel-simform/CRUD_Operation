
submitBtn.addEventListener("click", (e) => {
    alert('insert called')
    e.preventDefault();
    // getting data from local storage
    let arr = JSON.parse(localStorage.getItem("productData")) || [];
    // getting input form input fields
    // let product_id= document.querySelector('#product_id').value;
    let product_name = document.querySelector("#product_name").value;
    let image_url = document.querySelector("#image_url").value;
    let price = document.querySelector("#price").value;
    let description = document.querySelector("#description").value;
  
    // let name = document.querySelector("#name").value;
    // let password = document.querySelector("#password").value;
    let product_id =Date.now();   ;
    
    // push it into arr
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
      // const arr=[]
  
      arr.push(arrData);
      localStorage.setItem("productData", JSON.stringify(arr));
      console.log("productData added succesfully from suybmit btn");
      // console.log(JSON.stringify(arr));
      location.replace('./index.html')
      setLocalStorage();
      alert("added succesfully");
    } else {
      alert("enter something");
    }
  });

  cancelBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    window.location = "./index.html";
})