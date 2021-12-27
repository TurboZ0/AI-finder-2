 model_status= "";
 function preload() {}
 
 function setup() {
     canvas=createCanvas(600,500);
     canvas.position(650, 450);

     video=createCapture(VIDEO);
     video.hide();
 }
 
 function start() {
    objectetector=ml5.objectDetector("cocossd", chocolate);
    document.getElementById("status").innerHTML="Status: Fixed! And Searching.."
    }

 function chocolate() {
     console.log("Chocolate Delivery!");
     model_status= true;
 }   

 function draw() {
      image(video, 0, 0, 600, 500);
 }