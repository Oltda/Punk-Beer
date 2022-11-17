import BeerDetail from "./BeerDetail";
import { useState } from "react";


const BeerItem = ({beerData}) =>{

    const [showDetail, setShowDetail] = useState(false);

    const handleShowDetail = () =>{
        if(showDetail){
            setShowDetail(false)
        }else{
            setShowDetail(true)
        }
    }

    return(
        <div className="" onClick={handleShowDetail}>
            <div className="beer-item">
                <div className="beerImgCont">
                    <img className="beerImage" src={beerData.image_url} />
                </div>
                <p>{beerData.name}</p>
            
            </div>
            {showDetail ? (
                <BeerDetail beerData={beerData} />
            ):(
                <></>
            )}
           
        
        </div>
    )
}

export default BeerItem;