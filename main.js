prediction_1="";
prediction_2="";

Webcam.set({
width:350, 
height:350, 
imageformat:'png', 
png_quality:90
});

camera= document.getElementById("camera");

Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="result_image" src="'+ data_uri +'">';
    });
}

console.log("ml5 version: ", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LVeJQV40b/model.json", modelLoaded);

function modelLoaded(){
    console.log("Congratulations: Model Loaded!!")
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The first prediction is"+ prediction_1;  
     speak_data_2="The second prediction is"+ prediction_2;
     var utterthis= new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
     synth.speak(utterthis);
}

function check(){
    img= document.getElementById("result_image");
    classifier.classify(img, gotResult );
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
         document.getElementById("result_emotion_name").innerHTML= results[0].label;
         document.getElementById("result_emotion_name2").innerHTML= results[1].label;
         prediction_1=results[0].label;
         prediction_2=results[1].label;
         speak();

         if(results[0].label=="Happy"){
             document.getElementById("update_emoji").innerHTML="&#128512;";
         }
         if(results[0].label=="Angry"){
            document.getElementById("update_emoji").innerHTML="&#128544;";
        }
        if(results[0].label=="Sad"){
            document.getElementById("update_emoji").innerHTML="&#128543;";
        }
        if(results[0].label=="Confused"){
            document.getElementById("update_emoji").innerHTML="&#129300;";
        }
        if(results[0].label=="Excited"){
            document.getElementById("update_emoji").innerHTML="&#129321;";
        }
        if(results[0].label=="Surprised"){
            document.getElementById("update_emoji").innerHTML="&#128558;";
        }
        if(results[0].label=="Cold"){
            document.getElementById("update_emoji").innerHTML="&#129398;";
        }
        if(prediction_2=="Happy"){
            document.getElementById("update_emoji2").innerHTML="&#128512;";
        }
        if(prediction_2=="Angry"){
           document.getElementById("update_emoji2").innerHTML="&#128544;";
       }
       if(prediction_2=="Sad"){
           document.getElementById("update_emoji2").innerHTML="&#128543;";
       }
       if(prediction_2=="Confused"){
           document.getElementById("update_emoji2").innerHTML="&#129300;";
       }
       if(prediction_2=="Excited"){
           document.getElementById("update_emoji2").innerHTML="&#129321;";
       }
       if(prediction_2=="Surprised"){
           document.getElementById("update_emoji2").innerHTML="&#128558;";
       }
       if(prediction_2=="Cold"){
           document.getElementById("update_emoji2").innerHTML="&#129398;";
       }
    }
}