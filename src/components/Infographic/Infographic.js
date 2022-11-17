import "../../styles/Infographic/Infographic.css";
import {InformationCircleIcon} from "@heroicons/react/24/outline";
import cutlery from "../../images/cutlery.png";
import hops from "../../images/hops.png";
import malt from "../../images/malt.png";
import Description from "../Infographic/Description";
import Food from "../Infographic/Food";
import Hops from "../Infographic/Hops";
import Malt from "../Infographic/Malt";


const Infographic = ({number ,section, data}) =>{


    return(
        <div className="infographic-wrap">
            <div className="info-column first">
                <div className={`info-arrow ${section}-arrow`}></div>

                <div className={`info-number ${section}-number`}>
                    <span>{number}</span>
                </div>
            </div>

            <div className="info-column second">
                {section == "description" &&(
                    <Description desc={data.description} />
                )}
                 {section == "food" &&(
                    <Food foodPairing={data?.food_pairing} />
                   
                )}

                {section == "hops" &&(
                    <Hops hops={data?.ingredients.hops} />
                )}

                {section == "malt" &&(
                    <Malt malt={data?.ingredients.malt} />
                )}

            </div>

            <div className={`info-column third ${section}`}>
                <div className="iconWrapper">
                        {section == "description" &&(
                            <InformationCircleIcon className="icon" />
                        )}

                        {section == "food" &&(
                        <img src={cutlery} className="icon" />
                        )}

                        {section == "hops" &&(
                        <img src={hops} className="icon" />
                        )}

                        
                        {section == "malt" &&(
                        <img src={malt} className="icon" />
                        )}
                </div>
            </div>
        </div>
    )
}

export default Infographic;