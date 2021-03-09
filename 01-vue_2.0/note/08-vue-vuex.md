## vuex

#### install vuex

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Vuex_state
 * 
 * 
 * 为了更方便的实现多个组件共享状态
 */

npm install vuex --save


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### config vuex

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** config vuex **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        count: 0
    }
});

new Vue({

    store,
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### state

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 
 * 
 * 
 * 
 */

<div>

    {{ $store.state.data }}

<div>


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### mapState

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 
 * 
 * 
 * 
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


import { mapState } from 'vuex';

computed: {

    ... mapState(['count']),
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```


















