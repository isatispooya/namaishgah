import LoginPage from "./modules/admin/pages/Login.page";
import GreetingsSection from "./modules/greetings/features/banner";


function App() {
  return (
    <div className="App">
      <LoginPage/>
      <GreetingsSection logoSrc={""} companyName={""} description={""}/>
  </div>
  )
  
}

export default App;
