window.onload = function () {addEvents();}
function addEvents(){
let chars = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];
for (let i = 0; i < chars.length; i ++) document.getElementById(chars[i]).addEventListener('click',function(){insert(chars[i]);});

document.getElementById('=').addEventListener('click',function(){calculate();});
document.getElementById('<').addEventListener('click',function(){undo();});        
document.getElementById('C').addEventListener('click',function(){clean();});   

document.addEventListener('keyup',function(e){
    e.preventDefault();
    
    
    if ((e.keyCode >= 48 && e.keyCode <=57) || (e.keyCode >= 96 && e.keyCode <= 105))
       {
        let t =String.fromCharCode(e.keyCode);
         document.getElementById(t).click();     
       }

    });
}

function insert(num){
   let expression = document.getElementById("output-form").getAttribute("value");
   expression += num;
   document.getElementById("output-form").setAttribute("value",expression);
   console.log("insert");
}
function calculate(){
    let expression = document.getElementById("output-form").getAttribute("value");
    
    if(expression!==""){
       try{
           expression = eval(expression);
           document.getElementById("output-form").setAttribute("value",expression);
       }catch(e){
           if (e instanceof SyntaxError){
               alert(e.message);
           }//if
       }//catch
    }//if
    console.log("calculate");
}//calculate
function clean(){
    document.getElementById("output-form").setAttribute("value","");
}
function undo(){
    let expression = document.getElementById("output-form").getAttribute("value");
    if (expression){
        document.getElementById("output-form").setAttribute("value",expression.substring(0,expression.length-1));
    }
}
