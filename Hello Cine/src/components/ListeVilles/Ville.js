

function Ville({villes, getCineFunction}) {

    return ( 
        <div className="flex my-10" >
            {villes.map(v =><button onClick={()=>getCineFunction(v)} key={v.name} className="font-bold px-5 cursor-pointer hover:bg-blue-300 rounded focus:ring-2 focus:ring-blue-600 ">{v.name}</button>)  }
        </div>
    )
}

export default Ville
