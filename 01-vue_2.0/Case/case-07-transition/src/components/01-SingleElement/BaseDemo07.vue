<template>

    <div class="demo6">

        <button @click="show = !show">click</button>

        <transition

                type="animate__animated"
                enter-active-class="animate__animated animate__tada v-enter-active"
                leave-active-class="animate__animated animate__tada v-leave-active"
        >
            <div class="box" v-if="show">hello world</div>
        </transition>

    </div>

</template>

<script>

import "../../../node_modules/animate.css/animate.css";

export default {

    name: "BaseDemo7",
    data() {

        return {

            show: true,
        };
    },
};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 同时使用过渡和动画            // <div type="target"></div>
 *
 *
 * 1) 当不设置 type 时，默认会取 transitioned 和 animationed 两者更长的为结束时刻
 *
 * 2) 当设置 type 时，需指定 type 所监听的类型( animation | transition )
 *    当指定其中一种为主要监听对象时，当该监听对象执行完成后，则停止过渡效果
 */


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

.v-enter,
.v-leave-to {
    opacity: 0;
}

.v-enter-active,
.v-leave-active {
    transition: all 3s;
}

.v-enter-to,
.v-leave-active {
    opacity: 1;
}


</style>