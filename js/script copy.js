function passExam(name, score){
    var passUni = 71;
    var passCol = 51;
    if(score >= passUni) {
        console.log(name + 'has enrolled in University with' + score + 'points');

    } else if(score >= passCol) {
        console.log(name + 'has enrolled in College with' + score + 'points');
    } else {
        console.log(name + 'has failed');
    }
}

passExam('John', 80);

var John = 80, Nick =75;
var underLimit = 51;

if (John >= underLimit){
    console.log("John" + 'is passed the exam');
}

function convert(minutes) {
	return (minutes * 60);
}
var seconds = convert(5);
console.log(seconds);


// -----------------------------------------
function add(a, b) {
	return a + b;
}
var result = add(230, 10);
console.log (result);


// ---
function multi(a,b, c) {
    return a*b*c;
}
var result1 = multi(3,2,2);
console.log(result1);

//----

function circuitPower(voltage, current) {
 return voltage * current ;
}
var result2 = circuitPower(230,10);
console.log(result2);

// -----
function convert(minutes) {
	return minutes*60;
}

var second1 = convert(5);
console.log(second1);

//----
function nextEdge(side1, side2) {
	return side1 + side2 -1;
}
var nextEdgeRes = nextEdge(8,10);
console.log(nextEdgeRes);


//-----
function lessThanOrEqualToZero(num) {
	return num <= 0;
}
var lessThanOrEqualToZeroRes = lessThanOrEqualToZero(-2);
console.log(lessThanOrEqualToZeroRes);

//--
function lessThan100(a, b) {
	return a+b < 100; 
    
}
var lessThan100Res = (3,77);
console.log(lessThan100Res);

//----- 

function powerFind(voltage, current){
    return (voltage * current);
}
var powerFindRes = (10,3);
console.log(powerFindRes);

for ()