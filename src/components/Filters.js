import { useRecoilState } from "recoil";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import "../styles/Filters/Filters.css";
import useApiData from "./useApiData";
import { paramsState } from "../atoms/paramAtom";

const Filters = () => {
    const [ebc, setEbc] = useState(60);
    const [params, setParams] = useRecoilState(paramsState)

    useApiData(params.paramKey, params.paramVal)


    const findBeer = (event) => {

        setParams({
            paramKey: "beer_name",
            paramVal: event.target.value
        })

    }

    const handleRangeSlider = (event) => {

        setEbc(event.target.value);

        setParams({
            paramKey: "ebc_gt",
            paramVal: parseInt(event.target.value)
        })

    }


    const handleDate = (event) => {
        const splitdate = event.target.value.split("-");
        const formattedDate = `${splitdate[1]}-${splitdate[0]}`;

        setParams({
            paramKey: "brewed_before",
            paramVal: formattedDate
        })
    }


    return (
        <div className="filters">

            <div className="findByNameContainer">
                <p>Beer name</p>
                <div className="searchIconCont">
                    <MagnifyingGlassIcon className="searchIcon" />
                </div>
                <input onChange={findBeer} placeholder="Search..." type="text" />
            </div>

            <div className="dateContainer">
                <p>Brewed before</p>
                <input onChange={handleDate} type="date" min="2007-06-02" />

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