var a = {name:"John", testScore:47, examScore:46};
var b = {name:"Bob", testScore:23, examScore:24};
var c = {name:"Nick", testScore:40, examScore:35};
var d = {name:"Alex", testScore:44, examScore:45};

var arr = [a,b,c,d];
var degrees = ["a", "b", "c", "d"];
var passingLimit = [91,81,71,61,51];

function calculate (testScore,examScore){
return testScore + examScore;
}

function resutlCheck(s){
    var totalScore = calculate(s.testScore,s.examScore);
    if(totalScore>passingLimit[0]){
    console.log(s.name +" is passed with " + degrees[0]);
  }else if(totalScore>passingLimit[1]){
    console.log(s.name + " is passed with " + degrees[1]);
  } else if(totalScore>passingLimit[2]){
    console.log(s.name + " is passed with " + degrees[2]);
  }else {console.log(s.name + " is passed with " + degrees[3]);}
    
}

for (var i=0; i<arr.length; i++){
  resutlCheck(arr[i]);
  console.log("------------------");
};






