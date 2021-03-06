///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import {OldLifeCycle} from "./OldLifeCycle";


//-------------------------------------------------------------------------------------------------------------------//


export {
    OldApp
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class OldApp extends Component {

    constructor(props) {

        super(props);

        this.state = {

            number: 1,
            show: true
        };
    }

    render() {

        const comp = this.state.show ? <OldLifeCycle n={this.state.number}/> : null;

        return (

            <>
                {comp}
                <button onClick={() => {

                    this.setState(state => ({

                        number: state.number + 1
                    }));
                }}>n + 1
                </button>

                <button
                    onClick={() => {

                        this.setState({

                            show: !this.state.show
                        });
                    }}
                >显示/隐藏
                </button>
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
