import "../styles/Header/Header.css";
import headerImg from "../images/headerImg.png";
import headerLogo from "../images/headerLogo.png";
import headerDots from "../images/headerDots.png";

const Header = () =>{

    return(
        <div className="header">
            <img className="rightImg" src={headerLogo} />
            
        </div>
    )
}

export default Header;