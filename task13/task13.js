window.onload = function() {
	var input=document.getElementById("aqi-input");
	var btn = document.getElementById("button");
	var dis = document.getElementById("aqi-display");
    function show(){
    	dis.innerHTML=parseFloat(input.value);
    }
    btn.onclick = show();

   input.onkeyup = function (event){
    	if(event.keyCode === 13){
    		show();
    	}
    }
}