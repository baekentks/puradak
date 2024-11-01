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

	var map = ['!1m18!1m12!1m3!1d3176.005336908834!2d127.05139951558179!3d37.247580850087026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b44912ae433d3%3A0xbd034d78e773a3fa!2z6rK96riw64-EIOyImOybkOyLnCDsmIHthrXqtawg7YOc7J6l64-ZIOuNleyYgeuMgOuhnDE0OTnrsojquLggNzUgMuy4tQ!5e0!3m2!1sko!2skr!4v1579242313088!5m2!1sko!2skr', '!1m18!1m12!1m3!1d3175.56799941859!2d127.03164301558228!3d37.25795594949699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b43673a4b43f9%3A0xbc8f5186db7d91ea!2z6rK96riw64-EIOyImOybkOyLnCDtjJTri6zqtawg7J246rOE64-ZIO2aqOybkOuhnDMwOOuyiOq4uCA1OC05!5e0!3m2!1sko!2skr!4v1579243109699!5m2!1sko!2skr', '!1m18!1m12!1m3!1d1587.454765990339!2d126.95321125822444!3d37.27357232934005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b4281e17b9c27%3A0xe6fada894f947d9d!2z6rK96riw64-EIOyImOybkOyLnCDqtozshKDqtawg6riI6rOh64-ZIDE2MQ!5e0!3m2!1sko!2skr!4v1579482238932!5m2!1sko!2skr', '!1m18!1m12!1m3!1d25402.57734009796!2d127.01068427043316!3d37.26378681543092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b43fb28a3ecab%3A0x75934fb42f6f2cb9!2z7ZG4652864utIOyImOybkO2ZlOyEnOygkA!5e0!3m2!1sko!2skr!4v1579243287003!5m2!1sko!2skr', '!1m18!1m12!1m3!1d101610.10851746488!2d126.95815409932239!3d37.263935673225525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f4af3fdde87%3A0x7c94faa8c2009f25!2z7ZG4652864utIOyViOyCsOqzoOyelOygkA!5e0!3m2!1sko!2skr!4v1579243303350!5m2!1sko!2skr', '!1m18!1m12!1m3!1d25382.31781201621!2d126.81648567051174!3d37.32380823744623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6ed954e5d207%3A0xf7ff19c20fc57bfe!2z7ZG4652864ut7JWI7IKw7IKs64-Z7KCQ!5e0!3m2!1sko!2skr!4v1579243315885!5m2!1sko!2skr', '!1m18!1m12!1m3!1d3171.8871645710774!2d126.81196151558387!3d37.34517994453112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f909ddb7549%3A0xf00dec6b0061a458!2z7ZG4652864ut7JWI7IKw7ISg67aA7KCQ!5e0!3m2!1sko!2skr!4v1579243357293!5m2!1sko!2skr', '!1m18!1m12!1m3!1d202792.56334059683!2d126.6884086686345!3d37.42212958013384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f5b3b1ba0c9%3A0x12e6533754c60b1a!2z7ZG4652864ut!5e0!3m2!1sko!2skr!4v1579243343644!5m2!1sko!2skr', '!1m18!1m12!1m3!1d5358.417755723652!2d127.2528064837229!3d37.006593256953806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b34f8d2258787%3A0xc462e4677dc449f6!2z7ZG4652864ut7JWI7ISx7JWE7JaR7KCQ!5e0!3m2!1sko!2skr!4v1579243369477!5m2!1sko!2skr', '!1m18!1m12!1m3!1d101503.75563190466!2d126.98430140525775!3d37.342689483766755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5fa34911ebdd%3A0xd50bd4d79cc2b6b2!2z7ZG4652864utIOyViOyWke2Piey0jOygkA!5e0!3m2!1sko!2skr!4v1579243384095!5m2!1sko!2skr'];
	var tr = $(".sec_nots table tr");
	tr.on('click', function(){
		var mapPos = $(".sec_map iframe").offset().top;
		var headerTop = $('header').outerHeight()+20;

		console.log(mapPos);
		var i = $(this).index();
		$(".sec_map iframe").attr('src', 'https://www.google.com/maps/embed?pb=' +map[i]);

		$("html, body").animate({scrollTop: mapPos-headerTop}, 200);
	});


	/***** 공통 함수(end) *****/


	/***** 디바이스별 분기 *****/
	// 데스크탑
	if(!isMobile){


	} //if(!isMobile)

	else {

		// Tablet
		if(screen.width >= 768){

			

		}

		// Mobile
		else {

			

		}
		
	}
	
});
