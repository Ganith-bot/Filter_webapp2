nose_x = 0;
nose_y = 0;
eye_left_y = 0;
eye_right_y = 0;
eye_left_x = 0;
eye_right_x = 0;


function preload(){
image101 = loadImage("https://i.postimg.cc/Y2NTkJt9/erv.png")
}

function setup(){
canvas = createCanvas(275, 275);
canvas.center();
video = createCapture(VIDEO);
video.size(275, 275);
video.hide();

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses)

setTimeout(function(){
    draw(); },50000);
}

function draw(){
random_color_red = random(0,255); 
random_color_green = random(0,255);
random_color_blue = random(0,255);
image(video, 0, 0, 275, 275);
image(image101, nose_x - 58, nose_y - 15, 192, 122);
fill(random_color_red,random_color_green,random_color_blue);
stroke(random_color_red,random_color_green,random_color_blue);
rect(eye_left_x -58, eye_left_y -50, 90, 20);
fill(random_color_red,random_color_green,random_color_blue);
stroke(random_color_red,random_color_green,random_color_blue);
square(eye_right_x -13, eye_right_y -100, 60, 60);

}

function takeimg1(){
    save('myImage.png');
}

function modelLoaded(){
    console.log("Posenet has been intialised");
}   

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("rightEye x = " + results[0].pose.rightEye.x);
        console.log("rightEye y = " + results[0].pose.rightEye.y);
        console.log("leftEye y = " + results[0].pose.leftEye.y);
        console.log("leftEye x = " + results[0].pose.leftEye.x);
        eye_left_x = results[0].pose.leftEye.x;
        eye_left_y = results[0].pose.leftEye.y;
        eye_right_x = results[0].pose.rightEye.x;
        eye_right_y = results[0].pose.rightEye.y;
    }
}