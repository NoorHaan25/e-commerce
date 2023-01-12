
/*                                             start section sliderTop                                                */
let carusalItem = document.querySelector(".carusal-items");
let carouselItems= document.querySelectorAll(".carusal");
let previousCarusal = document.getElementById("angle-left");
let nextCarusal = document.getElementById("angle-right");
let currentSlideIndex=0;
nextCarusal.addEventListener("click" , nextSlide);
previousCarusal.addEventListener("click" , previousSlide);
setInterval(() => {
    currentSlideIndex++;
    if(currentSlideIndex === carouselItems.length){
        currentSlideIndex = 0;
    }
    carouselItems.forEach(function(el){
        el.classList.toggle("show")
    })
}, 3000);
function nextSlide(){
    currentSlideIndex++;
    if(currentSlideIndex === carouselItems.length){
        currentSlideIndex = 0;
    }
    carouselItems.forEach(function(el){
        el.classList.toggle("show")
    })
}
function previousSlide(){
    currentSlideIndex--;
    if(currentSlideIndex < 0){
        currentSlideIndex = carouselItems.length-1;
    }
    carouselItems.forEach(function(el){
        el.classList.toggle("show")
    })
}
// /*                                             end section sliderTop                                                */
// /*                                             start section category                                               */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[`<i class="fa-solid fa-arrow-left"></i>` , `<i class="fa-solid fa-arrow-right"></i>`],
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
})
/*                                             end section Category                                                 */

/*                                             start section countdown                                                */
let countDown =new Date("mar,1 2023 16:00:00").getTime();
let count=setInterval(() => {
    let now=new Date().getTime();
    let differenceDate=countDown-now;
    let days=Math.floor(differenceDate/(24*60*60*1000));
    let hours=Math.floor(differenceDate % (24*60*60*1000) / (60*60*1000));
    let minutes=Math.floor(differenceDate % (60*60*1000) / (60*1000));
    let seconds=Math.floor(differenceDate % (60*1000) / (1000));
    document.getElementById("counter-days").innerHTML=days;
    document.getElementById("counter-hours").innerHTML=hours;
    document.getElementById("counter-minutes").innerHTML=minutes;
    document.getElementById("counter-seconds").innerHTML=seconds;
    
if(differenceDate < 0){
    clearInterval(count);
}
}, 1000);
/*                                             end section countdown                                                */

/*                                                start section sale                                                         */
const saleProducts= document.querySelector(".sale-product"); 
const countLike= document.getElementById("count-like");
const countProduct = document.getElementById("number-product");
const countProductPhone= document.getElementById("number-product-phone");
const countCompare=document.getElementById("count-compare");
const countLikePhone=document.getElementById("count-like-phone");
let products=[];
let favItems=[];
let compare=[];
let cart =  JSON.parse(localStorage.getItem("cart")) || [];
let cartFav= JSON.parse(localStorage.getItem("cartFavs")) || [];
let cartComp= JSON.parse(localStorage.getItem("cartComp")) || [];
countProduct.textContent=cart.length;
countProductPhone.textContent=cart.length;
countLike.textContent=cartFav.length;
countLikePhone.textContent=cartFav.length;
countCompare.textContent=cartComp.length;
let getData = async function(){
    const response = await fetch("products.json");
    const data = await response.json();
    let listOfData =data.saleHtml;
    products = listOfData;
    favItems= listOfData;
    compare=listOfData;
    display(listOfData);
}
getData();
/*                                                        start function display                                                       */
function display(listOfData ){
    let templateContent ="";
    for (let i = 0; i < listOfData.length; i++) {
    templateContent += `
    <div class="col-lg-3 col-md-6 col-sm-12">
        <div class="card p-card">
            <div class="top__card d-flex justify-content-between">
            <div class="sale">
                    <span>sale</span>
                </div>
                <div class="like__product">
                <i class="fa-solid fa-heart like" onclick="favorits(${i} ,this)"></i>
                </div>
                
            </div>
            <div class="img__product center">
                <img src="${listOfData[i].image_url}" alt="product-veg" class="dd">
                <div class="more__details">
                    <i class="fa-solid fa-shuffle" onclick="compareProducts(${i})"></i>
                    <i class="fa-solid fa-play"></i>
                    <i class="fa-solid fa-eye" onclick="moreDetails(${i})"></i>
                </div>
            </div>
            <div class="text__card center">
                <div class="review">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h3>${listOfData[i].name}</h3>
                <div class="price__product">
                    <span class="old__price">$34</span>
                    <span class="new__price">$28 <span class="after__price">/piece</span> </span>
                </div>
                <div class="btn__count d-flex justify-content-center">
                    <button class="btn__add display-b" data-index="${i}">
                        <i class="fa-solid fa-store"></i>
                        Add
                    </button>
              <div class="count display-n">
                <span class="minus">
                    <i class="fa-solid fa-minus"></i>
                </span>
                <span class="number">1</span>
                <span  class="plus" id="plusn">
                  <i class="fa-solid fa-plus"></i>
                </span>
              </div>
            </div>
            </div>
          </div>
        </div>
    `;
}
    saleProducts.innerHTML=templateContent;
    let btnAdd = document.querySelectorAll(".btn__add");
    btnAdd.forEach( function(el){
        el.addEventListener("click" , function(){
        btnAdd.forEach(function(el){
        el.nextElementSibling.classList.replace("display-f","display-n")
        el.classList.replace("display-n","display-b")
        })
    el.nextElementSibling.classList.replace("display-n","display-f")
    el.classList.replace("display-b","display-n")
    let parentIndex = el.dataset.index;
    addCart(parentIndex , this);
})
    })
}
/*                                                        start function fav                                                         */
function favorits(index , term) {
    let fav=favItems[index];
    let findProductFav =cartFav.find(function(productFav){
        return productFav.id===fav.id
    })
    if(findProductFav){
        return;
    }else{
        cartFav.push({...fav});
    }
    term.classList.add("like-active")
    countLike.textContent=cartFav.length;
    countLikePhone.textContent=cartFav.length;
    localStorage.setItem("cartFavs" , JSON.stringify(cartFav));
  }
/*                                                        end function fav                                                           */
/*                                                        start function compare                                                      */
function compareProducts(index){
    let compProducts=compare[index];
    let findProductComp =cartComp.find(function(productComp){
        return productComp.id===compProducts.id
    })
    if(findProductComp){
        return;
    }else{
        cartComp.push({...compProducts});
    }
    countCompare.textContent=cartComp.length;
    localStorage.setItem("cartComp" , JSON.stringify(cartComp));
  }
  /*                                                        end function compare                                                      */
/*                                                        end function display                                                       */
function addCart(index , term){
    let choosenProduct = products[index];
    let parentCount =term.nextElementSibling;
    let minus = parentCount.firstElementChild;
    let plus = parentCount.lastElementChild;
    let spanLo =parentCount.children[1];
    let findProduct =cart.find(function(product){
        return product.id===choosenProduct.id
    })
    if(findProduct){
        minus.onclick = function(){
            if(findProduct.count==1){
                term.classList.replace("display-n" , "display-b")
                parentCount.classList.replace("display-f","display-n")
                console.log(findProduct);
            }else if(findProduct.count >=1){
                spanLo.textContent=findProduct.count-=1;
                console.log(findProduct);
            }
            }
        plus.onclick = function(){
            spanLo.textContent=findProduct.count+=1;
            let v=Number(findProduct.count*findProduct.price);
            console.log(findProduct.count , findProduct.price , v);
            console.log(findProduct.count)
            console.log(findProduct);
        }
    }else{
        console.log("from else" , cart);
        cart.push({...choosenProduct, count:1 , total:0});
        location.reload();
    }
    countProduct.textContent=cart.length;
    localStorage.setItem("cart" , JSON.stringify(cart));
}
/*                                             start section Add to card                                                 */
/*                                                        start section Add to card nav                                                       */
let closeCard = document.getElementById("close-card");
let addToCard= document.getElementById("Add-Card")
let basketShopping = document.getElementById("basket-shopping");
const productsShop= document.getElementById("products-shop");
closeCard.addEventListener("click", function(){
    addToCard.style.cssText="display:none;"
})
basketShopping.addEventListener("click" , function(){
    addToCard.style.cssText="display:block;"
})
function addProductsNav(){
    let templateNav=``
    for (let i = 0; i < cart.length; i++) {
      templateNav+=`
      <div class="item__productCard">
      <div class="img__productCard">
        <img src="${cart[i].image_url}" alt="feature1">
        <i class="far fa-trash-alt trash-item"></i>
      </div>
      <div class="text__productCard">
        <h3>${cart[i].name}</h3>
        <div class="price">
          <span>Price:</span>
          <span class="number">${cart[i].price}</span>
          <span>EGY</span>
        </div>
        <div class="count">
          <span>count:</span>
          <span class="number">${cart[i].count}</span>
        </div>
      </div>
    </div>
      `
    }
    productsShop.innerHTML=templateNav;
  }
addProductsNav();
/*                                                        end section Add to card                                                     */
/*                                                        1start section category-phone                                                 */
const closeCategoryPhone=document.getElementById("close-category-Phone");
const categoryItemPhone= document.querySelector(".item-phone");
const categoryPhone=document.querySelector(".category-phone");
categoryPhone.onclick=function(){
    categoryItemPhone.style.cssText="display:block";
}
closeCategoryPhone.onclick=function(){
    categoryItemPhone.style.cssText="display:none";
}
/*                                             end section category-phone                                                 */
let navbarToggle=document.querySelector(".navbar-toggler")
let navItems=document.querySelector(".navbar-items")
navbarToggle.addEventListener("click",function(){
    navItems.classList.toggle("navbar-items-show")
})
/*                                             start section more details                                                */
function moreDetails(index){
  let imgDetails= document.querySelector(".img-details");
  let details=document.querySelector(".details");
  let nameProduct=document.getElementById("name-product");
  let closeCardPro=document.querySelector(".close-card-product");
  details.style.cssText="display:block;"
  imgDetails.src=products[index].image_url;
  nameProduct.textContent=products[index].name;
  closeCardPro.addEventListener("click" ,  function(){
    details.style.cssText="display:none;"
  })
}
// /*                                            start section icon__crudSmallPhone                                    */
let crudPhone= document.querySelector(".shopping-phone");
crudPhone.addEventListener("click" , function(){
  addToCard.style.cssText="display:block;"
})
// /*                                                scroll                                                                 */
let header=document.querySelector(".header");
let navbar=document.querySelector(".navbar");
let navbarItems= document.querySelector(".navbar-items");
window.addEventListener("scroll" , function(){
  if(this.window.scrollY > 0){
    navbar.classList.replace("nav" , "nav-active")
    navbarItems.classList.replace("navbar-list","navbar-list-active");
    header.classList.replace("header" , "header-active");
  }else{
    navbar.classList.replace("nav-active" , "nav")
    navbarItems.classList.replace("navbar-list-active","navbar-list")
    header.classList.replace("header-active" , "header");
  }
})






