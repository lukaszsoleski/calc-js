window.onload = function () {addEvents();}
function addEvents(){
let chars = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];
for (let i = 0; i < chars.length; i ++) document.getElementById(chars[i]).addEventListener('click',function(){insert(chars[i]);});

document.getElementById('=').addEventListener('click',function(){calculate();});
document.getElementById('<').addEventListener('click',function(){undo();});        
document.getElementById('C').addEventListener('click',function(){clean();});   

document.addEventListener('keydown',function(e){
    e.preventDefault();

    let key = e.keyCode || e.which;
    if(e.shiftKey != true){
       switch(true){
           case (key >= 48 && key <=57):{//0-9 keycode and Unicode chars are the same. 
           let t =String.fromCharCode(key);
            document.getElementById(t).click();    
            break;
            }
           case (key === 189 || key == 109): // dash || substract
           {
               document.getElementById("-").click();
               break;
           }
           case (key === 107): // add
           {
               document.getElementById("+").click();
               break;
           }
           case (key === 106): // multiply 
           {
               document.getElementById("*").click();
               break;
           }
           case (key === 191 || key === 111): // division 
           {
               document.getElementById("/").click();
               break;
           }
           case (key === 190 || key === 188) :{// dot || comma 
               document.getElementById(".").click();
               break;
           }

           case (key === 8):{ // backspace
                document.getElementById("<").click();
                break;
           }
           case (key === 13 || key === 187): // enter || equal sign
           {
                document.getElementById("=").click(); 
                break;
           }
           case (key === 46):{
               document.getElementById("C").click(); // delete
               break;
           }

           default: {
               console.log('Unsuported Key');
               break;
           }

       }

    }else { // shift was pressed
        if (key == 187){
            document.getElementById("+").click(); // plus sign above the equation character
        }
        if (key === 56){
            document.getElementById("*").click(); // multiplication sign above the '8' character
        }
    }

    });
}


function insert(num){
   let expression = document.getElementById("output-form").getAttribute("value");
   expression += num;
   document.getElementById("output-form").setAttribute("value",expression);
 
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
