/*
    Get information
    => Menu <=
    => Button <=
*/
let menu    = document.querySelector(".nav-section .navbar .menu"),
    menuBtn = document.querySelector(".nav-section .navbar .profile-box i:last-of-type");

// Toggle active class, [Show or hide menu]
menuBtn.onclick = () => {
    menu.classList.toggle("active");
}

/*
    Get information
    => Banner section <=
    => Indicators <=
    => Left button <=
    => Right button <=
*/
let bannerSection = document.querySelectorAll(".banner .banner-section .childern"),
    indicators    = document.querySelectorAll(".banner .indicators span"),
    leftBtn       = document.querySelector(".banner .left i"),
    rightBtn      = document.querySelector(".banner .right i");

// Array of childern for banner section
let childernBannerSection = Array.from(bannerSection);
// console.log(childernBannerSection);

// Length of childern banner section
let lengthChildernBannerSection = childernBannerSection.length;

// Count number for indicators, by default is 0
let count = 0;

// Variable for count infos
let info = 0;

// Variable for count imgs
let imgs = 1;

function leftRightBannerSection(btn, dir) {
    btn && btn.addEventListener("click", () => {
        if(dir === "left") {
            info -= 2;

            imgs -= 2;
        
            count--;
        } else {
            info += 2;

            imgs += 2;
        
            count++;
        }

        if(count < 0) {
            count = Math.floor((lengthChildernBannerSection - 1) / 2);
            info  = Math.floor((lengthChildernBannerSection - 1) / 2) * 2;
            imgs  = (Math.floor((lengthChildernBannerSection - 1) / 2) * 2 ) + 1;
        }

        if(count === Math.floor((lengthChildernBannerSection) / 2)) {
            count = 0;
            info  = 0;
            imgs  = 1;
        }

        showHideImgs(info, imgs);

        handleClass();
    });
}

// Function to show or hide images
function showHideImgs(info, imgs) {
    // Hide to all childern banner section
    for(let i = 0; i < childernBannerSection.length; i++) {
        childernBannerSection[i].style.display = "none";
    }

    // Show to all childern banner section
    childernBannerSection[info].style.display = "flex";
    childernBannerSection[imgs].style.display = "flex";
}

// Function to handle active class
function handleClass() {
    // To remove all active class from indicators
    indicators.forEach((indicator) => {
        indicator.classList.remove("active");
    });

    // Add active class to the current indicator
    indicators[count].classList.add("active");
}

leftRightBannerSection(leftBtn, "left");
leftRightBannerSection(rightBtn, "right");

/*
    Get information
    => Search page <=
    => Exit <=
    => input field <=
    => Search button <=
*/
let searchPage = document.querySelector(".search-page"),
    exit       = document.querySelector(".search-page .search-box span"),
    inputField = document.querySelector(".search-page .search-box .search input"),
    searchBtn  = document.querySelector(".nav-section .navbar .profile-box i:first-of-type");

// Function to show or hide search page on click
function handleSearchPage(btn, toggle, overFlow, inputControl) {
    btn.addEventListener("click", () => {
        searchPage.style.display = toggle;
        document.body.style.overflowY = overFlow;
        inputControl === "focus" ? inputField.focus() : inputField.blur();
    });
}

handleSearchPage(searchBtn, "block", "hidden", "focus");
handleSearchPage(exit, "none", "scroll", "blur");

/*
    Get information
    => Show categories <=
*/
let showCatgs = document.querySelectorAll(".shop-section .catgs-section .catgs");

// Function to remove active class from all catgs on click and add active class to the current catg
function showCategories() {
    for(let i = 0; i < showCatgs.length; i++) {
        showCatgs[i].addEventListener("click", (e) => {
            for(let j = 0; j < showCatgs.length; j++) {
                showCatgs[j].nextElementSibling.classList.remove("active");
            }
            showCatgs[i].nextElementSibling.classList.add("active");
            e.stopPropagation();
        });
    }
}

// Close all catgs if click anywhere
window.addEventListener("click", (e) => {
    if(e.target !== showCatgs) {
        for(let i = 0; i < showCatgs.length; i++) {
            showCatgs[i].nextElementSibling.classList.remove("active");
        }
    }
})

showCategories();

/*
    Get information
    => Catgs box <=
    => Change catgs <=
    => Length of catgs box <=
    => All imgs <=
*/
let catgsBox         = document.querySelectorAll(".catgs-box .catg-box"),
    changeCatgs      = document.querySelectorAll(".change-catgs span"),
    lengthOfCatgsBox = catgsBox.length,
    allImgs          = document.querySelectorAll(".catgs-box .catg-box .img img");

// Function to change boxes
function changeCatgories(box) {
    for(let i = 0, j = box; i < lengthOfCatgsBox; i++, j--) {
        allImgs[i].src = `../../../imgs/shop_${j}.jpg`;
    }
}

// Function to check range of imgs on click button
function categories() {
    changeCatgs.forEach((catgBox) => {
        catgBox.addEventListener("click", () => {
            changeCatgories((lengthOfCatgsBox * +catgBox.textContent));
            for(let i = 0; i < changeCatgs.length; i++) {
                changeCatgs[i].classList.remove("active");
            }
            catgBox.classList.add("active");
        })
    });
}

categories();

/*
    Get information
    => Product image <=
    => More images <=
    => Number of items <=
    => Products section <=
    => Buttons to control scroll <=
*/
let productImg      = document.querySelector(".product-img img"),
    moreImgs        = document.querySelectorAll(".product-img .more-imgs img"),
    numberOfItems   = document.querySelectorAll(".quns span span")
    productsSection = document.querySelector(".related-products-section .products"),
    controlScroll   = document.querySelectorAll(".related-products-section .bullets i");

// Function to change product image on click one of more imgs
function changeImg() {
    for(let i = 0; i < moreImgs.length; i++) {
        moreImgs[i].addEventListener("click", () => {
            productImg.src = `../../../imgs/product_single_0${i + 1}.jpg`;
        })
    }
}

changeImg();

// // Function to add or remove items
function addRemoveItem(btn, qun) {
    btn && btn.addEventListener("click", () => {
        if(qun === "add") {
            numberOfItems[1].textContent++;
        } else {
            if(numberOfItems[1].textContent == 0) {
                return;
            }
            numberOfItems[1].textContent--;
        }
    })
}

addRemoveItem(numberOfItems[0], "remove");
addRemoveItem(numberOfItems[2], "add");

// Function to control dir of scroll on x-axis [horizental]
function scrollLeftOrRight(btn, dir) {
    btn && btn.addEventListener("click", () => {
        if(dir === "left") {
            // Scroll to left
            productsSection.scrollBy(-360, 0);
        } else {
            // Scroll to right
            productsSection.scrollBy(360, 0);
        }
    });
}

scrollLeftOrRight(controlScroll[0], "left");
scrollLeftOrRight(controlScroll[1], "right");