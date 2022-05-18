const productName = document.querySelectorAll(".productName");
const productPrice = document.querySelectorAll(".productPrice");
const productImage = document.querySelectorAll(".productImage");

// Recently Added product selection 
const recentlyAddedName = document.querySelectorAll(".recentlyAddedName");
const recentlyAddedPrice = document.querySelectorAll(".recentlyAddedPrice");
const recentlyAddedImage = document.querySelectorAll(".recentlyAddedImage");
const recentlyAddedTag = document.querySelectorAll(".recentlyAddedTag")


// Accessoire product selection 
const accessoireTag = document.querySelectorAll(".accessoireTag");
const accessoireTagImage = document.querySelectorAll(".accessoireTagImage");
const accessoireTagName = document.querySelectorAll(".accessoireTagName");
const accessoireTagPrice = document.querySelectorAll(".accessoireTagPrice");
// All Products
const allProductsTags = {
    recentlyAdded: [
        { id: 1, name: "Men shoes (Westone)", price: 500, picture: ("src/components/images/men-shoes-2.jpg"), tag: "Men" },
        { id: 2, name: "African Women Scarf", price: 50, picture: ("src/components/images/african-women-scarf.jpg"), tag: "Women" },
        { id: 3, name: "Bag", price: 100, picture: ("src/components/images/bags-all.jpg"), tag: "All" },
        { id: 4, name: "Women Jewelry", price: 150, picture: ("src/components/images/jewelry-1.jpg"), tag: "Women" }
    ],
    accessoires: [
        { id: 5, name: "Women Jewelry", price: 150, picture: ("src/components/images/jewelry-1.jpg"), tag: "Women" },
        { id: 8, name: "Men Basket(Nike)", price: 100, picture: ("src/components/images/men-shoes-4.jpg"), tag: "Men" },
        { id: 6, name: "Women Set (bag and hat)", price: 300, picture: ("src/components/images/women-hat.jpg"), tag: "Women" },
        { id: 7, name: "Women Set (Watch, Ring, Strap)", price: 200, picture: ("src/components/images/watchs-1.jpg"), tag: "Women" },
        { id: 9, name: "Bag", price: 100, picture: ("src/components/images/bags-all.jpg"), tag: "Men" }
    ]
}
document.addEventListener('DOMContentLoaded', showSomeProduct = () => {
    // Loop for recently added product
    for (let i = 0; i < allProductsTags.recentlyAdded.length; i++) {
        // Show product Name
        recentlyAddedName[i].textContent = allProductsTags.recentlyAdded[i].name;

        // Show product price
        recentlyAddedPrice[i].innerText = allProductsTags.recentlyAdded[i].price + " $";

        // Show product picture
        recentlyAddedImage[i].src = allProductsTags.recentlyAdded[i].picture;

        // Show product tag
        recentlyAddedTag[i].innerText = allProductsTags.recentlyAdded[i].tag;
    }

    // Loop for accessoire product 
    for (let i = 0; i < allProductsTags.accessoires.length - 2; i++) {
        // Name
        accessoireTagName[i].innerText = allProductsTags.accessoires[i].name;

        // Price 
        accessoireTagPrice[i].innerText = allProductsTags.accessoires[i].price + " $";

        // Image(picture)
        accessoireTagImage[i].src = allProductsTags.accessoires[i].picture;

        // Tag
        accessoireTag[i].innerText = allProductsTags.accessoires[i].tag;
    }



})

/* Recently added slider */

/* Top categories sliders */
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

const testProduct = () => {
    myProduct = {
        test: [
            {
                id: 1, name: "Eyes Glasses"
            },
            { id: 2, name: "Sam" }

        ]
    }
    for (let i = 0; i < myProduct.test.length; i++) {
        console.log(test[i]);
    }
}