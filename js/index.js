// JavaScript Document
$(document).ready(function(){

	$("a[href = '#']").click(function(e){
		e.preventDefault();
		return false;
	});

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|playbook|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		isMobile = true;
	}

	/***** 공통 함수(start) *****/	
	
	// visual_Slides(class 형태) - start
	function visual_Slides(_targetWrap, _slides, _has_pause, _type){
	// _targetWrap: 공통 함수를 사용할 때 부모의 이름을 지정해서 구분해주는 parameter.
	// _slides: 슬라이드에 있는 공통 클래스.
	// _has_pause: pause/play 하기 위해 t/f 를 구분해주는 parameter.
	// _type: 슬라이드 이동 방식 설정.
	
		var $wrap = _targetWrap;
		var $slides = $($wrap +" "+_slides);
		var $pn_btns = $($wrap +" .pagination > button");
		var $btn_prev = $($wrap +" button.prev");
		var $btn_next = $($wrap +" button.next");
		var has_pause = _has_pause;
		var slide_type = _type;
		var cnt = 0;  // cur가 몇 번째인지 확인.
		var si_01 = 0;
		if(slide_type == "fade"){
			$slides.removeClass('cur prev next').css("transition", "none").css("opacity", "1").fadeOut(0);
			$slides.first().css("opacity", "1").fadeIn(0);
		}

		$btn_prev.on("click", function(){
			count_minus();
		});
		
		$btn_next.on("click", function(){
			count_plus();
		});
		
		// swipe
		var startX = 0;
		var endX = 0;
		var sensitive = 60;
		$($wrap).on('touchstart mousedown', function(e){ 
			if(!isMobile) return;
			//e.preventDefault();
			if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touched' || e.type == 'touchcancel'){
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				// 모바일 이벤트 객체 실행하기 위해 브라우저마다 다른 이벤트 객체를 작성해야 함.
				// [0] : 손가락 1개만 인정하겠다는 것.
				startX = touch.pageX;
			}
			else if(e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave'){
				startX = e.pageX;
			}
		});
		$($wrap).on('touchend mouseup', function(e){ 
			if(!isMobile) return;
			//e.preventDefault();
			if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touched' || e.type == 'touchcancel'){
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				endX = touch.pageX;
			}
			else if(e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave'){
				endX = e.pageX;
			}

			if(startX + sensitive < endX){
			console.log("swipe(right)");
			count_minus();
			}
			else if(startX > endX + sensitive ){
			console.log("swipe(left)");
			count_plus();
			}
		});

		
		

		$pn_btns.on("click", function(e){
			e.preventDefault();
			var cur_num =$(this).index();
			// pause 버튼이 있고 마지막에 있을 때 if문 실행.
			if(has_pause && cur_num == $pn_btns.length - 1){
				console.log('has_pause && cur_num == $pn_btns.length - 1');
				play_pause();
				return false;
			}
			cnt = cur_num;
			(slide_type == "slide") ? slide_img(cnt, "none") : fade_img(cnt);
			// 첫번째에서 세번째로 갈 때 슬라이드가 겹치는 모습이 보여서 transition 제거.
			pagination_change(cnt);
		
		});

		function play_pause(){
			var target = $pn_btns.last();
			var src = target.css("background-image");
			if(si_01 != 0){
				stop_si();
				src = src.replace("_F.png", "_T.png");
				target.css("background-image", src);
				// 적용할려면 css에서 background-image로 작성할 것. or 클래스로 제어해도 됨.
			}
			else if(si_01 = 0){
				start_si();
				src = src.replace("_T.png", "_F.png");
				target.css("background-image", src);

			}
		
		}
		
		function count_plus(){
			cnt = cnt == $slides.length - 1 ? 0 : cnt + 1;
			// cnt가 pause 버튼이면 0으로 가고, 아니면 +1.
			(slide_type == "slide") ? slide_img(cnt, "all 0.4s") : fade_img(cnt);
			// transition
			pagination_change(cnt);
			//pagination에 active 넣어야 해서!
		}
		function count_minus(){
			cnt = cnt == $slides.length - 1 ? 0 : cnt - 1;
			(slide_type == "slide") ? slide_img(cnt, "all 0.4s") : fade_img(cnt);
			pagination_change(cnt);
		}

		function fade_img(num){
			stop_si();
			$slides.fadeOut(1000);
			$slides.eq(num).fadeIn(1000, function(){
				start_si();
			});
		
		}

		function slide_img(num, transition_val){ 
			stop_si();
			var next_num = cnt == $slides.length - 1 ? 0 : cnt + 1;
			var prev_num = cnt == 0 ? $slides.length - 1 : cnt - 1; //질문
			$slides.removeClass('cur prev next').css("transition", "none");
			$('.info').removeClass('ani_on');
			// 새로 넣기 전에 다 제거해버림.
			if($slides.length <= 2){
				$slides.eq(num).addClass("cur").css("transition", "all 0.4s");
				if(cnt == 0){
				$slides.eq(next_num).addClass("next").css("transition", "all 0.4s");
				}
				else if(cnt == 1){
				$slides.eq(prev_num).addClass("prev").css("transition", "all 0.4s");
				}
			}
			else if($slides.length >= 3){
				$slides.eq(num).addClass("cur").css("transition", transition_val);
				// transition_val로 transition이 있고 없고를 조절.
				$slides.eq(num).children('.info').addClass('ani_on');
				$slides.eq(prev_num).addClass("prev").css("transition", "all 0.4s");
				$slides.eq(next_num).addClass("next").css("transition", "all 0.4s");
			}
			start_si();
			
		}
		function pagination_change(num){
			$pn_btns.removeClass("active");
			$pn_btns.eq(num).addClass("active");
		}

		function start_si(){
			if(si_01 != 0){
				clearInterval(si_01)
			}
			si_01 = setInterval(count_plus, 3000);
		}
		function stop_si(){
			if(si_01 != 0){
				clearInterval(si_01)
			}
			si_01 = 0;
		}
		start_si();

	}
	// visual_Slides(class 형태) - end

	// fadeIn_both_side(response scroll, fadeIn, translateX) - start
	function fadeIn_both_side(){
		var $tar_elms = $('.fadeIn_idx');
		var start_X = 250;
		
		// 시작하자마자 200px 양쪽 사이드로 미리 빼놓기.
		var load_act = (function(){
			$tar_elms.each(function(){
				if($(this).hasClass('minus')){
					$(this).css("transform", 'translateX(' + -(start_X) +'px)').css("transition", "transform 0.6s");
				}
				else{
					$(this).css("transform", 'translateX(' + start_X +'px)').css("transition", "transform 0.6s");
				}
			
				$(this).css("opacity", "0");
			});
		})();
	
		$(window).on("scroll",function(){
			$tar_elms.each(function(){
				var scrollTop = isMobile == true ? $(window).scrollTop() + $(window).outerHeight() + 100 : $(window).scrollTop() + $(window).outerHeight() - 100; 
				// 데스크탑과 모바일에 스크롤에 맞춰서 시작 지점 다르게 설정.
				var offset = $(this).offset().top;
				var translate = start_X - (scrollTop - offset);
				var opa = (scrollTop - offset) / 150;
				if(translate <= start_X && translate >= 0){
					if($(this).hasClass('minus')){
						$(this).css('transform', 'translateX(' + -(translate) +'px)');
					}
					else{
						$(this).css('transform', 'translateX(' + translate +'px)');
					}
				}
				else if(translate >= start_X){
					if($(this).hasClass('minus')){
						$(this).css("transform", 'translateX(' + -(start_X) +'px)');
					}
					else{
						$(this).css("transform", 'translateX(' + start_X +'px)');
					}
				}
				else if(translate <= 0 ){
				// 제자리에 왔을 때
					$(this).css("transform", 'translateX(0px)');
				}
				$(this).css("opacity", "opa");
				if(opa > 1){
					$(this).css("opacity", 1);
				}
				else if(opa < 0){
					$(this).css("opacity", 0);
				}
			});
		});
	}
	// fadeIn_both_side(response scroll, fadeIn, translateX) - end

	
	/***** 공통 함수(end) *****/


	/***** 디바이스별 분기 *****/
	// 데스크탑
	if(!isMobile){
		

	}

	else {

		// Tablet
		if(screen.width >= 768){

			

		}

		// Mobile
		else {

			

		}
		
	}

	var slide_01 = visual_Slides(".sec_visual", ".slides", false, "slide");
	var fadeIn_both_side_01 = fadeIn_both_side();

});
