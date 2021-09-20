function setup()
{
    canvas = createCanvas(200 , 200);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ec6Z38as-/model.json' , modelLoaded);
}

function modelLoaded()
{
    console.log("model loaded");
}

function draw()
{
    image(video , 0 , 0 , 200 , 200);
    classifier.classify(video , gotResult);
}

function gotResult(error , results)
{
   if(error)
   {
       console.error(error);
   }

   else
   {
      console.log(results);
      document.getElementById("object_name").innerHTML = results[0].label;
      document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(3);
   }
}


