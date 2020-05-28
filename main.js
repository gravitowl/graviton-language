const fs = require('fs');

let varName = ['placeholder'];
let varValue = [0];
let stopLoop = false;

let fullGtonFile = fs.readFileSync('main.gton', 'utf8');


fullGtonFile = fullGtonFile.replace(/\n|\r/g, "");


fullGtonFile = fullGtonFile.split(';');
fullGtonFile.pop()

for(let i = 0; i < fullGtonFile.length; i++){
        if(fullGtonFile[i].startsWith("print")){
            let tempPrintVar = fullGtonFile[i];
            tempPrintVar = tempPrintVar.slice(6);
            tempPrintVar = tempPrintVar.replace(")", "");
            
            tempPrintArr = tempPrintVar.split(' ');

            for(let j = 0; j < tempPrintArr.length; j++){
                if(tempPrintArr[j].startsWith("{") && tempPrintArr[j].endsWith("}")){
                    tempPrintArr[j]  = tempPrintArr[j].replace("{", "");
                    tempPrintArr[j] = tempPrintArr[j].replace("}", "");

                    const tempVarIndex = varName.lastIndexOf(tempPrintArr[j]);
                    if(tempVarIndex === -1){
                        console.log(`Error at line ${i + 1}, that var doesn't exist.`)
                        stopLoop = true;
                        break;
                    }else{

                        tempPrintArr[j] = varValue[tempVarIndex];
                        tempPrintVar = tempPrintArr.join(" ");
                        break;
                    }
                }

            }
            console.log(tempPrintVar)
        }

        if(fullGtonFile[i].startsWith("var")){
            let tempVarVar = fullGtonFile[i];

            tempVarVar = tempVarVar.slice(4);
            tempVarArr = tempVarVar.split(' ');


            console.log(tempVarArr);

            if(tempVarArr[1] !== "="){
                console.log(`Error at line ${i + 1}, syntax error.`)
                stopLoop = true;
            }

            if(tempVarArr.length > 3){
                console.log(`Error at line ${i + 1}, syntax error.`)
                stopLoop = true;
            }
            tempVarArr.splice(1, 1);
            varExisting = varName.lastIndexOf(tempVarArr[0]);
                if(varExisting === -1){
                    varName.push(tempVarArr[0]);
                    varValue.push(tempVarArr[1]);
                }else{
                    console.log(`Error at line ${i + 1}, var with the same name already exists.`)
                    stopLoop = true;
                }
            }
            if(stopLoop == true){
                break;
            }
        }


        