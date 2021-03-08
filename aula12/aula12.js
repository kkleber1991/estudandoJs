let varA = "A";
let varB = "B";
let varC = "C";

const resultA = varB;
const resultB = varC;
const resultC = varA;

[varA, varB, varC] = [varB, varC, varA]

console.log(resultA, resultB, resultC)
console.log(varA, varB, varC)

//deve ficar como B C A