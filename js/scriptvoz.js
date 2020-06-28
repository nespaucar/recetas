let rec;
function iniciarTextToVoice() {    
    if (!("webkitSpeechRecognition" in window)) {
    	alert("disculpas, no puedes usar la API");
    } else {
        rec = new webkitSpeechRecognition();
        rec.lang = "es-AR";
        rec.continuous = true;
        rec.interim = true;
        rec.addEventListener("result",iniciar);
        rec.start();
    }
}

function iniciar(event){
	for (let i = event.resultIndex; i < event.results.length; i++){
        document.getElementById('texto').innerHTML = event.results[i][0].transcript;
	}
}

$(document).on('keyup', '#texto2', function(event) {
    event.preventDefault();
    var a = $(this).val();
    if(a == "1") {
        iniciarTextToVoice();
    } else {
        rec.stop();
    }
});
