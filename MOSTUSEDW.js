function topThreeWords(text) {
    let regMots = /\w/,
        storage = {},
        phrase = text.split(' '),
        result = [];
    phrase.map(function(value,i){
        phrase[i] = value.toLowerCase();
        storage[phrase[i]] = 0;
    })        
    for (let index = 0; index < phrase.length; index++) {
        if ( regMots.test(phrase[index])){
            storage[phrase[index]] +=1;
        }        
    }    
    while(result.length < 3 ){
        let tempL = '',
            tempC = 0;
        for (const key in storage) {
          if ( storage[key] > tempC  && storage[key] > 0 ){              
              tempC = storage[key];
              tempL = key;
          }          
        }
        result.push(tempL);        
        delete storage[tempL];
    }
    result = result.filter(x =>  x != '');
    result.map( function(value,i){
        console.log(value);
        let regLast = /[^a-z']/g;
        result[i] = value.replace(regLast,'');
    })
    return result;
  }