status = "";

function preload(){}
   
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380)

}
function draw(){
    image(video,0,0,380,380);
    
}
function start(){
    objectDetector  = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status:detecting objects";
    object_name = document.getElementById("object_name").value;

}
function modelLoaded(){
    console.log("model loaded");
    status = true;
    

}