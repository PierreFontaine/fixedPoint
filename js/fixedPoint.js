'use strict';

let main = function(){
  console.log("Fixed point program");

  let inpt_signe = document.getElementById('partie_signe');
  let inpt_entiere = document.getElementById('partie_entiere');
  let inpt_virgule = document.getElementById('partie_virgule');

  let btn_process = document.getElementById('process');

  let inpt_decimal = document.getElementById('decimal');
  let lbl_res = document.getElementById('res');
  let lbl_res_hex = document.getElementById('res_hex');

  btn_process.addEventListener('click', function(){
    console.log(inpt_entiere.value);
    console.log(inpt_virgule.value);
    console.log(inpt_decimal.value);

    let dec = inpt_decimal.value;
    let vir = inpt_virgule.value;
    let ent = inpt_entiere.value;

    let res = "";
    let str_ent = "";
    let str_vir = "";

    //signe

    if (dec > 0) {
      res = res + "0";
    } else {
      res = res + "1";
    }

    let partie_entiere = Math.floor(dec);
    for (let i = 0; i < ent; i++) {
      let r = partie_entiere % 2;
      partie_entiere = Math.floor(partie_entiere / 2);
      if (r === 1) {
        str_ent = "1" + str_ent;
      } else {
        str_ent = "0" + str_ent;
      }
    }


    // partie virgule
    dec = dec - Math.floor(dec);
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

    console.log("signe " + res);
    console.log("entiere " + str_ent);
    console.log("virgule " + str_vir);

    lbl_res.innerHTML = res + str_ent + str_vir;
    lbl_res_hex.innerText = "0x"+parseInt((res + str_ent + str_vir), 2).toString(16);
  });



};