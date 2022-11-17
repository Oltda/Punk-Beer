import "../../styles/Infographic/Description.css";

const Description = ({desc}) =>{

    return(
        <div className="description-wrap">
            <p className="description-paragraph">
                {desc}
            </p>
        </div>
    )
}

export default Description;