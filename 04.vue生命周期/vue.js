var app = new Vue({
    el:"#app",
    data:{
        msg: 'this is data'
    },
    methods: {
        show:()=>{
            console.log('show 执行')
        },
        change:()=>{
            globalThis.app.msg = Math.random().toString()
        },
        getdata:()=>{
            axios.get('http://www.baidu.com').then((result) => {
                console.log("axios:" + result);
            }).catch((err) => {
                console.log(err);
            });
        }
    },
    beforeCreate() { //vue实例创建完成之前调用
        console.log('beforeCreate: 执行')
        //date 和 methods 都还没被初始化
    },
    created() {
        console.log('created:执行'+ this.msg )
        this.show()
        //操作数据和方法最早在created中
    },
    beforeMount() {
        console.log('beforeMount:执行 beforMount vue编辑模板 执行vue指令 将的模板放入内存中 并未挂载渲染到真正页面中')
        console.log('beforeMount:'+document.getElementById("h").innerText);
        //页面中的元素没被真正替换过来只拿到{{msg}}
    },
    mounted() {
        console.log('mounted:内存中真实模板挂在在页面中');
        console.log('mounted:'+document.getElementById("h").innerText);
        //vue实例创建完最后一个钩子函数 (操作dom最早在mounted中操作)
    },
    beforeUpdate() {
        console.log('beforeUpdate:页面上显示数据为'+document.getElementById('h').innerHTML)
        console.log('beforeUpdate: data数据为' + this.msg);
        //数据已经被更新， 页面还没有更新
    },
    updated() {
        console.log('updated: page change'+document.getElementById('h').innerHTML)
        console.log('updated: data数据为' + this.msg);
        //页面更新完成
    },
})