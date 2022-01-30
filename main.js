Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:100
})

camera=document.getElementById("camera")
Webcam.attach("camera")
function takeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+ data_uri +"'>"
    });
}

console.log("ml5.version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/PSRDOoj9h/model.json",modelLoaded)

function modelLoaded(){
    console.log("modelLoaded")
}

function check(){
    img=document.getElementById("capture_image")
    classifier.classify(img,gotResult)
    console.log("is it working till here?")
}

function gotResult(result){
   
        console.log(result)
        document.getElementById("object_name").innerHTML=result[0].label;
        document.getElementById("object_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
