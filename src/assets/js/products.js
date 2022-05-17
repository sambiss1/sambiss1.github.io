const productName = document.querySelectorAll(".productName");
const productPrice = document.querySelectorAll(".productPrice");
const productImage = document.querySelectorAll(".productImage");
const showProduct = () => {
    /*const allProducts = [

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
    }*/
}
document.addEventListener('DOMContentLoaded', showSomeProduct = () => {
    const allProducts = [
        { id: 1, name: "Eyes Glasses", price: 200, picture: ("src/components/images/sunglasses.jpg"), category: "Accesoires" },
        { id: 2, name: "Hat", price: 300, picture: ("src/components/images/hat-all.jpg"), category: "Accesoires" },
        { id: 3, name: "Women hat", price: 150, picture: ("src/components/images/women-hat-2.jpg"), category: "Accessoires" },
        { id: 4, name: "Men Sweat Shirt", price: 100, picture: ("src/components/images/man-model.jpg"), category: "Vétêments" }
    ]
    for (let i = 0; i < allProducts.length; i++) {
        if (productName.length < allProducts.length) {
            productName[i].innerText = allProducts[i].name;
            productPrice[i].innerText = allProducts[i].price + " $";
            productImage[i].src = allProducts[i].picture;

        }
        else {
            return;
        }



    }
    /*
        w3.displayObject("recentlyAdded", recentlyAddedProduct);
        w3.displayObject("accessoires01", category);
    */
})
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});

