function formatDuration(seconds) {

    let result = '';
    let temps = {
      year: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    }
  
    if (seconds === 0) {
      result = 'now';
    } else {
  
      for (let index = 0; index < seconds + 1; index++) {
        if (index < seconds) temps.second++;
        if (temps.second === 60) {
          temps.minute++;
          temps.second = 0;
        } else if (temps.minute === 60) {
          temps.hour++;
          temps.minute = 0;
        } else if (temps.hour === 24) {
          temps.day++;
          temps.hour = 0;
        } else if (temps.day === 365) {
          temps.year++;
          temps.day = 0;
        }
      }
  
  
      for (const key in temps) {
        if (temps[key] === 0) {
          delete temps[key];
        }
      }
  
      for (const key in temps) {
  
        let keys = Object.keys(temps);
        let taille = keys.length;
        let last = keys[keys.length - 1];
  
  
        if (taille > 1) {
  
          if (temps[key] > 1 && key !== last) {
            result += `${temps[key]} ${key}s, `
          } else if (temps[key] <= 1 && key !== last) {
            result += `${temps[key]} ${key}, `
          } else if (temps[key] > 1 && key === last) {
            result = result.split('');
            result.pop();
            result.pop();
            result = result.join('');
            result += ` and ${temps[key]} ${key}s`
          } else if (temps[key] <= 1 && key === last) {
            result = result.split('');
            result.pop();
            result.pop();
            result = result.join('');
            result += ` and ${temps[key]} ${key}`
          }
        } else if (taille === 1) {
  
          if (temps[key] > 1) {
            result += `${temps[key]} ${key}s`
          } else if (temps[key] <= 1) {
            result += `${temps[key]} ${key}`
          }
        }
      }
    }
  
  
  
  
    return result
  }