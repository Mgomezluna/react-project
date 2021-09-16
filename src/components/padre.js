import React from "react";
import Hijo from "./hijo";

const Padre = () => {

    let regalo = "Moto";


    return( <>
        <h1>Componente padre</h1>
        <Hijo propsRegalo={regalo}/>
    </>
    )
}

export default Padre;