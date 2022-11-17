import "../styles/BeerDetail/BeerDetail.css";
import Infographic from "./Infographic/Infographic";

const BeerDetail = ({beerData}) =>{

    return(
        <div className="beerDetail">
            
                <Infographic number="01" section="description" data={beerData} />
                <Infographic number="02" section="food" data={beerData} />
                <Infographic number="03" section="hops" data={beerData} />
                <Infographic number="04" section="malt" data={beerData} />
        
        </div>
    )
}

export default BeerDetail;