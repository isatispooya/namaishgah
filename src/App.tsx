import LoginPage from "./modules/admin/pages/Login.page";
import GreetingsSection from "./modules/greetings/features/banner";
import QaPage from "./modules/user/pages/Qa.page";


function App() {
  return (
    <div className="App">
      <LoginPage/>
      <QaPage/>
      <GreetingsSection logoSrc={""} companyName={""} description={""}/>
  </div>
  )
  
}

export default App;
