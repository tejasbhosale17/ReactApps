import AppName from "./components/AppName";
import AppMoto from "./components/AppMoto";
import CurrentDateTime from "./components/CurrentDateTime";
function App() {
  return (
    <div className="container-main">
      <AppName></AppName>
      <AppMoto></AppMoto>
      <CurrentDateTime></CurrentDateTime>
    </div>
  );
}
export default App;
