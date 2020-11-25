function nextBigger(n){    
    let rev = n.toString().split('');
    let revLen = rev.length;    
    let j = 0;
    let smallLeft = 0,
    indexSmallLeft = 0,
    indexSmallRight = 0,
    smallRight = 0;  
    for (let i = revLen-1; i >= 0; i--) {    
      if (rev[i] > rev[i-1]) {
        smallLeft = rev[i-1];
        indexSmallLeft = i - 1 ;
        break;
      } else {
        smallLeft = -1;
      }    
    } 
    for (let index = 0; index < revLen; index++) {
      let orderSmall = rev.slice(indexSmallLeft+1, revLen).sort();
      if ( smallLeft < orderSmall[index]){
        smallRight = orderSmall[index];
        break;
      }     
    } 
    rev.splice(indexSmallLeft,1,smallRight);
    rev.splice(rev.lastIndexOf(smallRight),1,smallLeft); 
    let endSort = rev.slice(indexSmallLeft + 1 , revLen).sort();
    rev.splice(indexSmallLeft +1, endSort.length, endSort);
    rev = parseInt(([].concat.apply([],rev)).join(''));
    if ( smallLeft === -1) {
      return smallLeft;
    } else {
      return rev;
    } 
  }