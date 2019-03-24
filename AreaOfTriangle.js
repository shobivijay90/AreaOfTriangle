function areaOfTriangle(){
  var side1 = document.getElementById("side1").value;
  var side2 = document.getElementById("side2").value;
  var side3 = document.getElementById("side3").value;
console.log(isNaN(side1.value));  
  var s = (side1+side2+side3)/2;

  var result = Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
  
  document.getElementById("ans").innerHTML=result;
  
}