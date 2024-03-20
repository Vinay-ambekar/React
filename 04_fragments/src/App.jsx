//becaus while return it was creatinge extra div at outer layer to avoid that we are using react fragments.
import './App.css'
function App() {
 let foodItems=['dal','green-vegitable','roti','solag','milk','ghee']
//  let foodItems=[]
 if(foodItems.length==0){
  return <h3>I am hungry</h3>
 }
/*  let ternary=foodItems.length===0?<h3>I am hungry</h3>:null; */
  return ( 
    <>{/* fragments */}
  <div className='container'>
    <h1>healtyhy food</h1> 
     {/* foodItems.length === 0 && <h3>I am hungry</h3> */}{/* how to use logical oprator */}
    <ul className="list-group">
      {foodItems.map((items)=>( /* map method, andwe have to add key*/
        <li key={items} className="list-group-item">{items}</li> 
      ))}
    </ul>
  </div> 
  </>
  )
} 

export default App
