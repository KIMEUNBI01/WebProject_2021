function loginCheck(){

	let id = document.getElementById("id").value
	let password = document.getElementById("password").value
	let check = true;
  
	// 아이디확인
	if(id===""){
	  document.getElementById("idError").innerHTML="아이디를 입력해 주세요."
	  check = false
	}else{
	  document.getElementById("idError").innerHTML=""
	}

	// 비밀번호 확인
	if(password===""){
	  document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
	  check = false
	}else{
	  //document.getElementById("passwordError").innerHTML=""
	}

	// 입력 확인
	if(check){
	  document.getElementById("idError").innerHTML=""
	  document.getElementById("passwordError").innerHTML=""
  
	  
	  //비동기 처리이벤트
	  setTimeout(function() {
		if(confirm("로그인이 완료되었습니다.")) document.location = '../Community/community.html';
		
	},0);
	}
  }
  