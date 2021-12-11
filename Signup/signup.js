

// 가입부분 체크

function signUpCheck(){

  let email = document.getElementById("email").value
  let name = document.getElementById("name").value
  let nick = document.getElementById("nick").value
  let id = document.getElementById("id").value
  let password = document.getElementById("password").value
  let passwordCheck = document.getElementById("passwordCheck").value
  let gender = document.getElementById("gender").value
  var birth = document.querySelector('#birth');

  let check = true;

  // 이메일확인
  if(email.includes('@')){
    let emailId = email.split('@')[0]
    let emailServer = email.split('@')[1]
    if(emailId === "" || emailServer === ""){
      document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
      check = false
    }
    else{
      document.getElementById("emailError").innerHTML=""
    }
  }else{
    document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
    check = false
  }

  // 닉네임확인
  if(nick===""){
    document.getElementById("nickError").innerHTML="닉네임을 입력해주세요."
    check = false
  }else{
    document.getElementById("nickError").innerHTML=""
  }

  // 아이디확인
  if(id===""){
    document.getElementById("idError").innerHTML="아이디를 입력해주세요."
    check = false
  }else{
    document.getElementById("idError").innerHTML=""
  }


  // 이름확인
  if(name===""){
    document.getElementById("nameError").innerHTML="이름을 입력해주세요."
    check = false
  }else{
    document.getElementById("nameError").innerHTML=""
  }


  // 비밀번호 확인
  if(password !== passwordCheck){
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML="비밀번호가 동일하지 않습니다."
    check = false
  }else{
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
  }

  if(password===""){
    document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요."
    check = false
  }else{
    //document.getElementById("passwordError").innerHTML=""
  }
  if(passwordCheck===""){
    document.getElementById("passwordCheckError").innerHTML="비밀번호를 다시 입력해주세요."
    check = false
  }else{
    //document.getElementById("passwordCheckError").innerHTML=""
  }

  // 생년월일선택 확인
  if (birth.value == '') {
    document.getElementById("birthError").innerHTML="생년월일을 선택해주세요."
    birth.focus();
  }else{
    document.getElementById("birthError").innerHTML=""
  }



  // 성별선택 확인
  if(gender === "성별을 선택해주세요."){
    document.getElementById("genderError").innerHTML="성별을 선택해주세요."
    check = false
  }else{
    document.getElementById("genderError").innerHTML=""
  }

  
  // 입력 확인
  if(check){
    document.getElementById("nickError").innerHTML=""
    document.getElementById("emailError").innerHTML=""
    document.getElementById("idError").innerHTML=""
    document.getElementById("nameError").innerHTML=""
    document.getElementById("passwordError").innerHTML=""
    document.getElementById("passwordCheckError").innerHTML=""
    document.getElementById("genderError").innerHTML=""
    document.getElementById("birthError").innerHTML=""

    
    //비동기 처리이벤트
    setTimeout(function() {
      if(confirm("가입이 완료되었습니다. \n Go To The World에 오신 여러분을 환영합니다. \n 많은 이용 부탁드립니다.")) document.location = '../Community/community.html';
  },0);
  }
}
