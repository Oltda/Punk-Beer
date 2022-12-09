import { useState, useEffect } from "react";
import axios from "axios";
import { dataState } from "../atoms/dataAtom";
import { useRecoilState } from "recoil";

function useApiData(parKey, parVal) {
    const [apiData, setApiData] = useRecoilState(dataState)


    const getAbvParams = () => {
        let params = {};
        if (parKey == "abv") {
            if (parVal == 0) {
                params = { abv_lt: 5 }
            }
            if (parVal == 1) {
                params = { abv_gt: 5, abv_lt: 10 }
            }
            if (parVal == 2) {
                params = { abv_gt: 10, abv_lt: 20 }
            }
            if (parVal == 3) {
                params = { abv_gt: 20 }
            }
            if (!parVal) {
                params = {}
            }
        }
        if (parKey == "beer_name") {
            if (parVal != "") {
                params = { beer_name: parVal }
            }
        }
        if (parKey == "ebc_gt") {
            params = { ebc_gt: parVal }
        }

        return params;
    }




    const url = "https://api.punkapi.com/v2/beers/";

    useEffect(() => {
        const fetchAllBeers = async () => {

            const parameters = getAbvParams()

            let res;

            if (parameters == {}) {
                res = await axios.get(url);
            }
            else {
                res = await axios.get(url, { params: parameters })
            }

            setApiData(res);
        }
        fetchAllBeers();
    }, [parVal])




    return apiData;
}

export default useApiData;