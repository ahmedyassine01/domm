// console.log(document)
//const btnPlus-document.getElementsByClassName("plus");
//const checkBoxes=document.getElementsByTagName("input");
//const total = document.getElementById("total");
//const btnMinus=document.querySelector(".minus")






const btnPlus = document.getElementsByClassName("plus");
const btnMinus = document.getElementsByClassName("minus");
const btndelete = document.getElementsByClassName("delete");
const btnlike = document.getElementsByClassName("like");
const checkboxInputes=document.querySelectorAll("input")
// console.log(btndelete)
// console.log(btnMinus)
for (var i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click", increment);
    btnMinus[i].addEventListener("click", desincrement);
    btndelete[i].addEventListener("click", deleteItem);
    btnlike[i].addEventListener("click", likeItem)
    checkboxInputes[i].addEventListener("click",totalPrice)
}
function totalPrice(e){
    const checkBoxesElements=e.target;
    // console.log(checkBoxesElements)
    const priceValue=Number(checkBoxesElements.parentElement.parentElement.querySelector(".price").innerHTML);
    // console.log(priceValue)
    var totalTag=document.querySelector("#total")
    // console.log(totalTag)
    var totalValue=parseInt(totalTag.innerHTML)
    // console.log(totalValue)
    const btnPlus=checkBoxesElements.parentElement.parentElement.querySelector(".plus");
    // console.log(btnPlus)
    const btnMinus=checkBoxesElements.parentElement.parentElement.querySelector(".minus");
    // console.log(btnMinus)
    if(checkBoxesElements.checked==true){
        totalValue+=priceValue
        totalTag.innerHTML=totalValue
        btnPlus.setAttribute("disabled",true)
        btnMinus.setAttribute("disabled",true)
        }else{
        totalValue-=priceValue
        totalTag.innerHTML=totalValue
        btnPlus.removeAttribute("disabled")
        btnMinus.removeAttribute("disabled")


    }
}



function increment(event) {
    //console.log(event)
    const btn = event.target;
    // console.log(btn)
    const divElt = btn.parentElement;
    // console.log(divElt)
    var quantitytag = divElt.querySelector("p");
    // console.log(quantitytag)
    var quantityValue = +quantitytag.innerHTML;
    quantityValue++;
    // console.log(quantityValue)
    quantitytag.innerHTML = quantityValue;
    const tdElt = divElt.parentElement;
    //console.log(tdElt)
    const trElt = tdElt.parentElement;
    //console.log(trElt)
    const unitePriceTag = trElt.querySelector(".unitPrice")
    //console.log(unitePriceTag)
    const unitPriceValue = +unitePriceTag.innerHTML;
    // console.log(unitPriceValue)
    var priceTag = trElt.querySelector(".price")
    var priceValue = priceTag.innerHTML;
    priceValue = quantityValue * unitPriceValue
    priceTag.innerHTML = priceValue

}
function desincrement(event) {
    // console.log(event)
    const btn = event.target;
    // console.log(btn)
    const divElt = btn.parentElement;
    // console.log(divElt)
    var quantitytag = divElt.querySelector("p");
    // console.log(quantitytag)
    var quantityValue = +quantitytag.innerHTML;
    if (quantityValue > 0) {
        quantityValue--;
        // console.log(quantityValue)
        quantitytag.innerHTML = quantityValue;
        const tdElt = divElt.parentElement;
        //console.log(tdElt)
        const trElt = tdElt.parentElement;
        //console.log(trElt)
        const unitePriceTag = trElt.querySelector(".unitPrice")
        //console.log(unitePriceTag)
        const unitPriceValue = +unitePriceTag.innerHTML;
        // console.log(unitPriceValue)
        var priceTag = trElt.querySelector(".price")
        var priceValue = priceTag.innerHTML;
        priceValue = quantityValue * unitPriceValue
        priceTag.innerHTML = priceValue
    }
}
function deleteItem(event) {
    const btn = event.target;
    // console.log(btn);
    const divElt = btn.parentElement;
    // console.log(divElt);
    const trElt = divElt.parentElement.parentElement.parentElement;
    // console.log(trElt);

    trElt.remove();

}
function likeItem(event) {
    const btn = event.target;
    btn.style.color = "#ff0000";
  
    }

   






