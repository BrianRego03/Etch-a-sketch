const divMain= document.querySelector(".SketchBoard");  
let divNew;
let squareNumber;
let gridLength;
let gridString;
let divMainLength;
let hoverElement;
let randBlue;
let randGreen;
let randRed;
let randString;
let gradRed=[];
let gradBlue=[];
let gradGreen=[];


const blackWhiteBtn = document.querySelector('#blackWhite');
blackWhiteBtn.addEventListener('click',()=>{blackOrWhite();});

const randBtn = document.querySelector('#randomColor');
randBtn.addEventListener('click',()=>{randomGenerate();});

const gradBtn = document.querySelector('#gradient');
gradBtn.addEventListener('click',()=>{gradientGenerate();});





function squarePrompt(){
    squareNumber=prompt("Number of squares in grid:");
}

function gridDimension(){
    gridLength=(600/squareNumber);
    gridString=`${gridLength}px`;
}

function gridVerify(){
    if(squareNumber>100)
        {alert("Error,number should be 100 or less");
         return 1;}     
}

function sketch(){
       
    
    for(let i=0;i<(squareNumber*squareNumber);i++)
    {   
        divNew=document.createElement('div');
        divNew.style.width=gridString;
        divNew.style.height=gridString;
        divNew.style.margin="0px";
        divMain.appendChild(divNew).classList.add("HoverAction");
      
        
        
    }
    
    

}

function blackWhiteHover(){
    hoverElement = document.getElementsByClassName("HoverAction");

    for(let j=0; j<(squareNumber*squareNumber);j++)
    {
        hoverElement[j].addEventListener('mouseover',function()
            {   
        
                this.style.backgroundColor="Black";
            });
    }


}

function randomHover(){
    hoverElement = document.getElementsByClassName("HoverAction");

    for(let j=0; j<(squareNumber*squareNumber);j++)
    {
        hoverElement[j].addEventListener('mouseover',function()
            {   
                randRed=Math.floor(Math.random()*255);
                randBlue=Math.floor(Math.random()*255);
                randGreen=Math.floor(Math.random()*255);
                randString=`rgb(${randRed},${randGreen},${randBlue})`;
                this.style.backgroundColor=randString;
            });
    }
}
function gradientHover(){
    hoverElement = document.getElementsByClassName("HoverAction");
    for(let m=0;m<255;m++){
        gradBlue[m]=255;
        gradGreen[m]=255;
        gradRed[m]=255;
    }
    

    for(let j=0; j<(squareNumber*squareNumber);j++)
    {
        hoverElement[j].addEventListener('mouseover',function()
            {   
                gradRed[j]= (+gradRed[j]) - 25;
                gradBlue[j]= (+gradBlue[j]) - 25;
                gradGreen[j]= (+gradGreen[j]) - 25;
                if((gradBlue<0) || (gradGreen<0) || (gradRed<0))
                    randString="rgb(0,0,0)";
                else    
                    randString=`rgb(${gradRed[j]},${gradGreen[j]},${gradBlue[j]})`;
                this.style.backgroundColor=randString;
            });
    }
}

function reset(){
const myNode = document.getElementById("gridBoard");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}


function blackOrWhite(){
    reset();
    squarePrompt();
    if(gridVerify())
        return;
    gridDimension();
    sketch();
    blackWhiteHover();

}

function randomGenerate(){
    reset();
    squarePrompt();
    if(gridVerify())
        return;
    gridDimension();
    sketch();
    randomHover();
}

function gradientGenerate(){
    reset();
    squarePrompt();
    gridVerify();
    gridDimension();
    sketch();
    gradientHover();
}



