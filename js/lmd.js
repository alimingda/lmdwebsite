$(function(){
    $(".nav_s").hide();
    $('.nb_background').click(function(){
    $('.nav_s').stop(true,false).slideToggle();
    return false;
    });



    function lunbo(father,time){
	    var nextnum=0;
	    var currentnum=0;
	    var flag=true;
	    $(father+">.lunbo>a").hide().eq(0).show();
	    function move(type){
	    	type=type||"right";
	    	if(type=="right"){
		       	nextnum++;
		       	if(nextnum>=$(father+">.lunbo>a").length){
		       	   	nextnum=0;
		        }	    		
	    	}else if(type=="left"){
	    		nextnum--;
	    		if (nextnum<=-1) {
	    			nextnum=$(father+">.lunbo>a").length-1;
	    		}
	    	}
		    $(father+">.lunbo>a").fadeOut().eq(nextnum).fadeIn();
	    }
	    var t=setInterval(move,time);  
	    $(father+">.left_btn").click(function(){
	    	move("left");
	    }) 
	    $(father+">.right_btn").click(function(){
	    	move("right");
	    }) 
        $(father).mouseover(function(){
    		clearInterval(t)
    	})

    	$(father).mouseout(function(){
    		t =setInterval(move,time)
    	})	
    }   
    lunbo(".show_right",6000);
    lunbo(".about_left",4000);



    $(".cc_main>.cc_con").hide();
    $(".cc_main>.cc_title").click(function(){
    	var index=$(this).index(".cc_main>.cc_title");
    	$(".cc_main>.cc_con").eq(index).stop(true,false).slideToggle();
    	return false;
    })








    








})