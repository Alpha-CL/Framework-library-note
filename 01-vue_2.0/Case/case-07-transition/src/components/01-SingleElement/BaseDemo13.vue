<template>

    <div class="demo6">

        <button @click="show = !show">click</button>

        <transition

                :css="false"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"

                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
        >
            <div class="box" v-if="show">hello world</div>
        </transition>

    </div>

</template>

<script>

import "../../../node_modules/animate.css/animate.css";

export default {

    name: "BaseDemo13",
    data() {

        return {

            show: true,
            x: 200,
        };
    },
    methods: {

        beforeEnter(el) {

            el.style.opacity = 0;
        },
        enter(el, done) {


            /**
             * Velocity(dom, { changeStyle}, { setting })
             *
             * @dom: 指定过渡的 dom 元素
             * @changeStyle: 指定过渡的动画样式
             * @setting: 指定过渡的配置选项
             */

            Velocity(el, {opacity: 1}, {duration: 500});
            Velocity(el, {rotateZ: 10}, {duration: 300});
            Velocity(el, {rotateZ: -10}, {duration: 300});
            Velocity(el, {rotateZ: 0}, {duration: 300, complete: done});

        },
        afterEnter(el) {

            console.log('done');

        },
        enterCanceled(el) {

            // 仅当执行 done.canceled = true; 后，才可以调用此钩子函数
        },
        beforeLeave(el) {

            el.style.opacity = 1;
            el.style.transformOrigin = 'left';
        },
        leave(el, done) {

            Velocity(el, {translateX: '15px', rotateZ: '50deg'}, {duration: 600});
            Velocity(el, {rotateZ: '100deg'}, {duration: 600, loop: 2});
            Velocity(el, {rotateZ: '45deg', translateY: '30px', translateX: '30px', opacity: 0}, {complete: done});
        },
        afterLeave() {

            console.log('leave');
        }
    }
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 同时使用过渡和动画            // type="target"
 *
 *
 * 1) 当不设置 type 时，默认会取 transitioned 和 animationed 两者更长的为结束时刻
 *
 * 2) 当设置 type 时，需指定 type 所监听的类型( animation | transition )
 *    当指定其中一种为主要监听对象时，当该监听对象执行完成后，则停止过渡效果
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 显性的过渡时间              // :duration="time"
 *                           // :duration="{enter: 4000, leave: 6000}"
 *
 * Vue可以自动得出过渡效果的完成时机，从而对dom进行处理
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 嵌套元素，子元素过渡时间长于父元素
 *
 *
 * 此时可设置 duration 属性，定制一个显性的过渡持续时间( 以毫秒记 )
 *
 *
 * * 父级元素，不能使用 v-if
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 初始渲染的过渡              // appear
 *                           //
 *                           // appear-class
 *                           // appear-active-class
 *                           // appear-enter-to
 *
 *
 * 设置节点在初始渲染的过渡
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * JavaScript 钩子
 *
 *
 *
 */

// <transition
//
//     @before-enter="beforeEnter"
//     @enter="enter"
//     @after-enter="afterEnter"
//
//     @enter-cancelled="enterCancelled"
//
//
//     @before-leave="beforeLeave"
//     @leave="leave"
//     @after-leave="afterLeave"
//
//     @leave-cancelled="leaveCancelled"
// >
//     <!-- ... -->
// </transition>


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Velocity.js
 *
 *
 * http://velocityjs.org/
 */

// npm install velocity-animate


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


</script>

<style scoped>


button {
    margin-bottom: 10px;
}

.box {
    width: 120px;
    height: 80px;
    line-height: 80px;
    color: red;
    border: 1px solid red;
    border-radius: 4px;
    text-align: center;
}


</style>