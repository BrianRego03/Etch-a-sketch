const divMain= document.querySelector(".SketchBoard");  
let divNew;
let squareNumber=prompt("Number of squares in grid:");
let gridLength=Math.floor(900/squareNumber);
let gridString=`${gridLength}px`;
console.log(gridLength);
console.log(900/squareNumber);
let divMainLength=`${gridLength*squareNumber}px`;
divMain.style.width=divMainLength;
divMain.style.height=divMainLength;


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

if(squareNumber<=100)
    sketch();
else
    alert("Error,number should be 100 or less");    


const hoverElement = document.getElementsByClassName("HoverAction");
console.log(hoverElement);
for(let j=0; j<(squareNumber*squareNumber);j++)
{
    hoverElement[j].addEventListener('mouseover',function()
    {   
        
        this.style.backgroundColor="Black";
    });
}



