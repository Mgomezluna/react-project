import React from "react";

const Hijo = (props) => {

    const  { propsRegalo } = props;
    console.log(props.propsRegalo);

    return( <>
        <h1>Componente hijo</h1>
    </>
    )
}

export default Hijo;