// data is an array of objects;
let data = [{principal: 2500, time: 1.8},{principal:1000, time: 5},{principal: 3000, time: 1},{principal: 2000, time: 3}];

//function interestCalcuator determines the rate and calculates the interest,then returns the principal,time,rate & interest of each individual object;
function interestCalculator(list){
  
  let interestData = [];
  //iterating over the individual object in list;
  for (let i = 0; i < list.length; i++){
    if (list[i].principal >= 2500 && (list[i].time > 1 || 3 > list[i])){
      list[i].rate = 3;
    }
    else if (list[i].principal >= 2500 && list[i].time >= 3){
      list[i].rate = 4;
    }
    else if (list[i].principal < 2500 || list[i].time <= 1){
      list[i].rate = 2;
    }
    else {
      list[i].rate = 1;
    }
   list[i].interest = ((list[i].principal*list[i].time*list[i].rate)/100);
   interestData = list;
   
   }
   console.log(interestData);
   return interestData
  }
   
console.log(interestCalculator(data));