///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {Component} from "react";
import PropTypes from "prop-types";


//-------------------------------------------------------------------------------------------------------------------//


/** Old Context API
 *
 *
 * ( 只有 class_component 才可以创建 context )
 * ( class_component & func_component 都可以接受数据 )
 **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * create context_data
 *
 *
 * 1) 必须创建 staic childContextTypes 约束 context 中传入的数据类型
 * 2) 必须创建 getChildContext(): contextDataObj; 返回的 ContextData 必须满足之前创建的约束类型
 *    ( 该函数修改后会在 render 后运行 )
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * use context_data
 *
 *
 * 必须创建 contextTypes 用于约束指定接受部分数据及其类型
 *
 * 1) 后代类组件的 constructor 的第二个参数，可以获取上下文中的指定数据
 * 2) 后代类组件的 context 属性，可以获取上下文中的指定数据( 需在 super(props, context) 传递 )
 */


//-------------------------------------------------------------------------------------------------------------------//


const types = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    handleAgeChange: PropTypes.func
};


function Child(props, context) {

    return (
        <React.Fragment>
            <h3>Child Context</h3>
            <p>context.name: {context.name}</p>
            <p>context.age: {context.age}</p>
            <hr/>
            <h3>SubChild Context</h3>
            <SubChild/>
            <hr/>
        </React.Fragment>
    );
}

/** 函数组件也必须使用 contextTypes 约束数据传入 **/
Child.contextTypes = types;


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class SubChild extends Component {

    /** 用于约束指定接受部分数据及其类型 **/

    static contextTypes = types;

    /** getContentData-Methods_01 **/
    /** constructor.param_02: 第二个参数 **/
    constructor(props, context) {

        super(props, context);

        console.log('[context]: ', context);
    }

    render() {

        return (
            <React.Fragment>

                {/** getContentData-Methods_02 **/}
                {/* this.context */}
                <p>context.name: {this.context.name}</p>
                <p>context.age: {this.context.age}</p>
                <button
                    onClick={() => {
                        this.context.handleAgeChange(this.context.age + 2);
                    }}
                >change age in context data
                </button>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


class OldContext extends Component {

    /** 约束 context 中的数据类型 **/

    static childContextTypes = types;

    constructor(props) {

        super(props);

        this.state = {

            name: 'alpha',
            age: 18
        };
    }

    /** 获取 context 中的数据 **/

    getChildContext() {

        console.log('[getChildContext]');

        return {

            name: this.state.name,
            age: this.state.age,
            handleAgeChange: (newAge) => {
                this.setState({
                    age: newAge
                });
            }
        }
    }

    render() {

        return (

            <React.Fragment>
                <h3>Old Context</h3>
                <button
                    onClick={() => {
                        this.setState({
                            age: this.state.age + 1
                        })
                    }}
                >change context data
                </button>
                <hr/>
                <Child/>
            </React.Fragment>
        );
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    OldContext
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
