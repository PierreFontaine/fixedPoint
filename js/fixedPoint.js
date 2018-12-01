'use strict';

let main = function(){
  console.log("Fixed point program");

  let inpt_signe = document.getElementById('partie_signe');
  let inpt_entiere = document.getElementById('partie_entiere');
  let inpt_virgule = document.getElementById('partie_virgule');

  let btn_process = document.getElementById('process');

  let inpt_decimal = document.getElementById('decimal');
  let lbl_res = document.getElementById('res');

  btn_process.addEventListener('click', function(){
    console.log(inpt_entiere.value);
    console.log(inpt_virgule.value);
    console.log(inpt_decimal.value);

    let dec = inpt_decimal.value;
    let vir = inpt_virgule.value;

    let res = "";
    let str_vir = "";

    if (dec > 0) {
      res = res + "0";
    } else {
      res = res + "1";
    }

    for (let i = 0; i<vir; i++) {
      console.log(dec);
      dec = dec * 2;
      if (dec >= 1){
        str_vir = str_vir + "1";
        dec = dec - Math.floor(dec);
      } else {
        str_vir = str_vir + "0";
      }
    }

    str_vir = str_vir.split("").reverse().join("");



    console.log("signe " + res);
    console.log("virgule " + str_vir);

    lbl_res.innerHTML = res + str_vir;
  });



};