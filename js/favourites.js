let favorit=document.getElementById("fav-product");
// console.log(favorit);
let favoritsLocal= JSON.parse(localStorage.getItem("cartFavs"));
let cart =  JSON.parse(localStorage.getItem("cart")) || [];
let cartFav= JSON.parse(localStorage.getItem("cartFavs")) || [];
let cartComp= JSON.parse(localStorage.getItem("cartComp")) || [];
const countProduct = document.getElementById("number-product");
const countProductPhone= document.getElementById("number-product-phone");
const countLike= document.getElementById("count-like");
const countLikePhone=document.getElementById("count-like-phone")
const countCompare=document.getElementById("count-compare");
countProduct.textContent=cart.length;
countProductPhone.textContent=cart.length;
countLike.textContent=cartFav.length;
countLikePhone.textContent=cartFav.length;
countCompare.textContent=cartComp.length;
function renderFav() {
  let templateContentFav=``
  for(let i=0 ; i < favoritsLocal.length ; i++){
    templateContentFav+=`
    <div class="col-lg-3 col-md-6 col-sm-12">
    <div class="card p-card">
      <div class="top__card d-flex justify-content-between">
        <div class="like__product">
          <i class="fa-solid fa-heart like" onclick="favorits(${i})"></i>
        </div>
      </div>
      <div class="img__product center">
        <img src="${favoritsLocal[i].image_url}" alt="product-veg">
        <div class="more__details">
          <i class="fa-solid fa-shuffle"></i>
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
        <h3>${favoritsLocal[i].name}</h3>
        <div class="price__product">
          <span class="old__price">$34</span>
          <span class="new__price">$28 <span class="after__price">/piece</span> </span>
        </div>
        <div class="btn__count d-flex justify-content-center">
        <button class="btn__add display-b">
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
`
  }
  favorit.innerHTML=templateContentFav;
}
renderFav()

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
/*                                             start section category-phone                                                 */
const closeCategoryPhone=document.getElementById("close-category-Phone");
const categoryItemPhone= document.querySelector(".item-phone");
const categoryPhone=document.querySelector(".category-phone");
categoryPhone.onclick=function(){
    categoryItemPhone.style.cssText="display:block";
}
closeCategoryPhone.onclick=function(){
    categoryItemPhone.style.cssText="display:none";
}
console.log(closeCategoryPhone);
/*                                             end section category-phone                                                 */
let navbarToggle=document.querySelector(".navbar-toggler")
let navItems=document.querySelector(".navbar-items")
navbarToggle.addEventListener("click",function(){
    navItems.classList.toggle("navbar-items-show")
})
/*                                            start section icon__crudSmallPhone                                    */
let crudPhone= document.querySelector(".shopping-phone");
closeCard.addEventListener("click", function(){
  addToCard.style.cssText="display:none;"
})
crudPhone.addEventListener("click" , function(){
  addToCard.style.cssText="display:block;"
})
/*                                                scroll                                                                 */
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

