// Vue.filter("msgfilter", function(msg){
//     return msg + "123"
// })  
//全局filter过滤器
Vue.config.keyCodes.rr = 13 //配置keycode 按键

Vue.directive("focus", {
    inserted: (el)=>{
        el.focus()
    },
    updated :(el)=> {
        console.log('update')
    },
    bind:(el,binding)=>{
        console.log(binding)
    }
})//创建全局指令

Vue.directive('color', {
    inserted:(el,binding)=>{
        console.log("el   :" + el.offsetWidth);
        el.style.color = binding.value
    }
})//v-color 指令
var app = new Vue({
    el: '#vue',
    data: {
        list: [{
                id: 1,
                name: "奔驰",
                time: new Date()
            },
            {
                id: 2,
                name: "宝马",
                time: new Date()
            },
            {
                id: 3,
                name: "大众",
                time: new Date()
            },
            {
                id: 4,
                name: "奔奔",
                time: new Date()
            }
        ],
        keyword: '',
        name: ''
    },
    methods: {
        add: function () {
            console.log(globalThis.app.list)
            let object = {
                id: this.list[this.list.length - 1].id + 1,
                name: this.name,
                time: new Date()
            }
            this.list.push(object)
            this.name = ''
        },
        del: function (id) {
            let index = this.list.findIndex(item => {
                if (item.id == id) {
                    return true
                }
            })
            console.log(index)
            this.list.splice(index, 1)
            
        },
        search: function () {
            if (this.keyword == '') {
                return this.list
            } else {
                // var searchList = []
                // this.list.forEach(item => {
                //     if(item.name.indexOf(this.keyword) != -1){
                //         searchList.push(item)
                //     }
                // });
                // return searchList
                return this.list.filter(item => {
                    // if(item.name.indexOf(this.keyword) != -1){
                    //     return true
                    // }
                    return item.name.includes(this.keyword)
                })

            }
        }
    },
    filters:{
        //局部filter过滤器
        msgfilter: function(msg){
            return msg + "123"
        },
        datefilter: function(date , patten="yyyy-MM-dd HH:mm:ss"){
            let d = new Date(date)
            let y = d.getFullYear()
            let m = (d.getMonth() +1).toString().padStart(2,'0')
            let da = (d.getDate()).toString().padStart(2 , '0')
            let h = (d.getHours()).toString().padStart(2,'0')
            let mm = (d.getMinutes()).toString().padStart(2, '0')
            let s = (d.getSeconds()).toString().padStart(2 , '0')
            if(patten === "yyyy-MM-dd"){
                return `${y}-${m}-${da}`
            }
            return `${y}-${m}-${da} ${h}:${mm}:${s}`
        }
    },
    directives:{
        "fontsize":{
            bind:(el,binding)=>{
                el.style.fontWeight = binding.value
            }
        }
    }

})