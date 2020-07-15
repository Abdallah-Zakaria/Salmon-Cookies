'use_strict';

var addBranch = document.getElementById("addBranchForm");

addBranch.addEventListener("submit", function(){
event.preventDefault();

var branchLocation = event.target.branchLocation.value;
console.log(branchLocation)

var minimumCustomerPerHour =event.target.minimumCustomerPerHour.value;
console.log(minimumCustomerPerHour)

var maxiumumCustomerPerHour =event.target.maxiumumCustomerPerHour.value;
console.log(maxiumumCustomerPerHour)

var averageCookiesPerCustomer =event.target.averageCookiesPerCustomer.value;
console.log(averageCookiesPerCustomer)

})
