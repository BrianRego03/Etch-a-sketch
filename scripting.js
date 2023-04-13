const divMain= document.querySelector(".SketchBoard");  
let divNew;
function sketch(){
       
    
    for(let i=0;i<(16*16);i++)
    {   
        divNew=document.createElement('div');
        divNew.style.border="1px solid red";
        divNew.style.width="65px";
        divNew.style.height="65px";
        divNew.style.margin="0px";
        divMain.appendChild(divNew).classList.add("HoverAction");
      
        
        
    }
    
    

}


sketch();


