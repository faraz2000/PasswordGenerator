var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_=+";
var password = "";


function generate(){
    pLength = prompt("How many characters?");
    
    for(var i = 0; i <= pLength; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    document.getElementById("display").value = password;
    document.getElementById("loops").innerHTML = password + "<br />";

    if (pLength >0) {
        document.getElementById("length").innerHTML = "length: " + pLength;
    }
    else {
        document.getElementById("length").innterHTML = "length: 1";
    }
}


function copy() {
    document.getElementById("display").select();
    document.execCommand("copy");
}