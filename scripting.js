const divMain= document.querySelector(".SketchBoard");  
let divNew;
let squareNumber;
let gridLength;
let gridString;
let divMainLength;
let hoverElement;

const blackWhiteBtn = document.querySelector('#blackWhite');
blackWhiteBtn.addEventListener('click',()=>{blackOrWhite();});





function squarePrompt(){
    squareNumber=prompt("Number of squares in grid:");
}

function gridDimension(){
    gridLength=Math.floor(900/squareNumber);
    gridString=`${gridLength}px`;
    divMainLength=`${gridLength*squareNumber}px`;
    divMain.style.width=divMainLength;
    divMain.style.height=divMainLength;
}

function gridVerify(){
    if(squareNumber>100)
        {alert("Error,number should be 100 or less");
         return;}     
}

function blackOrWhite(){
    squarePrompt();
    gridVerify();
    gridDimension();
    sketch();
    blackWhiteHover();

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




