const Calculator = function() {
    this.evaluate = string => {
        let regExESP = /\s/g;
    let regExOP = /[0-9]/;
    let calcule = string.replace(regExESP,'').split('');   
    for (let L = 0; L < calcule.length; L++) {     
      if ( ( regExOP.test(calcule[L])  )){
        if ( ( regExOP.test(calcule[L+1])  )){        
          calcule[L] += calcule[L+1];
          calcule.splice(L+1,1);    
          L -= 1;   
        }
      }   
    }   
    calcule = calcule.map(function(valeur){
      if ( isNaN(valeur)){
        return valeur;
      } else {
        return parseInt(valeur);
      }
    }); 
    let resultat = 0;  
    for (let op = 0; op < calcule.length; op++) {    
      if ( calcule[op] === '*'){      
        calcule.splice(op - 1,3,(calcule[op-1]*calcule[op+1]));
        op = 0;
      } else if ( calcule[op] === '/' ) {
        calcule.splice(op - 1,3,(calcule[op-1]/calcule[op+1]));
        op = 0;
      } 
    }      
    if (calcule.length < 2){
      return calcule.join('');
    } else {
      for (let index = 0; index < calcule.length; index++) {
        switch (calcule[index]) {
          case '+':
            if (index === 1){
              resultat = calcule[index-1] + calcule[index+1];
            } else {
              resultat += calcule[index+1];
            }
            break;
          case '-':
            if (index === 1){
              resultat = calcule[index-1] - calcule[index+1];
            } else {
              resultat -= calcule[index+1];
            }  
          default:
            break;
        }
        
      }
    }
    return resultat;
    }
  };