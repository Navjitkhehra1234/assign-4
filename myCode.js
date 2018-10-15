var quotes = ['"This is a ruthless world and one must be ruthless to cope with it."',
              '" Science is the great antidote to the poison of enthusiasm and superstition."',
              '"A people without the knowledge of their past history, origin and culture is like a tree without roots."',
              '"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence."',
              '"Affliction comes to us, not to make us sad but sober; not to make us sorry but wise."',
              '"The bond that links your true family is not one of blood, but of respect and joy in each other."'
             ];

var authorNames = ['"Charlie Chaplin"',
                    '"Adam Smith"',
                    '"Alex Honnold"',
                    "Christie Brinkley",
                    '"Aris Cady"',
                    '"Heath Ledger"'
                    ];

var para = document.getElementById("quotePara");
var author = document.getElementById("authorPara");

var preButton = document.getElementById("previous");
var nextButton = document.getElementById("next");

var i=0;
para.innerHTML = quotes[i];
author.innerHTML = authorNames[i];

var nextFun = function(event) {
    if(i<quotes.length - 1) {
        i++;
    }
    else {
        i=0;
    }
    para.innerHTML = quotes[i];
author.innerHTML = authorNames[i];

}
nextButton.addEventListener("click", nextFun);



var preFun = function(event) {
    if(i>0){
        i--;
    }
    else {
        i=quotes.length-1;
    }
    para.innerHTML = quotes[i];
author.innerHTML = authorNames[i];

}

preButton.addEventListener("click", preFun);

setInterval(nextFun, 3000);