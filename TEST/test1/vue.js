var app = new Vue({
    el: "#app",
    data:{
        list:[
            {id : 1, name: '保时捷', ctime: new Date()},
            {id : 2, name: '法拉利', ctime: new Date()},
            {id : 3, name: '玛莎拉蒂', ctime: new Date()},
            {id : 4, name: '奔驰', ctime: new Date()},
            {id : 5, name: '宝马', ctime: new Date()}
        ],
        id:'',
        name:'',
        key:''
    },
    methods: {
        del:(id)=>{
            console.log(id);
            globalThis.app.list.splice(id, 1)
        },
        save:function(){
            let object = {id: this.id ,name : this.name, ctime: new Date()}
            this.list.push(object)
        },
        search: function(key){
            if(key === ''){
                return this.list
            }
            return this.list.filter((item)=>{
                return item.name.includes(key)
            })
        }
    },
    created() {
        axios.get('https://localhost:8080/getList').then(response =>(this.list = JSON.stringify(response)))
    },
    filters:{
        'timeFormat':(msg, patten="yyyy-MM-dd HH:mm:ss")=>{
            let date = new Date(msg)
            let year = date.getFullYear()
            let mouth = (date.getMonth() + 1).toString().padStart(2,'0')
            let day = (date.getDate()).toString().padStart(2,'0')
            let hour = (date.getHours()).toString().padStart(2,'0')
            let minute = (date.getMinutes()).toString().padStart(2,'0')
            let second = (date.getSeconds()).toString().padStart(2,'0')
            if(patten === "yyyy-MM-dd"){
                return `${year}-${mouth}-${day}`
            }
            else{
                return `${year}-${mouth}-${day} ${hour}:${minute}:${second}`
            }

        }
    },
    directives:{
        "focus": {
            inserted:(el)=>{
                
                console.log('进入 foucus');
                el.focus()
            }
        }
        
    }
})