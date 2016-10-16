$(function(){
	$('#head_included').load("head.html");
	
	$(function(){
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
		
		//判断scroll向上还是向下，来触发head隐藏还是显示
		var p=0,t=0;  
		var nav=$('nav');
		$(window).scroll(function(e){  
			p = $(this).scrollTop();  
			if(t<p){//下滚  
				nav.css('top',-nav.height());
			}  
			else{//上滚  
				nav.css('top',0);
			}  
			setTimeout(function(){t = p;},0);         
		});  
	});	
});


