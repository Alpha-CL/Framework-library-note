///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React from "react";
import {MultiContexts} from "./MultiContexts";
import {SignleContext} from "./SingleContext";


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Old Context
 *
 *
 * 旧版 Conttext API 存在严重的效率问题，并且容易导致数据滥用
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function OldContext(props) {

    return (

        <React.Fragment>
            <SignleContext/>
            <hr/>
            <MultiContexts/>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    OldContext
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////