const divB= document.querySelector(".SketchBoard");  
let divA;
function sketch(){
             
    
    for(let i=0;i<(16*16);i++)
    {   
        divA=document.createElement('div');
        divA.style.border="1px solid red";
        divA.style.width="65px";
        divA.style.height="65px";
        divA.style.margin="0px";
        divB.appendChild(divA).classList.add("HoverAction");
        
        
    }
    
    

}


sketch();

