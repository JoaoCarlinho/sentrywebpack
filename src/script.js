let secondMessage = require('./script2');
let message = "this is a message from the file 'script.js'";
alert(message);
function CauseError(){
    document.getElementById('error').innerHTML = 'this will cause an error';
    //router.get('/nonexistent.js');

}

CauseError();
console.log(secondMessage);