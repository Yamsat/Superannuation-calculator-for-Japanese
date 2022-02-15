document.querySelector("#dob").addEventListener('input', (event) => {
    const dob = event.target.value;
    const bYear = Date.parse(dob);
    const now = Date.now();
    const age = Math.floor((now-bYear)/(1000*60*60*24*365));
    document.querySelector("#age").innerHTML = `${age} 歳`;
})

let ttr;
document.querySelector("#retirement").addEventListener('input', (event) => {
    const retirement = event.target.value;
    const rtr = Date.parse(retirement);
    const now = Date.now();
    ttr = (((rtr-now))/(1000*60*60*24*365)).toFixed(1);
    document.querySelector("#time_to_retirement").innerHTML = `${ttr} 年`;
})

let cb;
document.querySelector("#current_balance").addEventListener('change', (event) =>{
    cb = event.target.value;
})

let income;
let cc = [0,0,0];
let sgc;
let ss;
let tdc;
let total_cc;
let nccArr = [0,0];
let ncc;
let co_contribution;
let listo;
let total_ncc;

document.querySelector("#income").addEventListener('change', (event) => {
     income = event.target.value;
     if(income === ""){
         alert('0以上の数字を入力してください。')
     }
     
     sgc = income * 0.095;
     
     cc[0] = parseFloat(sgc);

     document.querySelector("#sgc").innerHTML = Math.round(sgc);
    
     total (cc);
    
     if(total_cc <= 25000){
     document.querySelector("#total_cc").innerHTML = total_cc; }
     else{
        alert('Concessional contributionは年間25,000ドルを超えて拠出できません。');
     }
     
     if(income <= 37000){
         if(income >= 35087.72){
             listo = 500;
         }
         else{listo = sgc*0.15}
     }
     else{listo = 0;}

     nccArr[0] = parseFloat(listo);

     document.querySelector("#listo").innerHTML = Math.round(listo);

     if(income <= 36813 && income >= 0){
        if(ncc >= 1000){
                co_contribution = 500;
        }
        else{
                co_contribution = ncc*0.5;
    }}
    else if(income <= 51813 && income > 36813){
        if(ncc >= 1000){
                co_contribution = 500 - 0.0333*(income - 36813);
            }
        else if(ncc*0.5 >= 500 - 0.0333*(income - 36813)){
                co_contribution = 500 - 0.0333*(income - 36813);
            }
        else if(ncc*0.5 <= 500 - 0.0333*(income - 36813)){
                co_contribution = ncc*0.5
            }
        else{
            co_contribution = 0;
    }}else{
        co_contribution = 0;
    }

    nccArr[2] = parseFloat(co_contribution);
        
    document.querySelector("#co_contribution").innerHTML = Math.round(co_contribution);

     total2 (nccArr);
    
     if(total_ncc <= 100000){
     document.querySelector("#total_ncc").innerHTML = total_ncc; }
     else{
      alert('Non-concessional contributionは年間100,000ドルを超えて拠出できません。');
     }
     
     
})


document.querySelector("#ss").addEventListener('change', (event) => {
    ss = event.target.value;
    if(ss === ""){
        alert('0以上の数字を入力してください。')
    }

    cc[1] = parseFloat(ss);
        
    total(cc)
        
    if(total_cc <= 25000){
        document.querySelector("#total_cc").innerHTML = total_cc; }
        else{
        alert('Concessional contributionは年間25,000ドルを超えて拠出できません。');
        }
    });

document.querySelector("#tdc").addEventListener('change', (event) => {
    tdc = event.target.value;
    if(tdc === ""){
        alert('0以上の数字を入力してください。')
    }
        
    cc[2] = parseFloat(tdc);
           
    total (cc);
        
    if(total_cc <= 25000){
        document.querySelector("#total_cc").innerHTML = total_cc; }
        else{
        alert('Concessional contributionは年間25,000ドルを超えて拠出できません。');
        }
    });

function total (arr){
   total_cc = 0;
   for(let i = 0; i < arr.length; i++){
   total_cc += arr[i];}
   return total_cc;
   }


document.querySelector("#ncc").addEventListener('change', (event) => {
    ncc = event.target.value;
    if(ncc === ""){
        alert('0以上の数字を入力してください。')
    }
        
    nccArr[1] = parseFloat(ncc);
    
       
    if(income <= 36813 && income > 0){
        if(ncc >= 1000){
                co_contribution = 500;
        }
        else{
                co_contribution = ncc*0.5;
    }}
    else if(income <= 51813 && income > 36813){
        if(ncc >= 1000){
                co_contribution = 500 - 0.0333*(income - 36813);
            }
        else if(ncc*0.5 >= 500 - 0.0333*(income - 36813)){
                co_contribution = 500 - 0.0333*(income - 36813);
            }
        else if(ncc*0.5 <= 500 - 0.0333*(income - 36813)){
                co_contribution = ncc*0.5
            }
        else{
            co_contribution = 0;
    }}

    nccArr[2] = parseFloat(co_contribution);
        
    document.querySelector("#co_contribution").innerHTML = Math.round(co_contribution);
    
    total2 (nccArr);

    if(total_ncc <= 100000){
        document.querySelector("#total_ncc").innerHTML = Math.round(total_ncc); }
        else{
        alert('Non-concessional contributionは年間100,000ドルを超えて拠出できません。');
        }
    
    })

        function total2 (arr){
            total_ncc = 0;
            for(let i = 0; i < arr.length; i++){
            total_ncc += arr[i];}
            return total_ncc;
            }

let fr;
let fv;
let fv_nofee;
let rfr;
let fcd;
let fcd_nofee;
let tc;
let ttrYr;
let goal;
let tfc;
let rc;
let rate;
let nominalRate;
let feeFromCb;
let feeFromTc;
document.querySelector("#future_return").addEventListener('change', (event) =>{
fr = (event.target.value)/100;
})

document.querySelector("#goal").addEventListener('change', (event) =>{
goal = event.target.value;    
})

let fee;
document.querySelector("#fees").addEventListener('change', (event) =>{
fee = (event.target.value)/100;
})

document.querySelector("#calculate").addEventListener('click', () =>{
  if(document.querySelector("#fees").value === ""){
      alert('手数料率が入力されていません。0以上の数字を入力してください。');
  }else{
    ttrYr = Math.round(ttr)
    console.log(ttrYr)

    rfr = (parseFloat(fr)-parseFloat(fee))*0.85;
    console.log(rfr)

    if(fr){
        fcd = cb*((1+rfr)**ttrYr);    
    }
    else{
        fcd = cb;
    }

    console.log(fcd);

    tc = ((parseFloat(total_cc))*0.85) + parseFloat(total_ncc);

    console.log(tc);
    
    fv = 0;
    for(let i = 1; i <= ttrYr; i++ ){
    fv += tc*(1+parseFloat(rfr))**i;}

    console.log(fv);

    let total_future_value = (parseFloat(fcd) + parseFloat(fv)).toFixed(2);

    if(goal){
        document.querySelector("#future_value").innerHTML="";
    }else{
    document.querySelector("#future_value").innerHTML = Math.round(total_future_value);}

    tfc = parseFloat(goal) - parseFloat(fcd);

    console.log(tfc)

    comp = 0;
    for(let i = 1; i <= ttrYr; i++ ){
        comp += (1+parseFloat(rfr))**i}

     rc = tfc/comp

    console.log(rc);

    document.querySelector("#required_contribution").innerHTML = rc.toFixed(2);
    
    const pay = -tc;
    const present = -parseFloat(cb);
    const future = parseFloat(goal)

    RATE(ttrYr, pay, present, future)

    nominalRate = (rate/0.85 + fee).toFixed(3)
    
    if(fr){
    document.querySelector("#required_return").innerHTML = "";
    }else{
    document.querySelector("#required_return").innerHTML = nominalRate * 100;}
    
    

    if(!goal && fr){
        feeFromCb = 0
    for(let i = 1; i <= ttrYr; i++){
        feeFromCb += cb*fee*((1+parseFloat(fr))**i)};
        feeFromTc = 0
    for(let i = 1; i <= ttrYr; i++){
        feeFromTc += tc*fee*((1+parseFloat(fr))**i)};
    }else if(goal && !fr){
        feeFromCb = 0
    for(let i = 1; i <= ttrYr; i++){
        feeFromCb += cb*fee*((1+parseFloat(nominalRate))**i)};
        feeFromTc = 0
    for(let i = 1; i <= ttrYr; i++){
        feeFromTc += tc*fee*((1+parseFloat(nominalRate))**i)};
    }else if(goal && fr){feeFromCb = 0
    for(let i = 1; i <= ttrYr; i++){
        feeFromCb += cb*fee*((1+parseFloat(fr))**i)};
        feeFromTc = 0
    for(let i = 1; i <= ttrYr; i++){
        feeFromTc += rc*fee*((1+parseFloat(fr))**i)};
    }


        document.querySelector("#total_fees").innerHTML = Math.round(feeFromCb + feeFromTc);
    
}

})

function RATE (periods, payment, present, future, type, guess){
    guess = (guess === undefined) ? 0.01 : guess;
    future = (future === undefined) ? 0 : future;
    type = (type === undefined) ? 0 : type;
  
    var epsMax = 1e-10;
  
    var iterMax = 10;
  
    var y, y0, y1, x0, x1 = 0,
      f = 0,
      i = 0;
    rate = guess;
    if (Math.abs(rate) < epsMax) {
      y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
    } else {
      f = Math.exp(periods * Math.log(1 + rate));
      y = present * f + payment * (1 / rate + type) * (f - 1) + future;
    }
    y0 = present + payment * periods + future;
    y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
    i = x0 = 0;
    x1 = rate;
    while ((Math.abs(y0 - y1) > epsMax) && (i < iterMax)) {
      rate = (y1 * x0 - y0 * x1) / (y1 - y0);
      x0 = x1;
      x1 = rate;
        if (Math.abs(rate) < epsMax) {
          y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
        } else {
          f = Math.exp(periods * Math.log(1 + rate));
          y = present * f + payment * (1 / rate + type) * (f - 1) + future;
        }
      y0 = y1;
      y1 = y;
      ++i;
    }
    return rate;
};
