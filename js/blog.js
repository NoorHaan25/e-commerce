/*                                             start section Add to card                                                 */
let closeCard = document.getElementById("close-card");
let addToCard= document.getElementById("Add-Card");
let basketShopping = document.getElementById("basket-shopping");
let getDataNav= JSON.parse(localStorage.getItem("cart")) || [];
const countProduct = document.getElementById("count-product");
console.log(countProduct);
countProduct.textContent=getDataNav.length;
closeCard.addEventListener("click", function(){
    addToCard.style.cssText="display:none;"
})
basketShopping.addEventListener("click" , function(){
    addToCard.style.cssText="display:block;"
})
/*                                             end section Add to card                                                 */
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


