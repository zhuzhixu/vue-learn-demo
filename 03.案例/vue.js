new Vue({
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
})