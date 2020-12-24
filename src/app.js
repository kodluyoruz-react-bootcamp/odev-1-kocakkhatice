import {getData} from './lib/service';
  
const res = getData(6); 
res.then(result => console.log(result))
 