import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider3D/Slider3D.css";
import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import beerOne from "../images/beerOne.png";
import beerTwo from "../images/beerTwo.png";
import beerThree from "../images/beerThree.png";
import beerFour from "../images/beerFour.png";
import {useRecoilState} from "recoil";
import { dataState } from "../atoms/dataAtom";
import axios from "axios";

const Slider3D = () =>{
  const [imgIndex,setImgIndex] = useState(0)
  const [apiData, setApiData] = useRecoilState(dataState)
  const images = [beerOne, beerTwo, beerThree, beerFour]
  const types = ["Light", "Medium", "Strong", "Extra strong"]

 
  useEffect(()=>{
    chooseBeer(imgIndex);
  }, [imgIndex])





    const NextArrow = ({onClick}) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight className="arrowIcon" />
          </div>
        )
      }
    
      const PrevArrow = ({onClick}) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft className="arrowIcon" />
          </div>
        )
      }

       
    
    const settings = {
      infinite:true,
      lazyLoad: true,
      speed: 300,
      slidesToShow:3,
      centerMode: true,
      centerPadding: 0,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImgIndex(next), 
    };

    const chooseBeer = async (indx) =>{

      const url = "https://api.punkapi.com/v2/beers/";
   
    

      if(indx === 0){
        setApiData(await axios.get(url, {params: {abv_lt: 5}}));
   
      }
      if(indx === 1){
        setApiData(await axios.get(url, {params: {abv_gt:5, abv_lt:10}}));
      }
      if(indx === 2){
        setApiData(await axios.get(url, {params: {abv_gt: 10, abv_lt:20}}));
      }
      if(indx === 3){
        setApiData(await axios.get(url, {params: {abv_gt: 20}}));
      }
     
    } 

 

    return(
      <div className="slider-cont">
          <h1 className="sliderCaption neonText">{types[imgIndex]}</h1>
              <Slider {...settings} className="sld">
                  {images?.map((img, idx) => (
                    <div key={idx} className={idx === imgIndex ? "slide activeSlide" : "slide"}>                    
                        <img src={img} alt={idx} />
                  </div>
                  ))}
              </Slider>                    
      </div>
    )
}

export default Slider3D;