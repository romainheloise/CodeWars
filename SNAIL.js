snail = function(array) {
    let resultG = [];
    let tableauR = [];
    let total = [];
    let tailleCaree = Math.floor(array.length / 2 );
    array.map(x => tableauR.push(x));
    tableauR.reverse();  
    if(array[0].length < 1){
      return [];
    }
    for (let i = 0; i < tailleCaree; i++) {    
      resultG.push(longueur(array,i));
      resultG.push(hauteur(array,i));  
      resultG.push( (longueur(tableauR,i)).reverse() );
      resultG.push(hauteurR(tableauR,i)); 
    }
   
    if(array.length %2 === 0){
      resultG.map(function(value){
        value.map(x => total.push(x))
      });
      return total;
    } else {    
      resultG.map(function(value){
        value.map(x => total.push(x))
      });
      total.push(array[ Math.ceil(array.length/2) - 1][Math.ceil(array.length/2) - 1]);
      return total;
    }
    
  }
  
  
  function longueur(tableau,i){  
    let resultL = []; 
    let global = []; 
    resultL.push(tableau[i].slice(i,(tableau[i].length-i)));
    resultL.map(function(value){
      value.map( x => global.push(x));
    })  
    return global;
  }
  
  
  
  function hauteur(tableau,i){
    let resultH = [];
    
    tableau.map(function(value){
      resultH.push(value[(tableau[i].length-1) - i]);
    })
    for (let index = 0; index < i+1; index++) {
      resultH.pop();
      resultH.shift();
      
    }  
    return resultH;
  }
  
  function hauteurR(tableau,i){
    let resultHr = [];
    
    tableau.map(function(value){
      resultHr.push(value[i]);
    })
    for (let index = 0; index < i+1; index++) {
      resultHr.pop();
      resultHr.shift();
      
    }  
    return resultHr;
  }