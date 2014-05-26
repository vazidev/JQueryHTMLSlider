
$(document).ready(function () {

    // Global declarations

    var imgLength = $('#slider').children('img').length;
    var first, last, curr, prev, isFirstIteration = true, temp, k, prevIndex = 0, autoIndex = 0;
    first = $('img').first().show();
    last = $('img').last();
    curr = first;
    prev = curr;
    var slideIndex="";
    var addCircleImg = $('#circleBtn');

////////////////////////////////////////////////////////////////////////////////////////
//Load Images to be included in slider
////////////////////////////////////////////////////////////////////////////////////////
				
				//This script will load all the images to be used in the slider:
				function loadImages() {
				var slides =5; // will collect the max number of slides allowed.
    			var text = "";
    			var srcText= "";
    			var slide= "";
    			var S = 1;
    			while (S < slides) {// will need to convert check point to end of file;
    			srcText ="TestImages/slide"+ S +".jpg "
        		text += "<br> " + srcText;
        		slide += "<img id='slide-img' src='" + srcText + "' alt='" + srcText + "'>";
        		S++;
    			}
    			//document.getElementById("slider").innerHTML = text;
    			document.getElementById("slider").innerHTML = slide; //will display the images
				}
loadImages(); //loads the function
				
///////////////////////////////////////////////////////////////////////////////////////////
//spins the icon circle image
//////////////////////////////////////////////////////////////////////////////////////////


    function loadCircleImg() { // load  spinning icon circle image dynamically when the page is landing
        try {
            for (index = 0; index < imgLength; index++) {
                if (index == 0)
                    $(addCircleImg).append('<i class="fa fa-circle imgCircleHover"  ></i>');
                else
                    $(addCircleImg).append('<i class="fa fa-circle imgCircle"  ></i>');
            }
        }
        catch (e) {
            console.log(e.Message);
        }
    }
loadCircleImg(); //loads the function.
    
////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////    
    function moveImg(index) { // Common image move when it's click event or time interval
        try {
            $(addCircleImg).children('i').eq(prevIndex).removeClass('imgCircleHover').addClass('imgCircle'); 
            //i.e run function "addCircleImg", on all "children' of type "img", with a vlaue index equivalent to var "prevIndex", 
            //to remove the "ImgCircleHover" class and replace with "imgCircle"
            $(prev).hide("#slide-img", { direction: "right" }, 2000);
            prev = $('#slider').children('img').eq(index).show("#slide-img", { direction: "left" }, 3000); //runs the slides
            prevIndex = index + 1;
            if (imgLength == autoIndex) { // will update the circles indicating slide
            //alert ("autoIndex: " autoIndex);
                prev = $('#slider').children('img').eq(0).show("#slide-img", { direction: "left" }, 2000); //initiates the loop;
                $(addCircleImg).children('i').eq(prevIndex).removeClass('imgCircleHover').addClass('imgCircle');
                $(addCircleImg).children('i').eq(0).removeClass('imgCircle').addClass('imgCircleHover');
                prevIndex = 0;
                autoIndex = 0;
            }
            else {
                $(addCircleImg).children('i').eq(index + 1).removeClass('imgCircle').addClass('imgCircleHover');
            	}
        	//////////////////////////////////////////////////////////////////////////////////    	
        	//function loadDescription(){
        	//$("#slide-desc"+ i).slideUp(1000).slideDown(1000); //additional code to display Description box;
        	//$(".descriptor").animate({left:'250px', opacity:'0', height:'0px', width:'0px' }); //Hide the box with info
  			//$(".descriptor").animate({right:'250px', opacity:'0.6', height:'250px', width:'200px' }); //display the box with info
		 	//}
		 	
        return index;
        }
        catch (e) {
            console.log(e.Message);
        }
        //$(".descriptor").children("slide-desc" + index).animate({ opacity:'0.6', height:'250px', width:'400px' }); //display the box with info
		
  	return index;      
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////


    $('#circleBtn').on('click', '.circle', function () { //Click event to change the images
        moveImg($(this).index())
        //loadDescription();
    });

    window.setInterval(function() {//Change the image automatically some time interval
    	$('#slider').children('img').eq(index).hide("#slide-img", { direction: "right" }, 2000);
        moveImg(autoIndex++);
        //$(".descriptor").children(".slide-desc" + autoindex++ ).fadeout('fast').slideDown(1000); //additional code to display Description box;
        //loadDescription(autoIndex++);
        {
        $(".descriptor").animate({right:'100px', top:'0', opacity:'0', height:'0px', width:'0px' }); //Hide the box with info
  		$(".descriptor").animate({ opacity:'0.6', height:'250px', width:'400px' }); //display the box with info
		}
    }, 4000);
});       
