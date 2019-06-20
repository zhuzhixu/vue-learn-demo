import $ from "jquery"
import "./css/index.css" //需要配置loader解析css
$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor','lightgrey')
})

class demo{
    static index = {name:1}
}
let a = new demo() //配置第三方lader babel  加载js高级语法