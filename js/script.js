

var typed_span=document.getElementById("typed");

var array=["photoshop","illustrator","premiere pro","duration"];

var each_array=0;
var letters=0;





/************************************************************** */
function typing(){

    if(letters < array[each_array].length){
        typed_span.textContent += array[each_array].charAt(letters);

        letters ++;

        setTimeout(typing,200)
    }
    else{
        setTimeout(deleting,2000)

    }

}
/*********************************************************** */


function deleting(){

    if(letters >0){
        typed_span.textContent = array[each_array].substring( 0 , letters-1);

        letters --;

        setTimeout(deleting,100)
    }
    else{
        each_array ++;

        if(each_array >= array.length){
            each_array=0;
        }

        setTimeout(typing,1500)
    }
}

/********************************************************* */

window.onload=function(){
    setTimeout(typing,2000);
}

/********************************************************** */