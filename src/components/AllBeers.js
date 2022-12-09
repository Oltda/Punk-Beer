import axios from "axios";
import { useEffect } from "react";
import "../styles/AllBeers/AllBeers.css";
import BeerItem from "../components/BeerItem";
import { useRecoilState } from "recoil";
import { dataState } from "../atoms/dataAtom";
import "react-datepicker/dist/react-datepicker.css";
import Filters from "../components/Filters";
import useApiData from "./useApiData";

const AllBeers = () => {

    const apiData = useApiData()


    return (
        <div className="resultsWrap">
            <Filters />
            <div className="wrapAllBeers">
                {apiData?.data.map((beer, inx) => (
                    <BeerItem key={inx} beerData={beer} />
                ))}
            </div>
        </div>
    )
}

export default AllBeers;