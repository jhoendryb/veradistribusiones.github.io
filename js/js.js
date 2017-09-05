$(document).ready(function(){

    
    $(function(){
        $('#slider div:gt(0)').hide();
        setInterval(function(){
          $('#slider div:first-child').fadeOut(0)
             .next('div').fadeIn(1000)
             .end().appendTo('#slider');}, 4000);
    });
    
    $(function(){
        $('#slider2 div:gt(0)').hide();
        setInterval(function(){
          $('#slider2 div:first-child').fadeOut(0)
             .next('div').fadeIn(1000)
             .end().appendTo('#slider2');}, 4000);
    });    
    
});
