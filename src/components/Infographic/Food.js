import "../../styles/Infographic/Food.css";

const Food = ({foodPairing}) =>{

    console.log(foodPairing)


    return(
        <div className="list-items-wrap">
            <h1 className="food-caption">Food Pairing</h1>
            <div className="food-pairing-wrap">
                {foodPairing.map((food, inx)=>(
                  
                        <div className="food-item" key={inx}>
                        
                            <p>{food}</p>
                         
                           
                        </div>
                  
                   
                ))}
            </div>
        </div>
    )
}

export default Food;