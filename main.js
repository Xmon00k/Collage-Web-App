var SpeechRecognition = window.webkitSpeechRecognition;
var Content; 
var recognition = new SpeechRecognition();

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

function take_snapshot()
{
    console.log(img_id);

Webcam.snap(function(data_uri) {
    if(img_id=="result1"){
        document.getElementById("result1").innerHTML = '<img id="result1" src="'+data_uri+'"/>';
    }
    if(img_id=="result2"){
        document.getElementById("result2").innerHTML = '<img id="result2" src="'+data_uri+'"/>';
    }
    if(img_id=="result3"){
        document.getElementById("result3").innerHTML = '<img id="result3" src="'+data_uri+'"/>';
    }
});
}

function speak() {

var synth = window.speechSynthesis
Webcam.attach(camera)
img_id = "result1";
take_snapshot();
speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

setTimeout(function()
{
    img_id = "result2";
    take_snapshot();
    speak_data = "Taking your next Selfie in 10 second";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}, 10000);

setTimeout(function()
{
    img_id = "result3";
    take_snapshot();
    speak_data = "Taking your next Selfie in 15 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
}, 15000);
}

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="result1"){
            document.getElementById("result1").innerHTML = '<img id="result1" src="'+data_uri+'"/>';
        }
        if(img_id=="result2"){
            document.getElementById("result2").innerHTML = '<img id="result2" src="'+data_uri+'"/>';
        }
        if(img_id=="result3"){
            document.getElementById("result3").innerHTML = '<img id="result3" src="'+data_uri+'"/>';
        }
    });
}

function start()
{
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 Content = event.results[0][0].transcript.toLowerCase();
   console.log(Content);
   if (Content == "selfie") {
    speak();
    }
}