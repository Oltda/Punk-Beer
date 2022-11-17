

const Malt = ({malt}) =>{

   

    return(
        <div className="list-items-wrap">
            <h1 className="malt-caption">Malt</h1>
            {malt.map((element, indx)=>(

                <div key={indx} className="list-item">     
                     <div className="left" >{element.name}</div> 
                     <div className="right">{element.amount.value} g</div>
                 </div>
            ))}
     
               
              
        </div>
    )
}

export default Malt;