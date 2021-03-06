///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";
import {commonTypes} from "../../utils/commonTypes";


//-------------------------------------------------------------------------------------------------------------------//


export {
    Checkboxs
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class Checkboxs extends Component {

    static defaultProps = {

        datas: [],
        chooseDatas: []
    };

    static propTypes = {

        datas: commonTypes.groupDatas,
        name: PropTypes.string.isRequired,
        chooseDatas: commonTypes.chooseDatas,
        onChange: PropTypes.func
    };


    constructor(props) {

        super(props);
        this.state = {};
    }

    // datas = [
    //     {value:'footeball', text: '足球'},
    //     {value:'basketball', text: '篮球'},
    //     {value:'movie', text: '电影'}
    // ]

    getCheckBoxes() {

        return this.props.datas.map(item => {

            return (

                <label key={item.value}>
                    {item.text}
                    <input
                        type="checkbox"
                        name={this.props.name}
                        value={item.value}
                        checked={this.props.chooseDatas.includes(item.value)}
                        onChange={this.handleChange}
                    />
                </label>
            );
        });
    }

    handleChange = (e) => {

        const val = e.target.value;
        let newArr;

        if (e.target.checked) {

            newArr = [...this.props.chooseDatas, val];

        } else {

            newArr = this.props.chooseDatas.filter(item => item !== val)
        }

        this.props.handleChange && this.props.handleChange(newArr, this.props.name, e);
    };

    render() {

        return (

            <>
                {this.getCheckBoxes()}
            </>
        );
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
