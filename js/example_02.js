if( typeof jQuery == 'function' ){
	jQuery(function($){
		// 한 페이지에 레이어 팝업을 하나 만 띄우기 위해서
		// HTML 에 하나만 넣어 두는 것
		// 만약 여러개를 띄워야 한다면
		// 띄울 때 마다 HTML 이 추가 되어야 함
		if( $(".popup_wrap2").length === 0 ){
			LayerPopup.initHtml();
		}

		$(".layer_btn_1").on('click', function(e){
			LayerPopup.alert("<h3>이것은 제목이요</h3><p>이것은 내용이니</p>")
			e.preventDefault();
			return false;
		});
	});


}

LayerPopup = {
	testfff:function(n){
		if(n <= 1) {
			return 1;
		} else {
			return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
		}
	},

	phonenumber:function(inputText){
		//010-9608-0219
		const reg_1 = /^0(\d{2})\-(\d{3,4})\-(\d{4})$/;
		// 01096080219
		const reg_2 = /^0(\d{2})(\d{3,4})(\d{4})$/;
		// +82-10-9608-0219
		const reg_3 = /^\+(\d{2})\-(\d{2})\-(\d{3,4})\-(\d{4})$/;
		if(inputText.match(reg_3)) {
			console.log("reg_3");
		} else if(inputText.match(reg_2)) {
			console.log("reg_2");
		} else if(inputText.match(reg_1)) {
			console.log("reg_1");
		} else {
			console.log("-1");
		}
	},

	/**
	 * 레이어 팝업 HTML 만들어서 body 에 넣을꺼임
	 */
	initHtml:function(){
		let _html = "" +
			"<div class=\"popup_wrap2 display_none\">" +
				"<div class=\"popup_active2\"></div>" +
			"</div>";
		$("body").append(_html);
	},
	alert:function(in_html){
		$(".popup_active2").html(in_html);
		$(".popup_wrap2").removeClass('display_none');
	}
};

function recursiveFibonacci(n) {
	if(n <= 1) {
		return 1;
	} else {
		return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
	}
}

