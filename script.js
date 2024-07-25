let btn = document.getElementById("btn1");
let ballId = document.getElementById("balls");
let arrayBClass = document.getElementsByClassName("ball");
i = 0;
j=0;
// console.log(arrayBClass);
function getRandomInt(num1) {
    return Math.floor(Math.random() * num1);
  }

function btnclckd(){
    let randInt = getRandomInt(6);
    for (let i = 0; i <= 8; i+=1) {
        let elementId = arrayBClass[i].id;
        let elementStyle = document.getElementById(elementId).style;
        elementStyle.backgroundColor = "#e8e8e8";
        // console.log(elementId);
        // console.log(arrayBClass[i]);
    };
if (randInt == 0){
    document.getElementById(arrayBClass[4].id).style.backgroundColor="black";
    };
if (randInt == 1){
        document.getElementById(arrayBClass[0].id).style.backgroundColor="black";
        document.getElementById(arrayBClass[8].id).style.backgroundColor="black";
    };
if (randInt == 2){
    document.getElementById(arrayBClass[0].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[8].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[4].id).style.backgroundColor="black";
    };
if (randInt == 3){
    document.getElementById(arrayBClass[0].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[2].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[6].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[8].id).style.backgroundColor="black";
    };
if (randInt == 4){
    document.getElementById(arrayBClass[0].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[2].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[6].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[8].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[4].id).style.backgroundColor="black";
};
if (randInt == 5){
    document.getElementById(arrayBClass[0].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[3].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[6].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[8].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[5].id).style.backgroundColor="black";
    document.getElementById(arrayBClass[2].id).style.backgroundColor="black";
};
console.log(randInt+1);
};
