'use_strict';
// create random number of customer
function generateRandomCustomer(maxValue, minValue){
    var generatedCustomer = Math.floor(Math.random()*(maxValue-minValue))+minValue;
    return generatedCustomer;
}
//---------------------------------------------------------------------------------------------------------------------------------------------
// branch objects
var Seattle = {
    branchLocation: "Seattle",
    minimumCustomerPerHour : 23,
    maxiumumCustomerPerHour : 65,
    averageCookiesPerCustomer : 6.3,
    operationHour : ["6:00 AM" , "7:00 AM" , "8:00 AM" , "9:00 AM" ,"10:00 AM" , "11:00 AM", "12:00 PM" , "1:00 PM" , "2:00 PM" , "3:00 PM", "4:00 PM" , "5:00 PM" , "6:00 PM" , "7:00 PM"]
}

var Tokyo = {
    branchLocation: "Tokyo",
    minimumCustomerPerHour : 3,
    maxiumumCustomerPerHour : 24,
    averageCookiesPerCustomer : 1.2,
    operationHour : ["6:00 AM" , "7:00 AM" , "8:00 AM" , "9:00 AM" ,"10:00 AM" , "11:00 AM", "12:00 PM" , "1:00 PM" , "2:00 PM" , "3:00 PM", "4:00 PM" , "5:00 PM" , "6:00 PM" , "7:00 PM"]
}


var Dubai = {
    branchLocation: "Dubai",
    minimumCustomerPerHour : 11,
    maxiumumCustomerPerHour : 38,
    averageCookiesPerCustomer : 3.7,
    operationHour : ["6:00 AM" , "7:00 AM" , "8:00 AM" , "9:00 AM" ,"10:00 AM" , "11:00 AM", "12:00 PM" , "1:00 PM" , "2:00 PM" , "3:00 PM", "4:00 PM" , "5:00 PM" , "6:00 PM" , "7:00 PM"],
    
}


var Paris = {
    branchLocation: "Paris",
    minimumCustomerPerHour : 20,
    maxiumumCustomerPerHour : 38,
    averageCookiesPerCustomer : 2.3,
    operationHour : ["6:00 AM" , "7:00 AM" , "8:00 AM" , "9:00 AM" ,"10:00 AM" , "11:00 AM", "12:00 PM" , "1:00 PM" , "2:00 PM" , "3:00 PM", "4:00 PM" , "5:00 PM" , "6:00 PM" , "7:00 PM"],
    
}


var Lima = {
    branchLocation: "Lima",
    minimumCustomerPerHour : 2,
    maxiumumCustomerPerHour : 16,
    averageCookiesPerCustomer : 4.6,
    operationHour : ["6:00 AM" , "7:00 AM" , "8:00 AM" , "9:00 AM" ,"10:00 AM" , "11:00 AM", "12:00 PM" , "1:00 PM" , "2:00 PM" , "3:00 PM", "4:00 PM" , "5:00 PM" , "6:00 PM" , "7:00 PM"],
    
}
//---------------------------------------------------------------------------------------------------------------------------------------------
// render every branch sales on the browser 
function renderSeattle(){
    var artical = document.getElementById("Seattle");

    var countryName = document.createElement("p")
    artical.appendChild(countryName);
    countryName.textContent = Seattle.branchLocation;

    var ulElement = document.createElement("ul");
    artical.appendChild(ulElement);

    var totalCookiesInThisDay =0;
    for (var i =0 ; i< Seattle.operationHour.length ; i++){
        var hour = Seattle.operationHour[i];
        var actuallyCustomer = generateRandomCustomer(Seattle.maxiumumCustomerPerHour,Seattle.minimumCustomerPerHour);
        var totalCookiesInThisHour = Math.floor(actuallyCustomer * Seattle.averageCookiesPerCustomer);
        totalCookiesInThisDay = totalCookiesInThisDay + totalCookiesInThisHour ;
        // console.log(hour)
        // console.log(actuallyCustomer)
        // console.log(totalCookiesInThisHour)
        var liElement = document.createElement("li");
        ulElement.appendChild(liElement);
        liElement.textContent = hour + " : " +totalCookiesInThisHour + " cookies"
    }
    

    var branchTotal = document.createElement("p");
    artical.appendChild(branchTotal);
    branchTotal.textContent = "Total cookies in this day :" + totalCookiesInThisDay
}
renderSeattle()

function renderTokyo(){
    var artical = document.getElementById("Tokyo");

    var countryName = document.createElement("p")
    artical.appendChild(countryName);
    countryName.textContent = Tokyo.branchLocation;

    var ulElement = document.createElement("ul");
    artical.appendChild(ulElement);

    var totalCookiesInThisDay =0;
    for (var i =0 ; i< Tokyo.operationHour.length ; i++){
        var hour = Tokyo.operationHour[i];
        var actuallyCustomer = generateRandomCustomer(Tokyo.maxiumumCustomerPerHour,Tokyo.minimumCustomerPerHour);
        var totalCookiesInThisHour = Math.floor(actuallyCustomer * Tokyo.averageCookiesPerCustomer);
        totalCookiesInThisDay = totalCookiesInThisDay + totalCookiesInThisHour ;
        // console.log(hour)
        // console.log(actuallyCustomer)
        // console.log(totalCookiesInThisHour)
        var liElement = document.createElement("li");
        ulElement.appendChild(liElement);
        liElement.textContent = hour + " : " +totalCookiesInThisHour + " cookies"
    }
    

    var branchTotal = document.createElement("p");
    artical.appendChild(branchTotal);
    branchTotal.textContent = "Total cookies in this day :" + totalCookiesInThisDay
}
renderTokyo()

function renderDubai(){
    var artical = document.getElementById("Dubai");

    var countryName = document.createElement("p")
    artical.appendChild(countryName);
    countryName.textContent = Dubai.branchLocation;

    var ulElement = document.createElement("ul");
    artical.appendChild(ulElement);

    var totalCookiesInThisDay =0;
    for (var i =0 ; i< Dubai.operationHour.length ; i++){
        var hour = Dubai.operationHour[i];
        var actuallyCustomer = generateRandomCustomer(Dubai.maxiumumCustomerPerHour,Dubai.minimumCustomerPerHour);
        var totalCookiesInThisHour = Math.floor(actuallyCustomer * Dubai.averageCookiesPerCustomer);
        totalCookiesInThisDay = totalCookiesInThisDay + totalCookiesInThisHour ;
        // console.log(hour)
        // console.log(actuallyCustomer)
        // console.log(totalCookiesInThisHour)
        var liElement = document.createElement("li");
        ulElement.appendChild(liElement);
        liElement.textContent = hour + " : " +totalCookiesInThisHour + " cookies"
    }
    

    var branchTotal = document.createElement("p");
    artical.appendChild(branchTotal);
    branchTotal.textContent = "Total cookies in this day :" + totalCookiesInThisDay
}
renderDubai()

function renderParis(){
    var artical = document.getElementById("Paris");

    var countryName = document.createElement("p")
    artical.appendChild(countryName);
    countryName.textContent = Paris.branchLocation;

    var ulElement = document.createElement("ul");
    artical.appendChild(ulElement);

    var totalCookiesInThisDay =0;
    for (var i =0 ; i< Paris.operationHour.length ; i++){
        var hour = Paris.operationHour[i];
        var actuallyCustomer = generateRandomCustomer(Paris.maxiumumCustomerPerHour,Paris.minimumCustomerPerHour);
        var totalCookiesInThisHour = Math.floor(actuallyCustomer * Paris.averageCookiesPerCustomer);
        totalCookiesInThisDay = totalCookiesInThisDay + totalCookiesInThisHour ;
        // console.log(hour)
        // console.log(actuallyCustomer)
        // console.log(totalCookiesInThisHour)
        var liElement = document.createElement("li");
        ulElement.appendChild(liElement);
        liElement.textContent = hour + " : " +totalCookiesInThisHour + " cookies"
    }
    

    var branchTotal = document.createElement("p");
    artical.appendChild(branchTotal);
    branchTotal.textContent = "Total cookies in this day :" + totalCookiesInThisDay
}
renderParis()


function renderLima(){
    var artical = document.getElementById("Lima");

    var countryName = document.createElement("p")
    artical.appendChild(countryName);
    countryName.textContent = Lima.branchLocation;

    var ulElement = document.createElement("ul");
    artical.appendChild(ulElement);

    var totalCookiesInThisDay =0;
    for (var i =0 ; i< Lima.operationHour.length ; i++){
        var hour = Lima.operationHour[i];
        var actuallyCustomer = generateRandomCustomer(Lima.maxiumumCustomerPerHour,Lima.minimumCustomerPerHour);
        var totalCookiesInThisHour = Math.floor(actuallyCustomer * Lima.averageCookiesPerCustomer);
        totalCookiesInThisDay = totalCookiesInThisDay + totalCookiesInThisHour ;
        // console.log(hour)
        // console.log(actuallyCustomer)
        // console.log(totalCookiesInThisHour)
        var liElement = document.createElement("li");
        ulElement.appendChild(liElement);
        liElement.textContent = hour + " : " +totalCookiesInThisHour + " cookies"
    }
    

    var branchTotal = document.createElement("p");
    artical.appendChild(branchTotal);
    branchTotal.textContent = "Total cookies in this day :" + totalCookiesInThisDay
}
renderLima()