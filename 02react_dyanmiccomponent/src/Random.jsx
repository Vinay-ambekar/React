function Random(){
    let number=(Math.random()*100)

    return <div style={{'background-color':'green'}}>{/* how to use inline stle  */}
        random number :{parseInt(number)}
    </div>
}
export default Random;