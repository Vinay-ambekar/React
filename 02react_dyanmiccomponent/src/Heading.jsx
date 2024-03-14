
const name='vinay'
const numbers=12345677898
let intro=function(){
     return 'i am working in xyz company as sinror developer my skill are htm css js react.js frame work'
}

function Heading(){
    return <div>
            <h1>my name is {name} and my number is {numbers}  </h1>{/* using {} we can make it dynomic */}
            <p>{intro()}</p>{/* intro() is a method  */}
    </div> 

}
export default Heading;