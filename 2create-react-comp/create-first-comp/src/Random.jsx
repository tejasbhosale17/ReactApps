function Random(){
  let number= (Math.random()*10);
return  <h1 style={{'backgroundColor':'#567838'}}>Random Number is: {Math.round(number)}</h1>
}

export default Random;