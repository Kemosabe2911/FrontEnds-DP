$(function() {
    $(".toggle").on("click",function(){
        $(".items").toggleClass("show");
    });
});

$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('close');
    });
});