
<script>

$(document).ready(function(){
$("img").click(function(){
var img=$(this).attr("src");
$("body").append('<div id="curtain"></div>');
$("body").append('<img src="'+img+'" id="light" />');
$("body").append('<img src="photos/close.png"id="close" />');
$("img").animate({'opacity':'1'},1000);
$("#light,#curtain,#close").click(function(){

$("#light").remove();
$("#curtain").remove();
$("#close").remove();
});
});
});

</script>
