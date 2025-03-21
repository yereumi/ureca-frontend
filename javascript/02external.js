var functionVar = document.querySelector('#first');
alert(functionVar);
functionVar.onclick = function(){
    functionVar.style.color = "red";
}

function testFunction() {
    alert("testFunction 실행");
}
