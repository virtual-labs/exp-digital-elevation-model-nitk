
var e;
let mapChoosen=0;//0: Mangalore, 1: Bangalore
let colorRampSelected = 0; //0: 1st color ramp, 1: 2nd color ramp, 2: 3rd color ramp

function navNext()
{
	for(temp=0;temp<=0;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}
function magic(){
    if(simsubscreennum==1){
		// document.getElementById("choose1").disabled = false;
		var acc = document.getElementsByClassName("accordion");
		// var panel=document.getElementById("nextElementSibling");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // this.classList.toggle("active")
    let panel=this.nextElementSibling;
	// console.log(panel)
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
}
}

// choose button functions
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementById("myClose");

function map1(){
	document.getElementById("myModal").style.visibility="visible";
	document.getElementById("mm1").style.visibility="hidden";
	document.getElementById("bm1").style.visibility="hidden";
}

function mclose(){
	document.getElementById("myModal").style.visibility="hidden";
}

function chooseMap1(){
	document.getElementById("myModal").style.visibility="hidden";
	document.getElementById("mapSelection").disabled = true;
	document.getElementById("mm1").style.visibility="visible";
	document.getElementById("mangalore").style.visibility="visible"; 
	document.getElementById("bm1").style.visibility="hidden";
	document.getElementById("colorSelection").disabled = false;
	mapChoosen=0;
	
}
function chooseMap2(){
    document.getElementById("myModal").style.visibility="hidden";
    document.getElementById("bm1").style.visibility="visible";
	document.getElementById("bangalore").style.visibility="visible"; 
    document.getElementById("mm1").style.visibility="hidden";
	document.getElementById("mapSelection").disabled = true;
	document.getElementById("colorSelection").disabled = false;
	mapChoosen=1;
}

function mangaloreMap1(){
		document.getElementById('mm1').style.visibility="hidden";
		document.getElementById('bm1').style.visibility="hidden";
		document.getElementById('Mangmap1').style.visibility="visible";
		document.getElementById('Mangmap2').style.visibility="hidden";
		document.getElementById('Mangmap3').style.visibility="hidden";
		colorRampSelected=0;
		if(mapChoosen==0){
			document.getElementById('Mangmap1').src="images/Mangalore_streched_map1.png";
			// document.getElementById('Mangmap1').src="images/Mangalore_streched_map2.png";
			// document.getElementById('Mangmap1').src="images/Mangalore_streched_map3.png";
		}
		else if(mapChoosen==1){
			document.getElementById('Mangmap1').src="images/Bangalore_streched_map1.png";
			// document.getElementById('Mangmap1').src="images/Bangalore_streched_map2.png";
			// document.getElementById('Mangmap1').src="images/Bangalore_streched_map3.png";
		}
		
}

function mangaloreMap2(){
	document.getElementById('mm1').style.visibility="hidden";
		document.getElementById('bm1').style.visibility="hidden";
		document.getElementById('Mangmap1').style.visibility="visible";
		document.getElementById('Mangmap2').style.visibility="hidden";
		document.getElementById('Mangmap3').style.visibility="hidden";
	colorRampSelected=1;
	if(mapChoosen==0){
		document.getElementById('Mangmap1').src="images/Mangalore_streched_map2.png";
	// document.getElementById('Mangmap1').src="images/Mangalore_streched_map2.png";
		// document.getElementById('Mangmap1').src="images/Mangalore_streched_map3.png";
	}
	else if(mapChoosen==1){
		document.getElementById('Mangmap1').src="images/Bangalore_streched_map2.png";
		// document.getElementById('Mangmap1').src="images/Bangalore_streched_map2.png";
		// document.getElementById('Mangmap1').src="images/Bangalore_streched_map3.png";
	}
	
}
function mangaloreMap3(){
	document.getElementById('mm1').style.visibility="hidden";
		document.getElementById('bm1').style.visibility="hidden";
		document.getElementById('Mangmap1').style.visibility="visible";
		document.getElementById('Mangmap2').style.visibility="hidden";
		document.getElementById('Mangmap3').style.visibility="hidden";
	colorRampSelected=2;
	if(mapChoosen==0){
		document.getElementById('Mangmap1').src="images/Mangalore_streched_map3.png";
		// document.getElementById('Mangmap1').src="images/Mangalore_streched_map2.png";
		// document.getElementById('Mangmap1').src="images/Mangalore_streched_map3.png";
	}
	else if(mapChoosen==1){
		document.getElementById('Mangmap1').src="images/Bangalore_streched_map3.png";
		// document.getElementById('Mangmap1').src="images/Bangalore_streched_map2.png";
		// document.getElementById('Mangmap1').src="images/Bangalore_streched_map3.png";
	}
	
  }

function grid1_map(){
	// document.getElementById("colorSelection").disabled = true;
	document.getElementById("mangalore_Streched1").style.visibility="hidden";
	document.getElementById('mangalore_Classified1').style.visibility="hidden";
	// document.getElementById("Mgrid1").disabled = true;
	// document.getElementById("Mgrid2").disabled = true;
	// document.getElementById("Mgrid3").disabled = true;
	document.getElementById("symbology").disabled = false;
	// document.getElementsByClassName("accordion").panel.style.display = "none";
	// document.getElementById('accordion').style.visibility="hidden";
	// document.getElementById('panel').panel.style.display = "none";
	document.getElementById('Mgrid1').style.visibility="hidden";
	document.getElementById('Mgrid2').style.visibility="hidden";
	document.getElementById('Mgrid3').style.visibility="hidden";
	// jj vg


	// colorRampSelected=0;
 }

function grid2_map(){
	document.getElementById("mangalore_Streched1").style.visibility="hidden";
	document.getElementById('mangalore_Classified1').style.visibility="hidden";
	document.getElementById("Mgrid2").disabled = true;
		// document.getElementById("colorSelection").disabled = true;
		document.getElementById("symbology").disabled = false;
		document.getElementById('Mgrid1').style.visibility="hidden";
		document.getElementById('Mgrid2').style.visibility="hidden";
		document.getElementById('Mgrid3').style.visibility="hidden";
	// colorRampSelected=1;
}

function grid3_map(){
	document.getElementById("Mgrid3").disabled = true;
		// document.getElementById("colorSelection").disabled = true;
		document.getElementById("symbology").disabled = false;
		document.getElementById('Mgrid1').style.visibility="hidden";
		document.getElementById('Mgrid2').style.visibility="hidden";
		document.getElementById('Mgrid3').style.visibility="hidden";
		// colorRampSelected=2;
}

function ShowPicture(id,show, img) {
	// document.getElementById("mangalore_dem_elevation").style.visibility="visible";
  if (show=="1"){
	
    document.getElementById(id).style.visibility = "visible"
    document.getElementById(id).childNodes[1].src = img;
  }
  
  else if (show=="0"){
    document.getElementById(id).style.visibility = "hidden";
	
  }
}
function ShowPicture1(){
	document.getElementById('slope1').style.visibility="visible";
}
function ShowPicture1a(){
	document.getElementById('slope1').style.visibility="hidden";
}

function ShowPicture2(){
	document.getElementById('slope2').style.visibility="visible";
}
function ShowPicture2a(){
	document.getElementById('slope2').style.visibility="hidden";
}

function ShowPicture3(){
	document.getElementById('slope3').style.visibility="visible";
}
function ShowPicture3a(){
	document.getElementById('slope3').style.visibility="hidden";
}
// function ShowPicture1(id,show, img) {
// 	// document.getElementById("mangalore_dem_elevation").style.visibility="visible";
//   if (show=="2"){
	
//     document.getElementById(id).style.visibility = "visible"
//     document.getElementById(id).childNodes[1].src = img;
//   }
  
//   else if (show==""){
//     document.getElementById(id).style.visibility = "hidden";
	
//   }
// }

function symbology_classified(){
	document.getElementById("steched").disabled = false;
		document.getElementById("classified").disabled = false;
	symbologyClassified=0
	// declare one variable equal to something
	console.log(colorRampSelected);
	document.getElementById('Mangmap1').style.visibility="hidden";
	if(colorRampSelected==0)
		{
			
		if(mapChoosen==0){
			document.getElementById('Mangmap1').style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			}
		else if(mapChoosen==1){
			document.getElementById('Bangmap1').style.visibility="hidden";
			document.getElementById("bangalore_Streched1").style.visibility="hidden";
			document.getElementById("bangalore_Classified1").style.visibility="visible";
				// console.log("hi");
			}
		}
	else if(colorRampSelected==1)
		{
		// console.log("hi");
		
		document.getElementById('Mangmap2').style.visibility="hidden";
		symbologyClassified=1
		if(mapChoosen==0)
		{
			// console.log("hi")
			document.getElementById('Mangmap2').style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById("bangalore_Streched2").style.visibility="hidden";
			document.getElementById("bangalore_Classified2").style.visibility="visible";
		}
	
		}
	else if(colorRampSelected==2)
		{
		// document.getElementById('colorSelection').style.visibility="visible";
		document.getElementById('Mangmap3').style.visibility="hidden";
		if(mapChoosen==0){
			document.getElementById('mangalore_Classified3').style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
		}
		else if(mapChoosen==1){
			document.getElementById("bangalore_Streched3").style.visibility="hidden";
			document.getElementById("bangalore_Classified3").style.visibility="visible";
		}
		}
}


function symbology_streched(){
	document.getElementById("steched").disabled = false;
		document.getElementById("classified").disabled = false;
	symbologyClassified=1
	if(colorRampSelected==0){
			// document.getElementById('colorSelection').style.visibility="visible";
		   if(mapChoosen==0){
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("mangalore_Streched1").style.visibility="visible";
			}
		   else if(mapChoosen==1){
			document.getElementById("bangalore_Classified1").style.visibility="hidden";
			document.getElementById("bangalore_Streched1").style.visibility="visible";
			}
		}
	else if(colorRampSelected==1){
		// document.getElementById('colorSelection').style.visibility="visible";
		if(mapChoosen==0){
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_Streched2").style.visibility="visible";
		}
		else if(mapChoosen==1){
			document.getElementById("bangalore_Classified2").style.visibility="hidden";
			document.getElementById("bangalore_Streched2").style.visibility="visible";
		}}
	
	
		else if(colorRampSelected==2){
		// document.getElementById('colorSelection').style.visibility="visible";
		 if(mapChoosen==0){
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_Streched3").style.visibility="visible";
		}
		else if(mapChoosen==1){
			document.getElementById("bangalore_Classified3").style.visibility="hidden";
			document.getElementById("bangalore_Streched3").style.visibility="visible";
		}
	}
}


function elevation_select(){
	    document.getElementById("symbology").disabled = true;
		document.getElementById("colorSelection").disabled = true;
		// document.getElementById("watershed Delination").disabled = true;
		
		document.getElementById("Hgrid").style.visibility="hidden";
		document.getElementById("Agrid").style.visibility="hidden";
		document.getElementById("Sgrid").style.visibility="hidden";
		document.getElementById("steched").disabled = true;
		document.getElementById("classified").disabled = true;

		document.getElementById("mangalore_streched_elevation1").style.visibility="visible";
		document.getElementById('legend').style.visibility="visible";
		document.getElementById("mangalore_aspect_streched").style.visibility="hidden";
		document.getElementById("mangalore_curvature_streched").style.visibility="hidden";
		document.getElementById("mangalore_slope_streched").style.visibility="hidden";

		document.getElementById('legend1').style.visibility="hidden";
		document.getElementById('legend2').style.visibility="hidden";
		document.getElementById('legend3').style.visibility="hidden";
		document.getElementById("slope1").style.visibility="hidden";
		document.getElementById("slope2").style.visibility="hidden";
		document.getElementById("slope3").style.visibility="hidden";
		}	


	function slope_select(){
		document.getElementById("mangalore_slope_streched").style.visibility="visible";
		document.getElementById('legend1').style.visibility="visible";
		document.getElementById("slope1").style.visibility="visible";
		document.getElementById("Sgrid").style.visibility="visible";

		document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
		document.getElementById("mangalore_curvature_streched").style.visibility="hidden";
		document.getElementById("mangalore_aspect_streched").style.visibility="hidden";

		document.getElementById("slope2").style.visibility="hidden";
		document.getElementById('legend2').style.visibility="hidden";
		document.getElementById('legend3').style.visibility="hidden";
		document.getElementById("slope3").style.visibility="hidden";
		
		document.getElementById("Agrid").style.visibility="hidden";
		document.getElementById("Hgrid").style.visibility="hidden";
	}

	function hillShade_select(){
		document.getElementById("mangalore_curvature_streched").style.visibility="visible";
		document.getElementById('legend2').style.visibility="visible";
		document.getElementById("slope2").style.visibility="visible";
		document.getElementById("Hgrid").style.visibility="visible";

		document.getElementById("mangalore_slope_streched").style.visibility="hidden";
		document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
		document.getElementById("mangalore_aspect_streched").style.visibility="hidden";
		
		document.getElementById('legend1').style.visibility="hidden";
		document.getElementById('legend3').style.visibility="hidden";

		document.getElementById("slope1").style.visibility="hidden";
		document.getElementById("slope3").style.visibility="hidden";
		document.getElementById("Agrid").style.visibility="hidden";
		document.getElementById("Sgrid").style.visibility="hidden";
	}

	function Aspect_select(){
		document.getElementById("mangalore_aspect_streched").style.visibility="visible";
		document.getElementById("Agrid").style.visibility="visible";
		document.getElementById('legend3').style.visibility="visible";
		document.getElementById("slope3").style.visibility="visible";

		document.getElementById("mangalore_curvature_streched").style.visibility="hidden";
		document.getElementById("mangalore_slope_streched").style.visibility="hidden";
		document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";

		document.getElementById('legend1').style.visibility="hidden";
		document.getElementById('legend2').style.visibility="hidden";

		document.getElementById("Hgrid").style.visibility="hidden";
		document.getElementById("Sgrid").style.visibility="hidden";
		
		document.getElementById("slope1").style.visibility="hidden";
		document.getElementById("slope2").style.visibility="hidden";
	}

	
// function elevation_classified(){
// 	if(colorRampSelected==0){
// 			// document.getElementById('colorSelection').style.visibility="visible";
// 		   if(mapChoosen==0){
// 			document.getElementById("mangalore_Streched1").style.visibility="visible";
// 			}
// 			else if(mapChoosen==1){
// 				console.log("hi");
// 			  document.getElementById("bangalore_Streched1").style.visibility="visible";
// 			}
// 			// else{
// 			//     console.log("Please choose the map");
// 			// }
// 		}
	
	
// 		 else if(colorRampSelected==1){
// 		// document.getElementById('colorSelection').style.visibility="visible";
// 		if(mapChoosen==0){
// 			document.getElementById("mangalore_Streched2").style.visibility="visible";
// 		}
// 		else if(mapChoosen==1){
// 			document.getElementById('bangalore_Streched2').style.visibility="visible";
// 		}}
	
	
// 		else if(colorRampSelected==2){
// 		// document.getElementById('colorSelection').style.visibility="visible";
// 		 if(mapChoosen==0){
// 			document.getElementById("mangalore_Streched3").style.visibility="visible";
// 		}
// 		else if(mapChoosen==1){
// 			document.getElementById("bangalore_Streched3").style.visibility="visible";
// 		}
// 	}
// }




// // function ShowPicture(id,show, img) {
// // 	// document.getElementById("mangalore_dem_elevation").style.visibility="visible";
// //   if (show=="1"){
	
// //     document.getElementById(id).style.visibility = "visible"
// //     document.getElementById(id).childNodes[1].src = img;
// //   }
  
// //   else if (show=="0"){
// //     document.getElementById(id).style.visibility = "hidden";
	
// //   }
// // }


function myFunction() {
	var x = document.getElementById("myText").value;
	document.getElementById("demo").innerHTML = x;
  }


