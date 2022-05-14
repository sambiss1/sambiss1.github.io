let mobileCategoryMenu = document.getElementById("mobile__category__menu");

/* Show Category Menu function */
const showCategoryMenu = () => {
    if (mobileCategoryMenu.style.display === "none") {
        mobileCategoryMenu.classList.toggle("category__navigation__bar--mobile");
    }
    else {
        mobileCategoryMenu.classList.replace("category__navigation__bar--mobile", "active__category__navigation__mobile");
    }

}
/* Hide Category Menu function */
const hideCategoryMenu = () => {
    if (mobileCategoryMenu.style.display === "flex") {
        mobileCategoryMenu.classList.toggle("active__category__navigation__mobile");
    } else {
        mobileCategoryMenu.classList.replace("active__category__navigation__mobile", "category__navigation__bar--mobile");
    }

}
// Brand name 
const brandName = document.getElementById("brand__name");
const mainFunction = () => {
    if (window.screen.width > "600px" && window.screen.width < "768px") {
        brandName.style.fontSize = "2.5em";
        brandName.style.color = "#000"
    }
}

// Scroll to top button fucntion
let scrollToTopButton = document.querySelector(".scrollToTopButtonContainer")

document.addEventListener("scroll", scrollTopFunction = (event) => {
    console.log(window.innerWidth + " " + window.innerHeight);
    if (window.innerHeight <= 600) {
        scrollToTopButton.style.top = "70%";
    }

    if (window.scrollY >= "20") {
        scrollToTopButton.style.display = "flex"
    } else {
        scrollToTopButton.style.display = "none";
    }


})