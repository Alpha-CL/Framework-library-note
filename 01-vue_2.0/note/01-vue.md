## Vue

### install Vue

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Install Vue 
 * 
 * 
 * 8.11.0+
 */

npm install -g @vue/cli                         // vue 命令行工具

npm install -g @vue/cli-service-global          // 快速原型开发工具


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

### Vue module scoped

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * scoped
 * 
 * 
 * 带有 scoped 特性的标签仅作用域当前的 component
 */

<template scoped>

    // hteml

</template>


<script scoped>

    // js

</script>


<style scoped>

    // css

</style>


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

### create vue

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * command create vue
 * 
 * 
 * 
 */


vue create [name]


? Please pick a preset                                              // 请选择一个预设

? Check the features needed for your project                        // 检查项目所需的功能

? Where do you prefer placing config for Babel, ESLint, etc.?       // 希望在哪里放置Babel，ESLint等的配置？

    > In dedicated config files             // 在专用配置文件中

    > In package.json                       // 在package.json中


//-------------------------------------------------------------------------------------------------------------------//


/**
 * ui create vue
 * 
 * 
 */

vue ui


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 删除存储的默认配置文件
 * 
 * 
 * 
 */

./root/.vuerc


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

### Virtual DOM

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * createNodeDescription            // virtual node
 * 
 * 
 * Vue 通过建立一个 虚拟DOM 来追踪自己要如何改变 真实DOM
 * 
 * vNode 包含 Vue 页面中所有需要渲染的节点描述信息
 * 
 *
 * * <template><template/> 和 render()，不能共存
 */


render(createElement: CreateElement, context: RenderContext<Props>): VNode | VNode[] {

}


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 在 vue 中 template 和 render 的优先级 
 * 
 * 
 */


<template></template>           // 优先级 - 1

export default {

    template: ``,               // 优先级 - 3
    
    render() { },               // 优先级 - 2
}


//-------------------------------------------------------------------------------------------------------------------//


/**
 * createElement(tagName, ?context, ?subVNode): ;
 * 
 * 
 * @tagName: string-tagName | string-component              // 标签名 | 组件名
 * 
 * @context: { key: value }                                 // 与模板中属性对应的数据对象
 * 
 * @subVNode: VNode | VNode[]                               // 子级虚拟节点
 */


//-------------------------------------------------------------------------------------------------------------------//


{
    /**
     * v-bind:class
     * 
     * 
     * 接受一个字符串、对象或字符串和对象组成的数组
     */
    
    class: {
    
        foo: true,
        bar: false
    },


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

    
    /**
     * v-bind:style
     * 
     * 
     * 接受一个字符串、对象，或对象组成的数组
     */
    
    style: {
        color: 'red',
        fontSize: '14px',
    },
    
    
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

    
    /**
     * 普通的 HTML attribute
     * 
     * 
     * 
     */
    
    attrs: {
        id: 'foo',
    },


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
    
    
    /**
     * 组件 prop
     * 
     * 
     * 
     */

    props: {
        myProp: 'bar',
    },
    

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

    
    /**
     * DOM属性
     * 
     * 
     * 
     */

    domProps: {
        innerHTML: 'baz',
    },
    

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


    /**
     * 事件监听器
     * 
     * 
     * 不支持如“v-on:keyup.enter”这样的修饰器
     */

    on: {
    click: this.onClick
    },
    

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


    /**
     * 仅用于组件，用于监听原生事件
     * 
     * 
     * 不是组件内部使用 vm.$emit 触发的事
     */
    
    nativeOn: {
    click: this.nativeClickHandler
    },


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
    
    
    /**
     * 自定义指令
     * 
     * 
     * 注意，无法对 `binding` 中的 `oldValue`赋值，因为 Vue 已经自动为你进行了同步
     */

    directives: [
    {
      name: 'my-custom-directive',
      value: '2',
      expression: '1 + 1',
      arg: 'foo',
      modifiers: {
        bar: true
      }
    }
    
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


    ],

    /**
     * key
     * 
     * 
     * 
     */
    
    key: 'myKey',
    

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


    /**
     * ref
     * 
     * 
     * 如果在渲染函数中给多个元素都应用了相同的 ref 名，那么 `$refs.myRef` 会变成一个数组
     */
    
    ref: 'myRef',
    refInFor: true


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//
    
    
    /**
     * 作用域插槽
     * 
     * 
     * 格式为：{ name: props => VNode | Array<VNode> }
     * 如果组件是其它组件的子组件，需为插槽指定名称
     */
    
    slot: 'name-of-slot',
    scopedSlots: {
        default: props => createElement('span', props.text)
    },
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

### JSX

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * JSX
 * 
 * 
 * JS + XML(html)
 */

render() {

    return (
    
        <html>                  // "<" ">" 中放置 html
        
        {js}                    // "{" "}" 中放置 javascript
    )
}


//-------------------------------------------------------------------------------------------------------------------//


/**
 * v-text
 * 
 * 
 * 
 */

<div domPropsInnerHTML="<a>href</a>"/>


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * v-html
 * 
 * 
 * 
 */

<div domPropsInnerHTML="<p>i am a p</p>"></div>


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * v-show
 * 
 * 
 * jsx支持v-show指令, 但需要借助 js 变量
 */

<div v-show={this.show}></div>


//-------------------------------------------------------------------------------------------------------------------//


/**
 * v-if
 * 
 * 
 * 
 */

{true && <div>div</div>}                                // v-if

{true ? <div>div</div> : <span>span</span>}             // v-if + v-else


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 当处理过程相对繁琐时，可借用 methods 使用多种条件判断
 * 
 * 
 * 
 */


methods: {

    vIf() {                                             // v-if + v-else-if + v-else
    
        if (this.num === 1) {
    
            return <div>1</div>
    
        } else if (this.num === 2) {
    
            return <span>2</span>;
    
        } else {
    
            return <div>3</div>;
        }
    },
}

//-------------------------------------------------------------------------------------------------------------------//


/**
 * v-for
 * 
 * 
 * 
 */

{[1, 2, 3].map(item => (<div key={item}>{ item }</div>))}


//-------------------------------------------------------------------------------------------------------------------//


/**
 * v-on
 * 
 * 
 * 
 */


<button on-click={this.handleClick}>click</button>

<button onClick={this.handleClick}>click</button>


<base-demo nativeOnClick={this.handleClick}/>                           // 监听原生事件

<button onClick={() => {this.handleClick(1)}}>click</button>            // 传参


//-------------------------------------------------------------------------------------------------------------------//


/**
 * v-bind
 * 
 * 
 * 
 */

<div
    class={['a', 'b']}
    style={{fontSize: '14px', color: 'red'}}
>
    v-bind
</div>


//-------------------------------------------------------------------------------------------------------------------//


/**
 * v-model
 * 
 * 
 * 有相应的插件 支持 v-model，可直接使用
 */

<input v-model={this.content}/>{this.content}


//-------------------------------------------------------------------------------------------------------------------//


/**
 * v-slot
 * 
 * 
 * 
 */

<base-slot>

    <div slot="default">默认插槽</div>
    <div slot="header">具名header插槽</div>

</base-slot>


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * scopedSlots
 * 
 * 
 * 
 */

// 1
// 
<base-slot-h-w {...{scopedSlots: {default: (props) => props.text}}} />


// 2
// 
const scopedSlots = {

    default: props => <span>{props.text}</span>
};

<base-slot-h-w {...scopedSlots} />


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 不常用，无替代方案
 * 
 * 
 * v-pre
 * v-cloak
 * v-once
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * ref
 * 
 * 
 * 
 */

<input ref="input"/>

{this.arr1.map(item => <div ref="xx" key={item}>{item}</div>)}

{this.arr2.map(item => <div ref="xx" refInFor={true} key={item}>{item}</div>)}


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 自定义指令
 * 
 * 
 * 
 */

render () {

  // 1
  return (
    <input v-splice={{value: this.value, modifiers: {number: true }}}/>
  )


  // 2
  const directives = [
    { 
      name: 'splice', 
      value: this.value,  
      modifiers: {number: true }
    }
  ];

  return (
    <div {...{ directives} }></div>
  )
}


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 过滤器
 * 
 * 
 * 
 */

<!-- 正常使用过滤器 -->
<div>{{ msg | capitalize }}</div>

<!-- 在jsx中使用过滤器 -->
<div>{ this.$options.filters('capitalize')(this.msg) }</div>


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```