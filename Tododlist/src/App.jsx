import Head from "./header/Head";
import Inputs from "./Inputs";
import Info from "./info";
import "./App.css"

function App(){
  let clock=new Date()
  
  return <div>
   <Head></Head>
   <Inputs/>
   <Info></Info>
   <Info></Info>
   <Info></Info>
   <Info></Info>
   <Info></Info>
   <h2>clock</h2>
  <p>date:{clock.toLocaleDateString()}</p>
  <p>time:{clock.toLocaleTimeString()}</p>
  </div>
}
export default App;