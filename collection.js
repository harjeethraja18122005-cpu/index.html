var search = document.getElementById("search")
var productcontainer = document.getElementById("product")
var productlist = productcontainer.querySelectorAll(".product-box")

search.addEventListener("keyup", function(event) {
    var enteredValue = event.target.value.toUpperCase() 

    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none" 
        } else {
            productlist[count].style.display = "block" 
        }
    }
})