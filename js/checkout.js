let cartData = JSON.parse(localStorage.getItem('cart')) || [];
let cartFav= JSON.parse(localStorage.getItem("cartFavs")) || [];
let cartComp= JSON.parse(localStorage.getItem("cartComp")) || [];
const countProduct = document.getElementById("number-product");
const countProductPhone= document.getElementById("number-product-phone");
const countLike= document.getElementById("count-like");
const countLikePhone=document.getElementById("count-like-phone")
const countCompare=document.getElementById("count-compare");
countProduct.textContent=cartData.length;
countProductPhone.textContent=cartData.length;
countLike.textContent=cartFav.length;
countLikePhone.textContent=cartFav.length;
countCompare.textContent=cartComp.length;
const tbody=document.getElementById("tbody");
let subTotal=document.getElementById("sub-total");
const delivery=document.getElementById("Delivery");
let discount=document.getElementById("Discount");
const totalIncl=document.getElementById("total-incl");
function renderCart() {
  let template=``;
  let total=0;
  let totalSub=0
  let sum=0;
  let sumAll=0
  for (var i = 0; i < cartData.length; i++) {
    sum =cartData[i].price*cartData[i].count;
    template += `
    <tr>
    <td data-item="Serial"><span>${i+1}</span></td>
    <td data-item="Product"><div class="img__product"><img src="${cartData[i].image_url}" alt=""></div></td>
    <td data-item="Name	"><span>${cartData[i].name}</span></td>
    <td data-item="Price"><span id ="price">${sum}</span></td>
    <td data-item="Brand"><span>Greeny</span></td>
    <td data-item="Quantity"><span id="count">${cartData[i].count}</span></td>
    <td data-item="Action"><span onclick="removeProduct(${i})"><i class="fa-solid fa-trash"></i></span></td>
  </tr>
    `
  totalSub= Math.ceil(total+=sum);
  }
  tbody.innerHTML=template;
  subTotal.innerHTML=totalSub;
  sumAll=+subTotal.innerHTML + +delivery.innerHTML + +discount.innerHTML;
  totalIncl.innerHTML=sumAll;
}
renderCart()
function removeProduct(index){
  if(cartData[index].count == 1){
    cartData.splice(index , 1);
    localStorage.setItem("cart" ,JSON.stringify(cartData) );
    renderCart()
  }else if(cartData[index].count > 1){
    cartData[index].count-=1;
    localStorage.setItem("cart" ,JSON.stringify(cartData) );
    renderCart()
  }
}
/* close cart */
const closeNumber= document.getElementById("close-contact");
const addContact=document.getElementById("add-contact");
const enterNumber=document.querySelector(".enter-number");
closeNumber.onclick=function(){
  enterNumber.style.cssText="display:none";
}
addContact.onclick=function(){
  enterNumber.style.cssText="display:flex";
}
// close adress
const closeAdress=document.getElementById("close-adress");
const addTitle=document.getElementById("add-title");
const enterAdress=document.querySelector(".enter-adress");
closeAdress.onclick=function(){
  enterAdress.style.cssText="display:none";
}
addTitle.onclick=function(){
  enterAdress.style.cssText="display:flex";
}
// close card
const closeCardPayment=document.getElementById("close-card-payment");
const addCard=document.getElementById("add-card");
const Paymentess=document.querySelector(".enter-Paymentess");
closeCardPayment.onclick=function(){
  Paymentess.style.cssText="display:none";
}
addCard.onclick=function(){
  Paymentess.style.cssText="display:flex";
}
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
  for (let i = 0; i < cartData.length; i++) {
    templateNav+=`
    <div class="item__productCard">
    <div class="img__productCard">
      <img src="${cartData[i].image_url}" alt="feature1">
      <i class="far fa-trash-alt trash-item"></i>
    </div>
    <div class="text__productCard">
      <h3>${cartData[i].name}</h3>
      <div class="price">
        <span>Price:</span>
        <span class="number">${cartData[i].price}</span>
        <span>EGY</span>
      </div>
      <div class="count">
        <span>count:</span>
        <span class="number">${cartData[i].count}</span>
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

