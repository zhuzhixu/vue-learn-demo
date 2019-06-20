import $ from "jquery"
import "./css/index.css" //需要配置loader解析css
$(function(){
    $('li:odd').css('backgroundColor','lightblue')
    $('li:even').css('backgroundColor','lightgrey')
})