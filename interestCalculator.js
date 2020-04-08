let data = [{principal:2500, time:1.8},{principal:1000, time:5},{principal:3000, time:1},{principal:2000,time:3}]

data.forEach(interestCalculator)
  function interestCalculator(data){
  for (let i=0; i<data.length; i++)
{
  
    if (data.principal >=2500 && 3>data.time>1){
      let rate = {rate:3}
      return data.push("rate")
    }
  
  
    else if (data.principal >=2500 &&  data.time>=3){
      let rate ={rate:4}
      return data.push("rate")
    
  }
  
    else if (data.principal <=2500 && data.time<=1){
      let rate = {"rate":2}
      return data.push("rate")
    }
  
    else{
      let rate={rate:1}
      return data.push("rate")
    }
  
 } 
  
  let interestFormula = (data.principal * data.rate * data.time) / 100.
  let interest = {interest:interestFormula}
  console.log(interestCalculator.push("interest"))
  let interestData = interestCalculator(data)
  console.log (interestData)
  return interestData 
}

interestCalculator({principal:2000,time:3})