const prompt = require('prompt-sync')();

var n= String(prompt('Digite o mês(em letra minúscula): '))
switch (n) {
    case 'janeiro':
        console.log('tem 31 dias');
        break;
    case 'favereiro':
        console.log('tem 28 dias');
        break;               
    case 'março':        
        console.log('tem 31 dias');
        break;           
    case 'abril':     
        console.log('tem 30 dias');
        break;         
    case 'maio':                   
        console.log('tem 31 dias');
        break;                  
    case 'junho':             
        console.log('tem 30 dias');
        break;                  
    case 'julho':              
        console.log('tem 31 dias'); 
        break;                       
    case 'agosto':                   
        console.log('tem 31 dias');
        break;                  
    case 'setembro':                        
        console.log('tem 30 dias');
        break;                     
    case 'outubro':                
        console.log('tem 31 dias');
        break;                   
    case 'novembro':                      
        console.log('tem 30 dias');
        break;                            
    case 'dezembro':               
        console.log('tem 31 dias');
        break;                                        
    default:
        console.log('O nome digitado é inválido');
        break;
}
 // forma que o professor explicou
 if (mes == 'Janeiro' || mes == 'Março' || mes == 'Maio' || mes == 'Julho' || mes == 'Agosto' || mes == 'Outubro' || mes == 'Dezembro') {
    console.log(`O mês de ${mes} tem 31 dias`);    
} else if (mes == 'Abril' || mes == 'Junho' || mes == 'Setembro' || mes == 'Novembro' ) {
    console.log(`O mês de ${mes} tem 30 dias`);    
} else if (mes == 'Fevereiro') {
    console.log('O mês de Fevereiro tem 28 ou 29 dias');    
} else {
    console.log('Esse mês não existe ?');
}