var numero = 3
{ 
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)
// fugir do escopo global
/* só existe escopo de var dentro de função
ignora o bloco e sobrepoe o escopo maior no caso o 'dentro'*/


