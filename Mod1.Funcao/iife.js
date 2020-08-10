// FUNÇÃO AUTO INVOCADA
/* FUNÇÃO EM QUE ELA MESMO SEM NOME ( NÃO DECLARADA/ANONIMA), 
NA HORA DA DECLARANÇÃO ELA JÁ É CHAMADA
FUNÇÃAO - QUANDO ESTA USANDO O BROWSER E NÃO QUER MANIPULAR DIRETAMENTE NO ESCOPO GLOBAL
IMPORTANTE EVITAR ESSA AÇÃO PARA NÃO DERRUBAR A APLICAÇÃO*/

// IIFE - FUNCTION EXPRESSION IMEDIATAMENTE INVOCADA
// IIFE É BASICAMENTE COLOCAR A FUNCTION DENTRO DE PARENTESES

(function (){
    console.log('Será executado na hora')
    console.log('Foge do escopo mais abrangente')
}) ()