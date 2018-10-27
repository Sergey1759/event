export let a = 1;
var my_form = document.getElementById('my_form');
var form_area = document.getElementById('form_area');
var name_event = document.getElementById('name_event');
var start_date = document.getElementById('start_date');
var finish_date = document.getElementById('finish_date');
var comment = document.getElementById('comment');
var add_event = document.getElementById('add_event');
var reset = document.getElementById('reset');

var arr_element_form = [name_event,start_date,finish_date,comment,add_event,reset];

var show_close_add = document.getElementById('show_close_add');
var array_event = [];
var count_array = 0;



set_vertical(arr_element_form,form_area);
set_horizontal(arr_element_form,form_area);


function set_horizontal(arr,element_by_center){
    var window_width =  parseFloat(window.getComputedStyle(element_by_center, null).width);
    var padding = (window_width - all_width(arr))/arr.length/2.2 ;
    console.log(all_width(arr));
    console.log(window_width);
    console.log(padding);
    for(var i = 0; i < arr.length; i++){
        arr[i].style.marginLeft = padding + "px";    
        arr[i].style.marginRight = padding + "px";    
    }
  function all_width(arr){
       var all_width_count = 0;
       for(var i = 0; i < arr.length; i++){
        var width = parseFloat(window.getComputedStyle(arr[i], null).width); 
        all_width_count =  all_width_count + width;
       }
    return all_width_count;
   }
}
function set_vertical(arr,element_by_center){
    for(var i = 0; i < arr.length; i++){
        _vertikal(arr[i]);
    }
    function _vertikal(elem){
    var height = parseFloat(window.getComputedStyle(elem, null).height); 
    height + parseFloat(window.getComputedStyle(elem, null).border) ;
    var height_all = parseFloat(window.getComputedStyle(element_by_center, null).height);
    var buf = height_all - height;
    var buf = buf/2;
    elem.style.position = "relative";   
    elem.style.bottom = buf + "px";
}}

reset.onclick = function(){
  clear_form();
    function clear_form(){
        arr_element_form[0].value = '';
        arr_element_form[1].value = '';
        arr_element_form[2].value = '';
        arr_element_form[3].value = '';
}
};


add_event.onclick = function(){
   if(verify_form() == 0){
    form_to_obj();
    clear_form();
    _createElement();
   } else {
       alert("error");
   }
    
    function form_to_obj(){
        var obj = {}
            obj[arr_element_form[0].id] = arr_element_form[0].value;
            obj[arr_element_form[1].id] = arr_element_form[1].value;
            obj[arr_element_form[2].id] = arr_element_form[2].value;
            obj[arr_element_form[3].id] = arr_element_form[3].value;
        array_event[count_array] = obj;
        
}
    
    
    function verify_form(){
        var count = 0;
        for(var i = 0; i < arr_element_form.length-2; i++){
        if(arr_element_form[i].value == '') count++;
        } return count;
    }
    
    function clear_form(){
        arr_element_form[0].value = '';
        arr_element_form[1].value = '';
        arr_element_form[2].value = '';
        arr_element_form[3].value = '';
}
    
};


function _createElement(){
    var new_event = document.createElement('div');
    new_event.className = "event";
    new_event.id = "event_" + count_array;
    new_event.innerHTML = " <div id=event_" + count_array +"_name> " + array_event[count_array].name_event + "</div>" +
        "<div id=event_"+count_array+"_start"  + ">" + array_event[count_array].start_date + "</div>" +
        "<div id=event_"+count_array+"_finish" + ">" + array_event[count_array].finish_date + "</div>" +
        "<div id=event_"+count_array+"_comment>" + array_event[count_array].comment + "</div>";
    
    document.body.appendChild(new_event);
    count_array++;
}
     


          