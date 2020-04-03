let name= "toby";
let courses= ["html","css"," js","python"];
console.log("my name is "+name +" these are my courses "+courses);

console.log(courses.length);
for(let i=1; i<=200; i++)
{
  if (i%2 ==0)
  {
    if(i%2 == courses.length%2)
    {
      console.log(i);
    }
    
  }
  
}

   