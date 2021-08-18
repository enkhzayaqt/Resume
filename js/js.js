
function passExam(name, core){
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

passExam(John, 80);