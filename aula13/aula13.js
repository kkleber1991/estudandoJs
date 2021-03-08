/*
cada letra representa uma posição sendo iniciado com a posição 0
essa é uma fraze de teste
*/
    const fraseTeste = "Essa é uma fraze de teste"

    console.log(fraseTeste.indexOf('ma'))  // pesquisa por "ma" dentro do conteudo da string

    console.log(fraseTeste.lastIndexOf ('a', 13))  /* pesquisa por "ma" dentro da string 
    começando de trás pra frente*/

    console.log(fraseTeste.match(/[a-z]/g)); /* retorna todas as letras minusculas dentro 
    de todas as expreções dentro da string (tem diferenciação de maiúsculas e minusculas) */

    console.log(fraseTeste.search(/é/g)); /*consulta diretamente o caractere solicitado*/

    console.log(fraseTeste.replace(/é/, 'jonson')); /*substitui o caractere solicitado*/

    console.log(fraseTeste.replace(/e/g, '&')); /*substitui todos caracteres solicitado*/

    console.log(fraseTeste.length); /*conta quantos caracteres tem*/

    console.log(fraseTeste.slice(2, 8)); /* pega apenas o que constra dentro desse intervalo */
    
    console.log(fraseTeste.slice(-15)); /* inicia nessa posição contando a posição de
    trás pra frente */

    console.log(fraseTeste.split(' ')); /* separar para array com esse caractere */

    console.log(fraseTeste.split(' ', 3)); /* separar para array com esse caractere */