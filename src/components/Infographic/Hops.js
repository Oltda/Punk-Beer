

const Hops = ({hops}) =>{

   

    return(
        <div className="list-items-wrap">
            <h1 className="hops-caption">Hops</h1>
            {hops.map((element, indx)=>(
                    <div key={indx} className="list-item">
                        <div className="left">{element.name}</div> 
                        <div>{element.amount.value} g</div>
                    </div>
            ))}
         
        </div>
    )
}

export default Hops;