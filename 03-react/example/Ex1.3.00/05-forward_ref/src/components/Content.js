///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";


//-------------------------------------------------------------------------------------------------------------------//


class Content extends Component {

    render() {

        return (

            <React.Fragment>
                <h1>Conetent: {this.props.content}</h1>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    Content
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
