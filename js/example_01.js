/* js */

// 이걸 쓰는 이유는
// 프로토 타입 prototype 이라는 js 기본 문법에 $ 를 사용 해서 jquery 와 섞임
if( typeof jQuery == 'function' ){
	jQuery(function($){
		// todo  라디오 1 선택 버튼 클릭시 라디오 1 선택
		
		// 1. 라디오 버튼 찾기
		let set_radio_1 = $(".set_radio_1");

		// 2. 라디오 버튼을 클릭시 이벤트
		set_radio_1.on('click', function(){
			// 3. 라디오 1 input 찾기
			// let input_radio_1 = $(".input_radio_1");
			// 4. 라디오 1 input 선택 attr, prop
			let testtt = {checked:true};
			$(".input_radio_1").attr(testtt).prop(testtt);
		});
		
		
		// 1번 2번 선택에 따라 전체 체크 박스가 활성 비활성
		
		// todo
		// 1번 또는 2번이 바뀔대 확인을 하자
		// 1번 2번 모두가 체크 되어 있으면 전체에 체크를 하자
		// 1번 또는 2번 하나 라도 체크 안되어 있으면 전체에 체크 해제 하자

		$("input.check").on('change', function(){
			let check_count = $("input.check").length; // 체크박스 카운트
			let checked_count = $("input.check:checked").length; // 체크 된 것 카운트
			if( check_count === checked_count ){
				// 전체 체크
				$(".check_all").attr({checked:true}).prop({checked:true});
			} else {
				// 아니겠지
				$(".check_all").attr({checked:false}).prop({checked:false});
			}
		});


		// todo 로딩 화면
		// 1. 로딩 이미지 또는 디자인을 보여주는 기능 1개
		// 2. 로딩 이미지 닫는 기능 1개
		// ajax 전 후에 해당 기능 실행
		// Loading.show();
		Loading.show('h1');
		$.ajax({
			url:'https://www.eleninjaytech.com/items/5',
			dataType:'json',
			type:'get',
			data:{
				'q':'테스트 전송'
			},
			success:function(result){
				// 성공하면 실행
				console.log(result);
			},
			complete:function(){
				Loading.hide();
				// 그냥 끝나면 실행
				// Loading.hide();
			}
		});

		// 무조건 ajax 비동기 시작시에 표시, 숨김 하려면
		// ajax start stop 활용

		// 업그레이드 버전은 원하는 영역에서만 동작 하는 로딩 구현
	});
}

// 1 번째 단계는 원하는 구역에 로딩바 만들기

// 업그레이드 2번째 단계는 한 페이지에 여러개 사용

Loading = {
	loadingHtml:function(){
		return "<div class=\"loading display_none\">로딩 중.....</div>";
	},

	// 로딩 이미지 열기
	show:function(targetSelector){
		// 로딩을 보여 줄곳을 선택
		let el_target = $(targetSelector);
		// 로딩 보여줄 곳 안에 로딩 html 넣기
		el_target.append(Loading.loadingHtml());

		// 부모의 position 을 찾기
		let target_pos = el_target.css('position');
		// 부모의 포지션이 기본 값이면
		if( target_pos === 'static' ){
			// 부모를 relative 로 변경 해서 팝업이 잘 나오도록 함
			el_target.css({position:'relative'});
		}

		// display_none 클래스를 삭제 해서 로딩 노출
		$(".loading").removeClass('display_none');
	},

	// 로딩 이미지 닫기
	hide:function(){
		let load = $(".loading");
		// display_none 클래스를 추가해서 안보여줌
		load.addClass('display_none');
		// 삭제
		load.remove();
	}
}