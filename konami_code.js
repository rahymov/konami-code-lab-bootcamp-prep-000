const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init(e) {
  // Write your JavaScript code inside the init() function
  const ky = parseInt(e.detail) ;
  
  for(let i=0; i< code.length; i++){
    if(ky === code[i]){
      alert("Congrats");
    }
  }
}