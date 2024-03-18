function Info(){
    const datas='Buying milk'
    const dater='04/05/2024'
    
    return <div className="container text-center">
    <div className="row">
        <div className="col gx-3 gy-2">
            <p>{datas}</p>
        </div>
        <div className="col gx-3 gy-2">
            <p>{dater}</p>
        </div>
        <div className="col gx-3 gy-2">
            <button className="btn btn-danger">Delete</button>
        </div>
    </div>
</div>
}
export default Info;