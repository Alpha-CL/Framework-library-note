///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import {Parent} from "./Parent";
import {Child} from "./Child";


//-------------------------------------------------------------------------------------------------------------------//


function Problem(props) {

    return (

        <React.Fragment>
            <Parent/>
        </React.Fragment>
    );
}


Problem.defaultProps = {

};


Problem.propTypes = {

};


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Problem
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////