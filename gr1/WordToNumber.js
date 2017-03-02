

var expectedValue = 0;
function generateNumber(low, high) {
var spread = high-low;
var result = Math.floor((Math.random() * (spread+1)) + low);
return result;
}


var special = {0: "zero", 1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen","15":"fifteen",20:"twenty",30:"thirty",40:"forty",50:"fifty",80:"eighty",100:"hundred", 1000: "thousand"}

function getName(number) {
var name ="";
if(number>=10000) {
return null;
}
if(number >= 1000) {
var thousands = parseInt(number/1000);
name = special[thousands] + " " + special[1000]
var remainder = number % 1000;
if(remainder ==0) return name;
return name +" "+getName(remainder);
}
else if(number >= 100) {
var hundreds = parseInt(number/100);
name = special[hundreds ] + " " + special[100]
var remainder = number % 100;
if(remainder ==0) return name;
return name +" "+getName(remainder);
}
else if(number >= 10) {
if(typeof special[number] != "undefined") {
return special[number];
}
if(number < 20) {
return special[number%10]+"teen";
}
var tens = parseInt(number/10)*10;
var remainder = number%10
if(typeof special[tens]!="undefined") {
name = special[tens]


} else {
name = special[parseInt(tens/10)]+"ty";
}

if(remainder !=0) {
name += " "+getName(remainder);
}
return name;
}

return special[number];
}

function generateProblem() {
	var expectedValue = generateNumber(1, 100);

}

function checkAnswer() {
   event.preventDefault();
   var entered = parseInt(document.getElementById("number-input").value);
   if(entered == expectedValue) {
   generateProblem();
   } else {
	alert("sorry that isn't right");
   }
}

generateProblem();
