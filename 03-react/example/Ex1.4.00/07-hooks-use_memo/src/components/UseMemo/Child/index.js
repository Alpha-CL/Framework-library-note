///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


function Child(props) {

    return (

        <React.Fragment>
            <li>{props.txt}</li>
        </React.Fragment>
    );
}


Child.defaultProps = {

};


Child.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Child
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////