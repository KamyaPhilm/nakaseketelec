// this is for hiding and showing less or more text for the top stories in the home page.
function showText() {
    document.getElementById("show").style.display = "none";
    document.getElementById("ebook").style.display = "block";
}
//this is for hiding the text to less 
function hid() {
	document.getElementById("show").style.display = "inline-block";
	document.getElementById("ebook").style.display = "none";
}

		function readText() {
	    document.getElementById("read").style.display = "none";
	    document.getElementById("farmer").style.display = "block";
	}
	//this is for hiding the text to less
	function hides() {
		document.getElementById("read").style.display = "inline-block";
		document.getElementById("farmer").style.display = "none";
	}

			function seeText() {
		    document.getElementById("view").style.display = "none";
		    document.getElementById("romans").style.display = "block";
		}
		//this is for hiding the text to less
		function hide() {
			document.getElementById("view").style.display = "inline-block";
			document.getElementById("romans").style.display = "none";
		}


			//this is for the time in the radio pragram time table on the radio page.
			function showTime() {
		    	var time = new Date();
		        var hrs = time.getHours();
		        var mins = time.getMinutes();
		        var secs = time.getSeconds();

		        if (secs < 10) { secs = "0" + secs;}
		        if (mins < 10) { mins = "0" + mins;}
		        if (hrs < 10) { hrs = "0" + hrs;}

		        document.getElementById("time").innerHTML = hrs + " : " + mins + " : " + secs;
		    }
		    setInterval(showTime, 1000);


		    	//this is the message alert when you click on the email icon contact under the footer.
		    	function eMail() {
					alert("We are sorry please!\nThis platform is not available at this time\nWe recommnd you to try other platforms\nThank you!");
		    	}

		    		//this is for the computer page when the "click me button" is clicked
		    		function computer () {
		    			alert("This page is currently un available because it's under constrution.\nWe are sorry please but it will be soon open.\nClick OK and continue with other pages by clicking the tabs on the navigation bar\nThank you!");
		    		}
		    		
		    	//this is the Home Page slide show
		    	var homeShow = [
		    		"images/home-poster.jpeg",
		    		"images/gal-telecfrontv.jpeg",
		    		"images/gal-radnakasekefm.jpeg",
		    		"images/home-van.jpeg",
		    		"images/home-comp.jpeg",
		    		"images/gal-tower.jpeg"
		    	];

		    var num = 0;
		    function next() {
		    	var show = document.getElementById("slide");
		    	num++;
		    if (num > homeShow.length) {
		    	num = 0;
		    }
		    show.src = homeShow[num];
		    }

	   function prev() {
	    	var show = document.getElementById("slide");
	    	num--;
	    if (num < 0) {
	    	num = homeShow.length-1;
	    }
	    show.src = homeShow[num];
	    } 

//this is a radio slide show
var slideIndex = 1;
showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

		// Thumbnail image controls
		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

			function showSlides(n) {
			  var i;
			  var slides = document.getElementsByClassName("radiopics");
			  var dots = document.getElementsByClassName("current");
			  if (n > slides.length) {slideIndex = 1} 
			  if (n < 1) {slideIndex = slides.length}
			  for (i = 0; i < slides.length; i++) {
			      slides[i].style.display = "none"; 
			  }
			  for (i = 0; i < dots.length; i++) {
			      dots[i].className = dots[i].className.replace(" active", "");
			  }
			  slides[slideIndex-1].style.display = "block"; 
			  dots[slideIndex-1].className += " active";
			}
