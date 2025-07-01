import Card from "./Card";
function Tours({tours, removeTour}){

    return(
    <div className="container">
        <div className="title-container">
            <h2 className="title">Plan with Sudhanshu</h2>
        </div>
        <div className="cards">
            {
                tours.map((tour) => {
                    return <Card key={tour.id} {...tour} remove={removeTour}></Card>
            }  )
            }
        </div>
    </div>)
}


export default Tours;