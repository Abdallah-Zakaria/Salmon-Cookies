'use_strict';



changeColorBlack = function(){
    var head = document.getElementById("head")
    var style = document.createElement("style") 
    style.setAttribute("id","style")
    head.appendChild(style)
    style.textContent = "body{background-color: black ;color: white;} .navigatorItem{color: white} .navigatorItem:hover{color: black}"
}

changeColorNormal = function(){
    var style = document.getElementById("style")
    style.remove();
}

