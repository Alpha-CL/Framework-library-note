///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import React, {useState, useEffect} from "react";
import "./index.css";

//-------------------------------------------------------------------------------------------------------------------//


/**
 **********************************************************************************************************************
 *
 *
 * useEffect(effectFn，diffArr): clearFn;               // 异步执行
 *
 *
 * @effectFn:
 * @diffArr:
 *
 * return: clearFn;
 *
 *
 ** 该函数接收一个函数作为参数，接收的函数巍峨需要进行副作用操作的函数;
 *
 ** 运行时间: 异步执行，在页面完成真实UI渲染 "之后" ( 不会阻塞浏览器 )
 **         ( clsComp 中 componentDidMount()；和 componentDitUpdate(); 是同步执行
 **           在页面完成真实UI渲染 "之前" 会阻塞浏览器，可能会造成加载时间过长，影响用户体验 )
 *
 ** 每个函数组件中，可以多次使用 useEffect(); 严禁书写在 代码块( 判断，循环 )中
 *  ( 可能会造成，该节点的 effectTable 后续数据匹配错误等 )
 *
 ** useEffect 中的副作用函数，可以有返回值，该返回值必须是一个函数( 称为: 清理函数 )
 *
 *      - 清理函数执行时间:
 *
 *          1) 首次渲染组件不运行 该函数
 *
 *          2) 该函数 运行在 副作用函数 之前
 *
 **         3) 组件被销毁时，必然会运行一次
 *
 *
 ** useEffect 中可以传递第二个参数
 *
 *      - 该参数为一个数组( 该数组中记录该副作用的依赖数据 )
 *
 *          * 当组件再次渲染后，仅当依赖数据和上一次数据不同时，才执行副作用函数
 *            (
 *              若传递了依赖数据，并且 传入的依赖数据 与 之前的数据 相同，则
 *
 *              1) 副作用函数仅在第一次渲染后运行
 *              2) 清理函数尽在卸载组件组件后运行
 *            )
 *
 *
 ** 副作用函数中，若使用了函数上下文中的变量，则会产生函数闭包( 导致持久化保持 当前数据 this 的指向 上下文中的变量 )
 *  ( 造成副作用函数中变量不会实时更新 )
 *
 ** 副作用函数在每次更新时，还会覆盖之前的副作用函数( 引用地址变更 )
 *  ( 尽量保证稳定的副作用函数，否则需注意替换副作用函数时，仍然会先执行一次上一个副作用函数的 清理函数 )
 *
 *
 **********************************************************************************************************************
 *
 *
 * 副作用
 *
 * 1) ajax 请求
 * 2) 计时器
 * 3) 其他异步操作
 * 4) 更改真实DOM对象
 * 5) 本地存储
 * 6) 其他会对外部产生影响的操作
 *
 *
 **********************************************************************************************************************
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function UseEffect(props) {

    const [num, setNum] = useState(0),
        handleNumAdd = () => {

            setNum(num + 1);
        };

    /** 不应该在函数入加入副作用 **/
    // document.title = `计数器: ${num}`;

    /** 应该在 useEffect(); 中加入副作用 **/
    useEffect(() => {

        document.title = `计数器: ${num}`;
    });

    useEffect(() => {

        // console.log('[副作用操作]');
    });

    return (

        <React.Fragment>
            <div className="section">
                <div className="section-hd" >
                    <h3>useEffect</h3>
                </div>
                <div className="section-bd">
                    <div> {num} </div>
                    <button
                        onClick={handleNumAdd}
                    >add</button>
                </div>
                <div className="section-ft">

                </div>
            </div>
        </React.Fragment>
    );
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


export {

    UseEffect
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////