var str = "JavaScript";
var reversedStr = " ";
for(var i = str.length-1; i >=0; i--){
    reversedStr += str[i];

}
document.getElementById("output").textContent = "reversed string is:"+ reversedStr;