//becaus while return it was creatinge extra div at outer layer to avoid that we are using react fragments.
import './App.css'
function App() {
  let foodItems=['dal','green-vegitable','roti','solag','milk','ghee']
  return ( 
    <>{/* fragments */}
  <div className='container'>
    Fragments
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
