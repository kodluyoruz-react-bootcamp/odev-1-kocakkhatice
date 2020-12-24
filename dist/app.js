"use strict";var _service = require('./lib/service');
  
const res = _service.getData.call(void 0, 6); 
res.then(result => console.log(result))
 