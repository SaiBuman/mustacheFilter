nose_x = "";
nose_y = "";

clown_img = ""

function preload() {
    clown_img=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on("pose",poses);
}

function modelLoaded() {
    console.log("PoseNet Is Intialized");
}



function takeSnapshot() {
  save('msbuman.png')      
}

 function poses(results) {
    if (results.length>0) {
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
    }
 }

 function draw() {
    image(video,0,0,300,300);
    fill("red");
    stroke("red");
   // circle(nose_x,nose_y,25);
    image(clown_img,nose_x-20,nose_y+10,35,25)
}