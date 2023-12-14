// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

let a = 5, b = 6, c = 7;

let areaTriangle = (a + b + c) / 2;

let area = Math.sqrt(areaTriangle * ((areaTriangle - a) * (areaTriangle - b) * (areaTriangle - c)));

console.log("Aria triangle is: ", area);
