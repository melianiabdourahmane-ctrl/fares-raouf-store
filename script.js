const products = [
{
id:1,
name:"سماعات لاسلكية",
category:"اِكسسوارات الهاتف",
price:2500,
image:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=600&q=80"
},



{
id:2,
name:"ساعة أنيقة",
category:"السوايع",
price:4500,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"








},
{
id:3,
name:"عطر فاخر",
category:"العطور",
price:3500,
image:"https://image.unsplash.com/photo-1594035910387-fea47794261f?auto=format&&fit=crop&w=600&q=80"


},
{
id:4,
name:"ساعة كلاسيكية",
category:"السوايع",
price:5500,
image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80"



},
{
id:5,
name:"عطر مميز",
category:"عطور",
price:2800,
image:"https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=600&q=80"


},
{
id:6,
name:"اِكسسورات عصرية",
category:"اكسسوارات الهاتف",
price:3200,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80"

}
];
const productsList=
document.getElementById("products-list");
function displayProducts(items){
    if(!productsList) return;
    if(items-length===0){
        productsList.innerHTML=
        '<p class="empty-message">مالقيناش هذا المنتج.</p>';
        return;
    }
productsList.innerHTML=
items.map(product=>`
    <article class="product-card">
    <img
src="${product.image}"
alt="${product.name}"
loading="lazy"

onerror="this.onerror=null;this.src=
'https://placehold.co/600*400/1b1724
/ffffff?text=Fares+%26+Raouf';"
>
<div class="product-info">
<h3>${product.name}</h3>
<p>${product.category}</p>
<span class="price">
$
{product.price.toLocaleString("fr-DZ")}دج
</span>
<button class ="carte-btn"
onclick="showCarte()">
<span id="cart-count">0</span>

</div>
</article>

    
    
    
    `).join("");






}
const searchInput=
document.getElementById("search");

function searchProducts(){
const term=
searchInput.value.trim().toLowerCase();

const filtered=
products.filter(product=>
    product.name.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term)

);
displayProducts(filtered);








}
if(searchInput){
searchInput.addEventListener("input"
    ,searchProducts
);





}
let cart =[];

const cartCount=
document.getElementById("cart-count");
function addToCarte(id){

const product=products.find(item=>item.id===id);

if(!product)return;
carte.push(product);
updateCarteCount();

alert ("تمت اِضافة"+product.name+"اِلى السلة!");







}

function updateCarteCount(){
if(cartCount){
cartCount.textContent=
carte.length;



}


}
function showCart(){
if(cart.length===0){



    alert("السلة فارغة!اِختار منتجا أولا.");
    return;
}
const total=cart.reduce(
(sum,item)=>sum+item.price,
0


);

const details=cart.map((item,index)=>
    `${index+1}.${item.name}-$
{item.price}دج`
).join("\n");

alert(
"منتجات السلة\n\n"+details+"\n\nالمجموع:"+total+"دج"
    

 
);


}

function orderWhatsApp(){
if(cart.length===0){
alert("السلة فارغة!أضف منتجا أولا.");
return;

}
const total=cart.reduce(
    (sum,item)=> sum+item.price,
    0
);
const details=carte.map((item,
    index
)=>
`${index+1}.${item.name}-$`).join("/n");

const message=
"السلام عليكم نحب نطلب من متجرFares&Raouf:/n/n"
detasils+
"/n/n المجموع:" + total +"دج";
const orderWhatsAppNumber=
"213xxxxxxxxx";
if(WhatsAppNumber.includes("x"))
{
alert("بدل الرقم واتساب في الكود برقم المتجر الحقيقي.")
return;
}
const url=
"https://wa.me/"+
WhatsAppNumber+
"?text="+
encodeURICcomponent(message);

window.open(url,"-blank");




}
















        
