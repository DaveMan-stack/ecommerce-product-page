const selectElement = (selector) => {
    let element = document.querySelector(selector);
    if (element) return element;
    return 'An error occurred. Check if the selector is correct'
}

const selectElements = (selector) => {
    let elements = document.querySelectorAll(selector);
    if (elements) return elements;
    return 'An error occurred. Check if the selector is correct'
}


/* Toggle menu */
const button = selectElement('button');
const header = selectElement('header')
button.addEventListener('click', (e) => {
    header.classList.toggle('show-nav')
    document.body.classList.toggle('change-bg')
})

/* Carousel slider */

let next = selectElement('.next-btn')
let prev = selectElement('.prev-btn')
let sliders = selectElements('.slider')
let sliderCount = 0;
let thumbnails = selectElements('.thumbnails div')
const carouselSlide = (nextBtn, prevBtn, sliders, sliderCount, thumbnails) => {
    
    
    sliders.forEach(slider => {
        slider.style.transition = 'transform .40s'
        slider.style.transform = `translate(-${sliderCount * 100}%)`
    })

    nextBtn.addEventListener('click', (e) => {
        if (sliderCount < 3) {
            sliderCount++
        }
        console.log('slider moving')
        sliders.forEach(slider => {

            slider.style.transform = `translate(-${sliderCount * 100}%)`;
        })
    
    })
    
    prevBtn.addEventListener('click', (e) => {
        if (sliderCount > 0) {
    
            sliderCount--
        }
    
        console.log('slider moving')
        sliders.forEach(slider => {

            slider.style.transform = `translate(-${sliderCount * 100}%)`;
            console.log(sliderCount, 'sliderCount')
        })
    })

    /* Desktop carousel slider */

    thumbnails.forEach((thumbnail, idx) => {
    
        thumbnail.addEventListener('click', () => {
            sliderCount = thumbnail.dataset.value -1;
            sliders.forEach(slider => {

                slider.style.transform = `translate(-${sliderCount * 100}%)`
            })
            

            thumbnails.forEach((thumbnail, index) => {
                
                if (idx != index) {

                    thumbnail.classList.remove('active')
                }
            
                if (idx === index) {
                    thumbnail.classList.add('active')

                }
                
            })
        })
    })

}

carouselSlide(next, prev, sliders, sliderCount, thumbnails);


/* show cart*/
const cart = selectElement('.cart');
const cartContent = selectElement('.cart-content');
cart.addEventListener('mouseover', () => {
    cartContent.classList.add('preview-cart');
})

cart.addEventListener('mouseout', () => {
    cartContent.classList.remove('preview-cart');
})

cart.addEventListener('click', () => {
    cartContent.classList.toggle('show-cart');
})

/* number of items */
const add = selectElement('.plus');
const subtract = selectElement('.minus');
let numOfItemEl = selectElement('.num-of-item');
let numOfItem = 0;

add.addEventListener('click', () => {
    
    if (numOfItem < 10) {
        numOfItem++;
        numOfItemEl.innerText = numOfItem;
    }
    
    // if (numOfItem == 10) {
    //     alert('You\'re too selfish! Leave some for other people.')
    // }
    // console.log(numOfItem)
})

subtract.addEventListener('click', () => {
    if (numOfItem > 0) {
        numOfItem--;
        numOfItemEl.innerText = numOfItem;
    }
    
})

/* Adding item to cart */
const addToCartBtn = selectElement('.add-to-cart');
let cartItemNumber = selectElement('.cart-item-number');

addToCartBtn.addEventListener('click', (e) => {
    cartItemNumber.innerText = numOfItemEl.innerText;
    cartItemNumber.classList.add('show-cart-item-number');
    
    if (numOfItem == 0) {
        cartItemNumber.classList.remove('show-cart-item-number');

    }
})


/* Actually displaying contents in the cart */
const getItemsToCart = () => {
    
    const productContainer = selectElement('.product-container')
    const items = selectElements('.item');
    
    

    addToCartBtn.addEventListener('click', () => {
        
        let divParent = document.createElement('div');
        divParent.setAttribute('class', 'rounded-lg h-14 flex justify-between items-center space-x-4');
        let imgProductThumbnail = document.createElement('img');
        imgProductThumbnail.setAttribute('src', `./images/image-product-${sliderCount +1}-thumbnail.jpg`);
        imgProductThumbnail.setAttribute('class', 'h-12 w-12 rounded-lg')
        let divParentTwo = document.createElement('div');
        divParentTwo.setAttribute('class', 'flex flex-col')
        let spanOne = document.createElement('span');
        let spanTwo = document.createElement('span');
        spanOne.setAttribute('class', 'text-darkGrayishBlue')
        spanTwo.setAttribute('class', 'text-darkGrayishBlue')
        spanOne.innerText = 'Fall Limited Edition Sneakers'
        let strong = document.createElement('strong');
        strong.innerText = '$228'
        spanTwo.innerText = '$128 X '
        spanTwo.append(strong)
        let imgDelete = document.createElement('img');
        imgDelete.setAttribute('class', 'cursor-pointer')
        imgDelete.setAttribute('src', './images/icon-delete.svg')

        divParentTwo.append(spanOne, spanTwo)
        divParent.append(imgProductThumbnail, divParentTwo, imgDelete)
        
        productContainer.append(divParent);
        console.log(sliderCount)
    })

}

getItemsToCart();


/* show lightbox */

const showLightbox = () => {
    //reselecting prevbtn nextbnt slider

    const images = selectElements('.wrapper img');
    const lightbox = selectElement('.lightbox')
    const closeLightboxBtn = selectElement('.close-lightbox-btn')
    images.forEach((img, idx) => {
        img.addEventListener('click', () => {
            if (document.body.clientWidth > '768') {
                console.log('Yep!')
                lightbox.classList.add('show-lightbox')
                let nextD = selectElement('.lightbox .next-btn')
                let prevD = selectElement('.lightbox .prev-btn')
                let count = idx;
                thumbnails = selectElements('.lightbox .thumbnails div')
                thumbnails[idx].classList.add('active')
                carouselSlide(nextD, prevD, sliders, count, thumbnails);
            }
        })

        closeLightboxBtn.addEventListener('click', () => {
            lightbox.classList.remove('show-lightbox');
        })
    })
}

showLightbox();

/* Hide menu cart and lightbox */
document.body.addEventListener('keyup', {
    if (key = 'ESC') {
        console.log('escape key clicked')
    }
})