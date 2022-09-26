document.addEventListener("DOMContentLoaded", function() {
	fMulai();
});


function fMulai() {

let soalHasil = getSoal();

console.log(soalHasil);
console.log(soalHasil.soal);

document.getElementById("soal").innerHTML = soalHasil.soal;

document.getElementById("btnCheck").onclick  = function(){

	let inputan = document.getElementById("intInputan").value;
  	fCheck(inputan, soalHasil.hasil);
  }
  
document.getElementById("intInputan").addEventListener('keypress',function onEvent(event) {
    if (event.key === "Enter") {
        document.getElementById("btnCheck").click();
    }


})

}

function fCheck(inputan, hasil) {


  var elInputan = document.getElementById("intInputan");
  var strInputan = elInputan.value;
  var elHasilcheck = document.getElementById("hasilcheck");
   
  if (strInputan == hasil) {
	elHasilcheck.innerHTML = "BENAR!";
//        timedRefresh(2000);
        sleep(2000)
           .then(() =>         fMulai())
           .then(() => elInputan.value= "")
           .then(() => elHasilcheck.innerHTML = "");	
	
  } else{  
	elHasilcheck.innerHTML = "SALAH!";
	elInputan.style.backgroundColor = "pink";
        sleep(2000)
	   .then(() => elInputan.style.backgroundColor = "white")
	   .then(() => elInputan.value= "")
           .then(() => elHasilcheck.innerHTML = "");	
	
  }
  

  
  
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRndOperator() {
   let operatorCode = getRndInteger(1,5);
   
   switch(operatorCode) {
   	case 1:
   		return " + ";
   		break;
   	case 2:
   		return " - ";
   		break;

   	case 3:
   		return " x ";
   		break;

   	case 4:
   		return " / ";
   		break;

   	default:
   		return operatorCode;
   		break;
 		
   }
}

function getHasil(kiri , operator, kanan) {

	switch(operator) {
   	case " + ":
   		return (kiri + kanan);
   		break;
   	case " - ":
   		return (kiri - kanan);
   		break;

   	case " x ":
   		return (kiri * kanan);
   		break;

   	case " / ":
   		return (kiri / kanan);
   		break;

   	default:
   		return -1;
   		break;
 		
   }

}
function getSoal() {
	let kiri  = getRndInteger(1,10);
	let operator = getRndOperator();
	let kanan = getRndInteger(1,10);
	
	let soal = "soal";
	let hasil = -1;
	
	console.log("operator" + operator);
		console.log("kiri " + kiri);
			console.log("kanan " + kanan);
			
	if (operator == " / ") {
		kiri = getRndInteger(11,kanan * 10);
	} else if (operator != " x ") {
	        kiri = getRndInteger(1,20);	
	}
	
	if ((operator == " - ") || (operator == " / ") ) {

console.log ("masuk check operator");


	   if (kiri<kanan) {
console.log ("kiri < kanan ");
	   	var tukar = true;
	   	
	   	let x = kiri;
	   	kiri = kanan;
	   	kanan = x;
		
		console.log("habis tukar");
		console.log("kiri " + kiri);
			console.log("kanan " + kanan);
	
	  
	   }
	 }
	 
 console.log ("keluar  check operator");
	 
	if (operator == " / ") {
	    let hasilbagi = Math.floor(kiri/kanan);
	    
	    kiri = hasilbagi * kanan;
	    
	    soal = kiri.toString().concat(operator, kanan.toString());
	    hasil = getHasil(kiri,operator, kanan);
	    
	    
	} else {

	    soal = kiri.toString().concat(operator, kanan.toString());
	    hasil = getHasil(kiri,operator, kanan);
	 
	}
	
	return { soal, hasil };
	
	 
} //end fucntion	


function timedRefresh(timeoutPeriod) {
	setTimeout("location.reload(true);",timeoutPeriod);
}
 
 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

