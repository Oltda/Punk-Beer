import {useRecoilState} from "recoil";
import { dataState } from "../atoms/dataAtom";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import axios from "axios";
import { useState } from "react";
import "../styles/Filters/Filters.css";

const Filters = () =>{
    const [apiData, setApiData] = useRecoilState(dataState);
    const [ebc, setEbc] = useState(60);

    const url = "https://api.punkapi.com/v2/beers/";

    const fetchBeer = async (parKey ,parVal) =>{

        var res;
        if(!parKey){
            res = await axios.get(url);
        }
        if(parKey === "beer_name"){
            if(parVal != ""){
                res = await axios.get(url, {params: {beer_name: parVal}});
            }
           
        }
        if(parKey === "ebc_gt"){
            res = await axios.get(url, {params: {ebc_gt: parVal}});        
        }
        if(parKey === "brewed_before"){
            res = await axios.get(url, {params: {brewed_before: parVal}});
        }
        setApiData(res);
    }

    const findBeer = (event) =>{
        fetchBeer("beer_name", event.target.value)
    }

    const handleRangeSlider = (event) =>{

        setEbc(event.target.value);
        fetchBeer("ebc_gt", parseInt(event.target.value))
    }



    const handleDate = (event) =>{       
        const splitdate = event.target.value.split("-");
        const formattedDate = `${splitdate[1]}-${splitdate[0]}`;
        fetchBeer("brewed_before", formattedDate)
    }


    return(
        <div className="filters">
            

        <div className="findByNameContainer">
            <p>Beer name</p>
            <div className="searchIconCont">
                <MagnifyingGlassIcon className="searchIcon" />
            </div>                     
            <input  onChange={findBeer} placeholder="Search..." type="text" />
        </div>

        <div className="dateContainer">
            <p>Brewed before</p>
            <input onChange={handleDate} type="date" min="2007-06-02"/>
          
        </div>

        <div className="slidecontainer">
            <p>Color</p>
            <div className="sliderWrap">
                <input className="slider" onChange={handleRangeSlider} value={ebc} type="range" min="1" max="500" />
                <div>{ebc}</div>
            </div>
        </div>
    </div>
    )
}

export default Filters;