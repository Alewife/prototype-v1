document.addEventListener("DOMContentLoaded",function(){function e(e){console.log(e)}for(var t=document.getElementsByClassName("braintree-exposed__header"),r=document.getElementById("braintreeAdditionalOptions"),s=document.getElementById("buttonUseCard"),o=0;o<t.length;o++)t[o].addEventListener("click",function(){this.parentElement.classList.remove("option--is-closed"),this.parentElement.classList.add("option--is-open");for(var e=document.getElementsByClassName("braintree-exposed__option option--is-closed"),t=0;t<e.length;t++)e[t].classList.add("option--is-hidden"),e[t].classList.remove("option--is-closed");r.classList.remove("braintree-hide")});var n,i,a,c,l;$(s).click(function(){i=document.getElementsByClassName("option--is-open")[0],a=i.getElementsByClassName("braintree-exposed__content")[0],c=i.getElementsByClassName("braintree-exposed__header")[0],l=i.getElementsByClassName("braintree-exposed__saved")[0],$(c).addClass("braintree-hide"),$(l).removeClass("braintree-hide"),$(i).addClass("option--is-saved")}),r.addEventListener("click",function(){this.classList.add("braintree-hide"),n=document.getElementsByClassName("braintree-exposed__option"),$(c).removeClass("braintree-hide"),$(l).addClass("braintree-hide");for(var e=0;e<n.length;e++)n[e].classList.remove("option--is-hidden"),n[e].classList.remove("option--is-open"),n[e].classList.remove("option--is-saved"),n[e].classList.add("option--is-closed")}),braintree.client.create({authorization:"sandbox_g42y39zw_348pk9cgf3bgyw2b"},function(e,t){return e?void console.error(e):void braintree.hostedFields.create({client:t,styles:{input:{"font-size":"16px","font-family":'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',color:"#000"},":focus":{color:"black"},"::-webkit-input-placeholder":{color:"rgba(0,0,0,0.25)"},":-moz-placeholder":{color:"rgba(0,0,0,0.25)"},"::-moz-placeholder":{color:"rgba(0,0,0,0.25)"},":-ms-input-placeholder ":{color:"rgba(0,0,0,0.25)"}},fields:{number:{selector:"#cardNumber",placeholder:"1111 1111 1111 1111"},cvv:{selector:"#cvv",placeholder:"123"},expirationDate:{selector:"#expirationDate",placeholder:"MM/YY"},postalCode:{selector:"#postalCode",placeholder:"90210"}}},function(e,t){return e?void console.error(e):(t.on("focus",function(e){switch(e.emittedBy){case"number":cardNumberIcon.classList.remove("braintree-hide");break;case"cvv":cvvIcon.classList.remove("braintree-hide");break;default:return}}),t.on("blur",function(e){e.fields.number.isEmpty&&cardNumberIcon.classList.add("braintree-hide"),e.fields.cvv.isEmpty&&cvvIcon.classList.add("braintree-hide")}),t.on("cardTypeChange",function(e){1===e.cards.length?(buttonUseCard.innerHTML="Use This "+e.cards[0].niceType+" Card",cardNumberIcon.querySelector("use").setAttribute("xlink:href","#icon-"+e.cards[0].type),cvvIcon.querySelector("use").setAttribute("xlink:href","#iconCVVBack"),4===e.cards[0].code.size&&(t.setPlaceholder("cvv","1234"),cvvIcon.querySelector("use").setAttribute("xlink:href","#iconCVVFront"),document.querySelector("#cvv").parentElement.getElementsByClassName("braintree-form__descriptor")[0].textContent="(4 digits)")):(cardNumberIcon.querySelector("use").setAttribute("xlink:href","#iconCardFront"),buttonUseCard.innerHTML="Use This Card",t.setPlaceholder("cvv","123"),document.querySelector("#cvv").parentElement.getElementsByClassName("braintree-form__descriptor")[0].textContent="(3 digits)")}),void t.on("validityChange",function(e){var t=Object.keys(e.fields).every(function(t){return e.fields[t].isValid})}))})})});