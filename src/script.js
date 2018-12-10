let secondMessage = require('./script2');
let message = "this is a message from the file 'script.js'";
alert(message);
function CauseError(){
    console.log('causing error');
    document.getElementById('error').innerHTML = 'this will cause an error';
    //router.get('/nonexistent.js');

}

window.onload = CauseError();
console.log(secondMessage);