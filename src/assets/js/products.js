const productName = document.querySelectorAll(".productName");
const productPrice = document.querySelectorAll(".productPrice");
const productImage = document.querySelectorAll(".productImage");
const showProduct = () => {
    const product = {

        id: 1, name: "Men shoes", price: "250", picture: ("src/components/images/men-shoes-1.jpg")
    };
    /*productName.innerText = product.name;
    productPrice.innerText = product.price + " $";
    productImage.src = product.picture;
    console.log(product.name + " " + product.price);
    console.log(productName, productImage, productPrice);
    */
    const allProducts = [

        { id: 1, name: "Eyes Glasses", price: 200, picture: ("src/components/images/sunglasses.jpg") },
        { id: 2, name: "Hat", price: 300, picture: ("src/components/images/hat-all.jpg") },
        { id: 3, name: "Women hat", price: 150, picture: ("src/components/images/women-hat-2.jpg") }
    ]
    for (let i = 0; i < allProducts.length; i++) {
        productName[i].innerText = allProducts[i].name;
        productPrice[i].innerText = allProducts[i].price + " $";
        productImage[i].src = allProducts[i].picture;

    }
    const productByCategory = {
        homme: [
            { id: 1, name: "Mens sneakers", price: 500, picture: ("src/components/images/men-shoes-4.jpg") }
        ]
    }

    for (let i = 0; i < productByCategory.length; i++) {
        productName[i].innexText = productByCategory[i].homme.name;
        console.log(productName[i].textContent);
    }
}
