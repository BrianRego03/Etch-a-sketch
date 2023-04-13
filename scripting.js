const divMain= document.querySelector(".SketchBoard");  
let divNew;
let squareNumber;
let gridLength;
let gridString;
let divMainLength;
let hoverElement;
let randBlue=255;
let randGreen=255;
let randRed=255;
let randString;

const blackWhiteBtn = document.querySelector('#blackWhite');
blackWhiteBtn.addEventListener('click',()=>{blackOrWhite();});

const randBtn = document.querySelector('#randomColor');
randBtn.addEventListener('click',()=>{randomGenerate();});





function squarePrompt(){
    squareNumber=prompt("Number of squares in grid:");
}

function gridDimension(){
    gridLength=Math.floor(900/squareNumber);
    gridString=`${gridLength}px`;
    divMainLength=`${gridLength*squareNumber}px`;
    divMain.style.width=divMainLength;
    divMain.style.height=divMainLength;
    console.log(gridLength);
    console.log(gridString);
    console.log(divMainLength);
}

function gridVerify(){
    if(squareNumber>100)
        {alert("Error,number should be 100 or less");
         return;}     
}

function sketch(){
       
    
    for(let i=0;i<(squareNumber*squareNumber);i++)
    {   
        divNew=document.createElement('div');
        /*divNew.style.border="1px solid red";*/
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

    for(let j=0; j<(squareNumber*squareNumber);j++)
    {
        hoverElement[j].addEventListener('mouseover',function()
            {   
                randRed-=25;
                randBlue-=25;
                randGreen-=25;
                if((randBlue<0) || (randGreen<0) || (randRed<0))
                    randString="rgb(0,0,0)";
                else    
                    randString=`rgb(${randRed},${randGreen},${randBlue})`;
                this.style.backgroundColor=randString;
            });
    }
}

function blackOrWhite(){
    squarePrompt();
    gridVerify();
    gridDimension();
    sketch();
    blackWhiteHover();

}

function randomGenerate(){
    squarePrompt();
    gridVerify();
    gridDimension();
    sketch();
    randomHover();
}

function gradientGenerate(){
    squarePrompt();
    gridVerify();
    gridDimension();
    sketch();
    gradientHover();
}



