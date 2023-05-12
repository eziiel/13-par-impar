
(() => {
  let numberType = prompt("preencha com um número")
  
  let teste = +numberType


    if(teste % 2 == 0) {
      alert("par")
    } else if(teste % 2 == 1) {
      alert("impar") 
    } else {
      alert("não é número")
    }


})() 