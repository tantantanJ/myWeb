;$(function(){
	var sidebar=$('#sidebar'),
	    mask=$('#mask'),
	    triggerSidebar=$('#triggerSidebar'),
	    backbutton=$('#back-to-top');
	
	function showSidebar(){
		mask.fadeIn();
		sidebar.css('right',0);
	}
	function hideSidebar(){
		mask.fadeOut();
		sidebar.css('right',-sidebar.width());
	}
	
	triggerSidebar.on('click',showSidebar);
	mask.on('click',hideSidebar);
	
	backbutton.on('click',function(){
		 $("html,body").animate({scrollTop:0},800);
	})
	
	$(window).on('scroll',function(){
		if($(window).scrollTop()>$(window).height()){
			backbutton.fadeIn();
		    }else{backbutton.fadeOut();}
    })
    
    $(window).trigger('scroll')
})

