const showProduct = () => {
    let productName = document.getElementById("productName");
    let productPrice = document.getElementById("productPrice");
    let productImage = document.getElementById("productImage");

    const product = {
        id: 1, name: "Men shoes", price: "250", picture: ("src/components/images/men-shoes-1.jpg")
    };
    productName.innerText = product.name;
    productPrice.innerText = product.price + " $";
    productImage.src = product.picture;
    // console.log(product.name + " " + product.price);
}
