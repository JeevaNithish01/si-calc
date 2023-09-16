var yOrM = document.getElementById("myDropdown");
var totalInterest;
function calculate() {
  let a = amount;
  let r = rate;
  let t = time;
  let m = yOrM.value;
  if (m == "Year"){
  totalInterest = (a.value * r.value * t.value)/100;
  }
  else {
  totalInterest = (a.value * r.value * t.value)/1200;
  }
  let totalAmount = +a.value + +totalInterest;
  document.getElementById("principal").innerHTML=a.value;
  document.getElementById("result").innerHTML=totalInterest;
  document.getElementById("r2").innerHTML=totalAmount;
}


function checkMsg() {

  let val = amount;
  let val2 = rate;
  let val3 = time;
  if(!val.value || !val2.value || !val3.value){
    document.getElementById("err-msg").style.opacity = 1;
  }
  else{
    document.getElementById("err-msg").style.opacity = 0;
    calculate();
    
  }
}
    
