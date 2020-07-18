'use_strict';

var orderForm = document.getElementById("orderForm")

orderForm.addEventListener("submit", function(){
event.preventDefault();

var customerName = event.target.customerName.value;
console.log(customerName);


var customerAge = event.target.customerAge.value;
console.log(customerAge)

var customerPhone = event.target.customerPhone.value;
console.log(customerPhone)

var customerLocation = event.target.customerLocation.value;
console.log(customerLocation)


var cookiesNumber = event.target.cookiesNumber.value;
console.log(cookiesNumber)

var cookiesSize = event.target.cookiesSize.value.split(',');
console.log(cookiesSize)

var isItPickup = event.target.isItPickup.checked;
console.log(isItPickup)

var isItDelivery = event.target.isItDelivery.checked;
console.log(isItDelivery)

})