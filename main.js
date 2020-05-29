const fs = require('fs');

let stopLoop = false;
let fullGton = fs.readFileSync("main.gton", "utf-8");

//Vars
let varNames = [];
let varValues = [];

let functionNames = ["print", "var"];

fullGton = fullGton.replace(/(\r\n|\n|\r)/gm, "");

fullGton = fullGton.split(";");
fullGton.pop();

for(let gtonI = 0; gtonI < fullGton.length; gtonI++){

    if(fullGton[gtonI].startsWith("print(")){
        if(fullGton[gtonI].endsWith(")") == false){
            console.log(`Error at line ${gtonI + 1}, wrong syntax used.`);
            stopLoop = true;
            break;
        }else{

            let tempPrint = fullGton[gtonI];

            tempPrint = tempPrint.replace("print(", "");
            tempPrint = tempPrint.replace(")","");

            if(tempPrint === ""){
                console.log(`Error at line ${gtonI + 1}, print statement empty.`);
                stopLoop = true;
                break;
            }else{
                tempPrint = tempPrint.split("{");
                for(let i = 0; i < tempPrint.length; i++){
                    
                    if(tempPrint[i].endsWith("}")){
                       if(varNames.lastIndexOf(tempPrint[i].replace("}","")) === -1){
                           console.log(`Error at line ${gtonI + 1}, var does not exist.`)
                           stopLoop = true;
                           break;
                       }else{
                           tempPrint[i] = varValues[varNames.lastIndexOf(tempPrint[i].replace("}", ""))];
                       }
                    }
                }

                tempPrint = tempPrint.join("");
                console.log(tempPrint);
            }
        }
    }

    if(fullGton[gtonI].startsWith("var")){
        let tempVar = fullGton[gtonI];
        tempVar = tempVar.replace("var ", "");
        tempVar = tempVar.split(" ");
        
        if(tempVar[1] !== "="){
            console.log(`Error at line ${gtonI + 1}, wrong syntax used.`);
            stopLoop = true;
            break;
        }else if(tempVar > 3){
            console.log(`Error at line ${gtonI + 1}, wrong syntax used.`);
            stopLoop = true;
            break;
        }else if(varNames.lastIndexOf(tempVar[0]) !== -1){
            console.log(`Error at line ${gtonI + 1}, var has already been declared.`);
            stopLoop = true;
            break;
        }else if(functionNames.lastIndexOf(tempVar[0]) !== -1){
            console.log(`Error at line ${gtonI + 1}, var can't be named to a function.`);
            stopLoop = true;
            break;
        }else{
            varNames.push(tempVar[0]);

            varValues.push(tempVar[2]);
            }
    }

   for(let varI = 0; varI < varNames.length; varI ++){
       if(fullGton[gtonI].startsWith(varNames[varI])){
           let tempVar = fullGton[gtonI].split(" ");

           if(tempVar[1] !== "="){
            console.log(`Error at line ${gtonI + 1}, wrong syntax used.`);
            stopLoop = true;
            break;
           }else if(tempVar.length > 3){
            console.log(`Error at line ${gtonI + 1}, wrong syntax used.`);
            stopLoop = true;
            break;
           }else{
               varValues[varNames.lastIndexOf(tempVar[0])] = tempVar[2];

           }
       }
   }

    if(stopLoop == true){break;}
}