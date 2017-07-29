var timer;

//contains array of the images to be displayed on the canvas
var imagesArray = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg",
                   "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg", "images/11.jpg", "images/12.jpg",
                   "images/13.jpg", "images/14.jpg", "images/15.jpg", "images/16.jpg", "images/17.jpg", "images/18.jpg",
                   "images/19.jpg", "images/20.jpg", "images/21.jpg", "images/22.jpg", "images/23.jpg", "images/24.jpg",
                   "images/25.jpg", "images/26.jpg", "images/27.jpg", "images/28.jpg", "images/29.jpg", "images/30.jpg",
                   "images/31.jpg", "images/32.jpg","images/33.jpg", "images/34.jpg", "images/35.jpg", "images/36.jpg",
                   "images/37.jpg", "images/38.jpg","images/39.jpg", "images/40.jpg", "images/41.jpg", "images/42.jpg"
                  ];

//function to display images randomly one after another on the canvas
function imgDisplay(){	
	var obj = document.getElementById("imgCanvas");
	var ctx = obj.getContext("2d");
	var img = new Image();
	var sz = imagesArray.length;
	var id = Math.floor(Math.random() * sz);
	img.src = imagesArray[id];

	img.onload = function(){
		ctx.drawImage(img, 0, 0, obj.width, obj.height);
	}

	timer = setTimeout(imgDisplay, 2000);
}

//function which pauses image display on canvas if there are already images displaying, else resumes image display on the canvas
function pauseDisplay(){	
	var obj = document.getElementById("imgCanvas");
	var ctx = obj.getContext("2d");

	if(timer){
	   clearInterval(timer);
       timer=null;
	}else{
		timer = setTimeout(imgDisplay, 2000);
	}
}

//function which stops image display on the canvas
function stopDisplay(){	
	var obj = document.getElementById("imgCanvas");
	var ctx = obj.getContext("2d");
	ctx.clearRect(0, 0, obj.width, obj.height);

	if(timer){
	   clearInterval(timer);
       timer=null;
	}
}