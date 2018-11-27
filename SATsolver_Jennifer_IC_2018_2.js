/*
    SAT solver em JavaScript
    Programa criado por Jennifer Cristine, em novembro de 2018, com base no modelo de Fernando Castor.
*/

exports.solve = function(fileName) {
  let formula = readFormula(fileName)
  let result = doSolve(formula.clauses, formula.variables)
  return result // dois campos: isSat e satisfyingAssignment
}

let currentAssignment = new Array ();
currentAssignment.lenght = numVars;
for (let i = 0; i < currentAssignment.length; i++) {
  currentAssignment[i] = true;
};

// Recebe o array atual e gera o próximo
function nextAssignment(currentAssignment) {
  // implementa o código para produzir a próxima atribuição baseada em currentAssignment.
  
  let newAssignment = new Array ();
  newAssignment.lenght = numVars;
  for (let j = 0; j < newAssignment.length; j++) { 
    newAssignment[j] = false || true;
  };

  return newAssignment
}

function doSolve(clauses, assignment) {
  let isSat = false
  while ((!isSat) && 
  /* deve verificar se esta é a última atribuição ou não */) {
    // esta atribuição satisfaz a fórmula? Se assim for, faça isSat true.

    // se não, pegue a próxima tarefa e tente novamente
    assignment = nextAssignment(assignment)
  }
  let result = {'isSat': isSat, satisfyingAssignment: null}
  if (isSat) {
    result.satisfyingAssignment = assignment
  }
  return result
}
  


function readFormula(fileName) {
  // Para ler o arquivo, é possível usar o módulo 'fs'.
  // Use a função readFileSync e não readFile.  //código não avança sem terminar a leitura do arquivo

//Leitura do arquivo
  let fs = require('fs');

  let j = fileName;
  let data = fs.readFileSync (fileName, 'ascii');   //sync sincrona = enquanto o arquivo não for lido por compelto, o programa não passa para a linha seguinte
  console.log (data);  //impressão pra conferir..

  function readClauses (data) {   

    let allLines = data.split('\n');   //array de todas as linhas

          //Linha de problema
          String(allLines);   //objeto string
          
              function divideString (allLines, value) {   
                let arrays = new Array ();
                index = -1;
            
                while (value.indexOf(allLines) != -1) {
                    index ++;
                    arrays[index] = value.substring(0, value.indexOf(text));
                    value = value.substring(value.indexOf(allLines) + allLines.length);
                }
                index ++;
            
                if (value) {
                  arrays[index] = value;
                }
            
                return arrays;
              }
            
              let allLines;
            
              let stringNumOnly = allLines.replace (/\D+/g, '');    //expressão regular, apenas D = digitos [0-9]   //esclui os comentários
            

          let text0 = divideString (‘0’, allLines);
          
          let preClauses = new Array (text0);   

          let clauses = preClauses.slice(2);

              stringText = String(text0);

              numVars = stringText.substr(0);    //#vars
              numClau = stringText.substr(1);    //#clauses
            
              //Identificação da linha de problema
              if(let p = allLines.substring("p cnf", "p cnf" + 2)) {   //identifica a linha de problema
                let pLine = p;
              }



        //Gera 1 objeto com 2 atributos
        let object = new Object (fileName);   //objeto 

            let text0 = divideString (‘0, allLines);

            clauses0 = new Array (text0);   //array de clausulas

        allNumbers = clauses0;

  }

  function readVariables (allNumbers, numVars) {

    n = numVars;  
    m =  allNumbers.lenght;  //numero de numeros no array
    //let onlyNumbers = [];

    String(allNumbers);
    while (allNumbers.length <= n) {    //tamanho = #variaveis
      let New = Math.round (Math.random() * m) + 1;    //pra procurar em todos os numeros nas clausulas
      if (allNumbers.indexOf(New) == -1) {   //pra não ter numeros repetidos
        allNumbers.push(New);     //
        let variables = new Array (New);    //array com as variaveis
      }
    }
    
  }

  arrayLines = new Array (allLines);
  // Primeiro ler as linhas de texto do arquivo e só depois usa as funções auxiliares
  let text = new Array (arrayLines);//  uma matriz contendo linhas de texto extraídas do arquivo. 
  let clauses = readClauses(text)
  let variables = readVariables(clauses)

  
  function checkProblemSpecification (clauses, variables) {
      if (variables.lenght == numVars) {
        console.log ('o número de variáveis confere com a linha de problema');
      } else {
        console.log ('o número de variáveis não confere com a linha de problema');
      }

      if (clauses.lenght == numClau) {
        console.log ('o número de cláusulas confere com o da linha de problema');
      } else {
        console.log ('o número de cláusulas não confere com o da linha de problema');
      }
    
  }
  
  // Na linha seguinte, o texto é passado como um argumento para que a função
  // seja capaz de extrair a especificação do problema.
  let specOk = checkProblemSpecification(text, clauses, variables)

  let result = { 'clauses': [], 'variables': [] }
  if (specOk) {
    result.clauses = clauses
    result.variables = variables
  }
  return result
}