///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {Test} from "./components/Test";


//-------------------------------------------------------------------------------------------------------------------//


export {
    App
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class App extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };
    }

    render() {

        return (

            <React.Fragment>
                <Test/>
            </React.Fragment>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
