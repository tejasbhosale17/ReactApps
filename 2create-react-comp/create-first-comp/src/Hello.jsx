//Dynamic Components- In dynamic components we can embade any js expression into the JSX 

function Hello(){
  let myName='Tejas';
  let fullName = () => {
    return 'Tejas Bhosale';
  }
  return <h3>Hello, This is {myName} and my full name is {fullName()}</h3>
}
export default Hello;