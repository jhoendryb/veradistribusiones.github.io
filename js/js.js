$(document).ready(function(){
    
   
    $(function(){
        $('#slider div:gt(0)').hide();
        setInterval(function(){
          $('#slider div:first-child').fadeOut(0)
             .next('div').fadeIn(1000)
             .end().appendTo('#slider');}, 4000);
    });

      
    /*$("#mostrarf").hover(function(){
            $("#facebook").show();
        }, function(){
            $("#facebook").hide();
    });
    
    $("#facebook").hover(function(){
            $("#facebook").show();
        }, function(){
            $("#facebook").hide();
    });
    
    $("#mostrari").hover(function(){
            $("#instagram").show();
        }, function(){
            $("#instagram").hide();
    });
    
    $("#instagram").hover(function(){
            $("#instagram").show();
        }, function(){
            $("#instagram").hide();
    });
    
    $("#mostrart").hover(function(){
            $("#twitter").show();
        }, function(){
            $("#twitter").hide();
    });
    
    $("#twitter").hover(function(){
            $("#twitter").show();
        }, function(){
            $("#twitter").hide();
    });*/
    
    
});