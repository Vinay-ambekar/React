import KgButton from "./kgButton";//defualt exported
 
import {NewComponent} from "./newComponent";//named exported
function App(){//functional component
//jsx code.
return <div>
<h1>
  hello world!
</h1>
<KgButton></KgButton>
<NewComponent></NewComponent>
</div>


}
export default App;//what ever we are wrting the code inside a function App() we are expoting 