
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
 var acc = document.getElementsByClassName("accordion");
  console.log(acc.length);
  var i;
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      const active = document.querySelector(".accordion.active");
      if (active) {
        active.classList.remove('active'); // remove active class from accordions
      }

	  if (active !== this) {
        this.classList.toggle("active");
      }
     });
  }}}

  
 
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
	document.getElementById('note1').style.visibility="visible";
	document.getElementById("mangalore").style.visibility="visible"; 
	// document.getElementById("bm1").style.visibility="hidden";
	document.getElementById("colorSelection").disabled = false;
	document.getElementById("north").style.visibility="visible"; 
	document.getElementById('mm1').style.visibility="visible";
	mapChoosen=0;
}

function chooseMap2(){
    document.getElementById("myModal").style.visibility="hidden";
    document.getElementById("bm1").style.visibility="visible";
	document.getElementById('note2').style.visibility="visible";
	document.getElementById("bangalore").style.visibility="visible"; 
    document.getElementById("mm1").style.visibility="hidden";
	document.getElementById("mapSelection").disabled = true;
	document.getElementById("colorSelection").disabled = false;
	document.getElementById("north").style.visibility="visible"; 
	mapChoosen=1;
}

function selection(){
if(mapChoosen==0){
	document.getElementById('m1').style.visibility="visible";
	
	// document.getElementById('note3').style.visibility="visible";
	document.getElementById('mm1').style.visibility="visible";
	document.getElementById("mangalore1").style.visibility="visible"; 
}
else if(mapChoosen==1){
	document.getElementById('b1').style.visibility="visible";
	// document.getElementById('note3').style.visibility="visible";
	document.getElementById('mm1').style.visibility="visible";
	document.getElementById("bangalore1").style.visibility="visible"; 
}
}
// function chooseinformation1(){
// 	document.getElementById('chooseMap').style.visibility="visible";
// }
// function  chooseinformation1a(){
// 	document.getElementById('chooseMap').style.visibility="hidden";
// }

// function colorinformation1(){
// 	document.getElementById('color').style.visibility="visible";
// }
// function  colorinformation1a(){
// 	document.getElementById('color').style.visibility="hidden";
// }

function elevationinformation1(){
	document.getElementById('elevationText').style.visibility="visible";
}
function  elevationinformation1a(){
	document.getElementById('elevationText').style.visibility="hidden";
}

function slopeinformation1(){
	document.getElementById('slope').style.visibility="visible";
}
function  slopeinformation1a(){
	document.getElementById('slope').style.visibility="hidden";
}

function hillshadeinformation1(){
	document.getElementById('hillshade').style.visibility="visible";
}
function  hillshadeinformation1a(){
	document.getElementById('hillshade').style.visibility="hidden";
}

function aspectinformation1(){
	document.getElementById('aspect').style.visibility="visible";
}
function  aspectinformation1a(){
	document.getElementById('aspect').style.visibility="hidden";
}

function fillinformation1(){
	document.getElementById('fill').style.visibility="visible";
}
function  fillinformation1a(){
	document.getElementById('fill').style.visibility="hidden";
}

function flowDirectioninformation1(){
	document.getElementById('flowDirection').style.visibility="visible";
}
function  flowDirectioninformation1a(){
	document.getElementById('flowDirection').style.visibility="hidden";
}

function flowAccumulationinformation1(){
	document.getElementById('flowAccumulation').style.visibility="visible";
}
function  flowAccumulationinformation1a(){
	document.getElementById('flowAccumulation').style.visibility="hidden";
}

function Streamnetworkinformation1(){
	document.getElementById('Streamnetwork').style.visibility="visible";
}
function  Streamnetworkinformation1a(){
	document.getElementById('Streamnetwork').style.visibility="hidden";
}

function Watershedinformation1(){
	document.getElementById('Watershed').style.visibility="visible";
}
function  Watershedinformation1a(){
	document.getElementById('Watershed').style.visibility="hidden";
}

function mangaloreMap1(){
		document.getElementById('m1').style.visibility="hidden";
		document.getElementById('b1').style.visibility="hidden";
		document.getElementById('Mangmap1').style.visibility="visible";
		document.getElementById('note3').style.visibility="hidden";
		document.getElementById('Mangmap2').style.visibility="hidden";
		document.getElementById('Mangmap3').style.visibility="hidden";
		colorRampSelected=0;
		if(mapChoosen==0){
			document.getElementById('Mangmap1').src="images/Elevation_Mangalore_Streched_withoutgrid1_map1.png";
			document.getElementById('note3').style.visibility="visible";
			// document.getElementById('Mangmap1').src="images/Mangalore_streched_map2.png";
			// document.getElementById('Mangmap1').src="images/Mangalore_streched_map3.png";
		}
		else if(mapChoosen==1){
			document.getElementById('Mangmap1').src="images/Elevation_bangalore_Streched_withoutgrid1_map1.png";
			document.getElementById('note3').style.visibility="visible";
			// document.getElementById('Mangmap1').src="images/Bangalore_streched_map2.png";
			// document.getElementById('Mangmap1').src="images/Bangalore_streched_map3.png";
		}
		
}

function mangaloreMap2(){
		document.getElementById('m1').style.visibility="hidden";
		document.getElementById('b1').style.visibility="hidden";
		document.getElementById('Mangmap1').style.visibility="visible";
		document.getElementById('Mangmap2').style.visibility="hidden";
		document.getElementById('Mangmap3').style.visibility="hidden";
	colorRampSelected=1;
	if(mapChoosen==0){
		document.getElementById('Mangmap1').src="images/Elevation_Mangalore_Streched_withoutgrid2_map2.png";
		document.getElementById('note3').style.visibility="visible";
	// document.getElementById('Mangmap1').src="images/Mangalore_streched_map2.png";
		// document.getElementById('Mangmap1').src="images/Mangalore_streched_map3.png";
	}
	else if(mapChoosen==1){
		document.getElementById('Mangmap1').src="images/Elevation_bangalore_Streched_withoutgrid2_map2.png";
		document.getElementById('note3').style.visibility="visible";
		// document.getElementById('Mangmap1').src="images/Bangalore_streched_map2.png";
		// document.getElementById('Mangmap1').src="images/Bangalore_streched_map3.png";
	}
	
}
function mangaloreMap3(){
		document.getElementById('m1').style.visibility="hidden";
		document.getElementById('b1').style.visibility="hidden";
		document.getElementById('Mangmap1').style.visibility="visible";
		document.getElementById('Mangmap2').style.visibility="hidden";
		document.getElementById('Mangmap3').style.visibility="hidden";
	colorRampSelected=2;
	if(mapChoosen==0){
		document.getElementById('Mangmap1').src="images/Elevation_Mangalore_Streched_withoutgrid3_map3.png";
		document.getElementById('note3').style.visibility="visible";
		
	}
	else if(mapChoosen==1){
		document.getElementById('Mangmap1').src="images/Elevation_bangalore_Streched_withoutgrid3_map3.png";
		document.getElementById('note3').style.visibility="visible";
	}
	}

function grid1_map(){
	// 
	document.getElementById('note3').style.visibility="hidden";
	// document.getElementById("blink").style.visibility="visible";
	document.getElementById('select1').style.visibility="visible";
	// document.getElementById('notification').style.visibility="visible";
	document.getElementById('DEM Derivatives').style.visibility="visible";
	// document.getElementById('dem_icon').style.visibility="visible";
	document.getElementById('Rclassified').style.visibility="visible";
	document.getElementById('Rstreched').style.visibility="visible";
	document.getElementById('text').style.visibility="visible";

	document.getElementsByClassName("blink")[0].style.visibility="visible";
	document.getElementById('watershed Delination').style.visibility="visible";
	// blink_text();
	console.log('hi')
	
	}

function grid2_map(){
	document.getElementById('note3').style.visibility="hidden";

	document.getElementById('select1').style.visibility="visible";
	// document.getElementById('notification').style.visibility="visible";
	document.getElementById('DEM Derivatives').style.visibility="visible";
	document.getElementById('dem_icon').style.visibility="visible";
	document.getElementById('Rclassified').style.visibility="visible";
	document.getElementById('Rstreched').style.visibility="visible";
	document.getElementById('text').style.visibility="visible";
	document.getElementById('watershed Delination').style.visibility="visible";
	document.getElementsByClassName("blink")[0].style.visibility="visible";
	// document.getElementsByClassName("blink").style.visibility="visible";
		// colorRampSelected=1;
}
function grid3_map(){
	document.getElementById('note3').style.visibility="hidden";
	// document.getElementById('notification').style.visibility="visible";
	document.getElementById('select1').style.visibility="visible";
	document.getElementById('DEM Derivatives').style.visibility="visible";
	document.getElementById('dem_icon').style.visibility="visible";
	document.getElementById('Rclassified').style.visibility="visible";
	document.getElementById('Rstreched').style.visibility="visible";
	document.getElementById('text').style.visibility="visible";
	document.getElementsByClassName("blink")[0].style.visibility="visible";
	// document.getElementsByClassName("blink").style.visibility="visible";
	document.getElementById('watershed Delination').style.visibility="visible";
	// document.getElementsByClassName("blink").style.visibility="visible";
		// colorRampSelected=2;
}


// function blink_text() {
// 	$('.blink').fadeOut(500);
//     $('.blink').fadeIn(500);
// }
// setInterval(blink_text, 1000);

// symbology=0 classified
function symbology_classified(){
	document.getElementById("select1").style.visibility="hidden";
	document.getElementById('note3').style.visibility="hidden";
	document.getElementById("DEM Derivatives").disabled = false;
	document.getElementById("watershed Delination").disabled = false;
	document.getElementById("colorSelection").disabled = true;
	document.getElementsByClassName("blink")[0].style.visibility="hidden";
	// document.getElementById('mangalore_streched1').style.visibility="hidden";
	Symbolody=0;
	// console.log(0)
	// declare one variable equal to something
	console.log(colorRampSelected);
	document.getElementById('Mangmap1').style.visibility="hidden";
	if(colorRampSelected==0)
		{
		if(mapChoosen==0)
			{
			document.getElementById('Mangmap1').style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="visible";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			}
		else if(mapChoosen==1)
			{
			document.getElementById('Bangmap1').style.visibility="hidden";
			document.getElementById("bangalore_Streched1").style.visibility="hidden";
			document.getElementById("bangalore_Streched2").style.visibility="hidden";
			document.getElementById("bangalore_Streched3").style.visibility="hidden";
			document.getElementById("bangalore_Classified1").style.visibility="visible";
			document.getElementById('bangalore_Classified2').style.visibility="hidden";
			document.getElementById('bangalore_Classified3').style.visibility="hidden";
			}
		}
	else if(colorRampSelected==1)
		{
		document.getElementById('Mangmap2').style.visibility="hidden";
		document.getElementById('Mangmap1').style.visibility="hidden";
		if(mapChoosen==0)
			{
			document.getElementById('Mangmap2').style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="visible";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			}
		else if(mapChoosen==1)
			{
			// document.getElementById("bangalore_Classified1").style.visibility="hidden";
			document.getElementById("bangalore_Streched2").style.visibility="hidden";
			document.getElementById("bangalore_Streched3").style.visibility="hidden";
			document.getElementById("bangalore_Streched1").style.visibility="hidden";
			document.getElementById("bangalore_Classified2").style.visibility="visible";
			document.getElementById("bangalore_Classified1").style.visibility="hidden ";
			document.getElementById("bangalore_Classified3").style.visibility="hidden ";
			}
		}
	else if(colorRampSelected==2)
		{
		document.getElementById('Mangmap3').style.visibility="hidden";
		document.getElementById('Mangmap2').style.visibility="hidden";
		document.getElementById('Mangmap1').style.visibility="hidden";
		if(mapChoosen==0)
			{
			document.getElementById('mangalore_Classified3').style.visibility="visible";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			}
		else if(mapChoosen==1)
			{
			document.getElementById("bangalore_Streched3").style.visibility="hidden";
			document.getElementById("bangalore_Streched2").style.visibility="hidden";
			document.getElementById("bangalore_Streched1").style.visibility="hidden";
			document.getElementById("bangalore_Classified3").style.visibility="visible";
			document.getElementById("bangalore_Classified2").style.visibility="hidden";
			document.getElementById("bangalore_Classified1").style.visibility="hidden";
			}
		}
}
// symbology=1 streched
function symbology_streched(){
	document.getElementById("select1").style.visibility="hidden";
	document.getElementById('note3').style.visibility="hidden";
	document.getElementById("DEM Derivatives").disabled = false;
	document.getElementById("watershed Delination").disabled = false;
	document.getElementById("colorSelection").disabled = true;
	document.getElementsByClassName("blink")[0].style.visibility="hidden";
	Symbolody=1;
	console.log(1)
	document.getElementById("mangalore_Streched1").style.visibility="hidden";
	if(colorRampSelected==0)
	{
		document.getElementById('Mangmap3').style.visibility="hidden";
		document.getElementById('Mangmap2').style.visibility="hidden";
		document.getElementById('Mangmap1').style.visibility="hidden";
		if(mapChoosen==0)
		{
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_Streched1").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
		}
		   else if(mapChoosen==1)
		{
			document.getElementById("bangalore_Classified1").style.visibility="hidden";
			document.getElementById("bangalore_Classified2").style.visibility="hidden";
			document.getElementById("bangalore_Classified3").style.visibility="hidden";
			document.getElementById("bangalore_Streched1").style.visibility="visible";
			document.getElementById('Mangmap1').style.visibility="hidden";
			document.getElementById("bangalore_Streched2").style.visibility="hidden";
			document.getElementById("bangalore_Streched3").style.visibility="hidden";
		}
	}
	else if(colorRampSelected==1)
	{
		document.getElementById('Mangmap3').style.visibility="hidden";
		document.getElementById('Mangmap2').style.visibility="hidden";
		document.getElementById('Mangmap1').style.visibility="hidden";
		if(mapChoosen==0)
		{
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_Streched2").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById("bangalore_Classified2").style.visibility="hidden";
			document.getElementById("bangalore_Classified1").style.visibility="hidden";
			document.getElementById("bangalore_Classified3").style.visibility="hidden";
			document.getElementById("bangalore_Streched2").style.visibility="visible";
			document.getElementById("bangalore_Streched1").style.visibility="hidden";
			document.getElementById("bangalore_Streched3").style.visibility="hidden";
		}
	}
	else if(colorRampSelected==2)
	{
		document.getElementById('Mangmap3').style.visibility="hidden";
		document.getElementById('Mangmap2').style.visibility="hidden";
		document.getElementById('Mangmap1').style.visibility="hidden";
		if(mapChoosen==0)
		{
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("mangalore_Streched3").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById("bangalore_Classified3").style.visibility="hidden";
			document.getElementById("bangalore_Classified2").style.visibility="hidden";
			document.getElementById("bangalore_Classified1").style.visibility="hidden";
			document.getElementById("bangalore_Streched3").style.visibility="visible";
			document.getElementById("bangalore_Streched2").style.visibility="hidden";
			document.getElementById("bangalore_Streched2").style.visibility="hidden";
		}
	}
}

// symbology=0 classified
// symbology=1 streched
function elevation_Select(){
	document.getElementById('notification').style.visibility="visible";
	document.getElementById("elevation_MSlegend1").style.visibility="hidden";
	
	if(colorRampSelected==0)
	{
		
if(mapChoosen==0)
		{
			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";	

		if(Symbolody==0)
		{
			console.log("hi mangalore elevation 1")
			document.getElementById("mangalore_classified_elevation1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="visible";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden"
			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";

			}
		else if(Symbolody==1){
			console.log("helllo mangalore elevation 1")
			// document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="visible";
			// document.getElementById("elevation_SMgrid1").style.visibility="visible";
			document.getElementById("mangalore_streched_elevation1").style.visibility="visible";
		
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			
		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_elevation1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore elevation 1")
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("elevation_BClegend1").style.visibility="visible";
				// document.getElementById("elevation_CBgrid1").style.visibility="visible";
				document.getElementById("elevation_BSlegend1").style.visibility="hidden";
				document.getElementById("elevation_SBgrid1").style.visibility="hidden";
				document.getElementById("bangalore_classified_elevation1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";

			document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend1").style.visibility="hidden";
			document.getElementById("slope_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend1").style.visibility="hidden";
			document.getElementById("slope_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_BSlegend1").style.visibility="hidden";
			document.getElementById("fill_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore elevation 1")
			    document.getElementById("elevation_MSlegend1").style.visibility="hidden";
				document.getElementById("elevation_BSlegend1").style.visibility="visible";
				// document.getElementById("elevation_SBgrid1").style.visibility="visible";
				document.getElementById("elevation_BClegend1").style.visibility="hidden";
				document.getElementById("elevation_CBgrid1").style.visibility="hidden"
				document.getElementById("bangalore_streched_elevation1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";

				document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend1").style.visibility="hidden";
			document.getElementById("slope_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend1").style.visibility="hidden";
			document.getElementById("slope_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_BSlegend1").style.visibility="hidden";
			document.getElementById("fill_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}
	}
		else if(colorRampSelected==1)
	{
			
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_elevation1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore elevation 2")
			document.getElementById("elevation_MClegend2").style.visibility="visible";
			// document.getElementById("elevation_CMgrid2").style.visibility="visible";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";
			document.getElementById("mangalore_classified_elevation2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";

			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";

		}
		else if(Symbolody==1){
			console.log("helllo mangalore elevation 2")
			document.getElementById("elevation_MSlegend2").style.visibility="visible";
			// document.getElementById("elevation_SMgrid2").style.visibility="visible";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden"
			document.getElementById("mangalore_streched_elevation2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_elevation1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore elevation 2")
				document.getElementById("elevation_BClegend2").style.visibility="visible";
				// document.getElementById("elevation_CBgrid2").style.visibility="visible";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid2").style.visibility="hidden";
				document.getElementById("bangalore_classified_elevation2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";


				document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_BClegend2").style.visibility="hidden";
			document.getElementById("slope_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_BSlegend2").style.visibility="hidden";
			document.getElementById("slope_SBgrid2").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SBgrid2").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_BSlegend2").style.visibility="hidden";
			document.getElementById("fill_SBgrid2").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore elevation 2")
				document.getElementById("elevation_BSlegend3").style.visibility="visible";
				// document.getElementById("elevation_SBgrid2").style.visibility="visible";
				document.getElementById("elevation_BClegend2").style.visibility="hidden";
				document.getElementById("elevation_CBgrid2").style.visibility="hidden"
				document.getElementById("bangalore_streched_elevation2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";

				document.getElementById('bangalore_Classified1').style.visibility="hidden";
			document.getElementById('bangalore_Classified2').style.visibility="hidden";
			document.getElementById('bangalore_Classified3').style.visibility="hidden";

			document.getElementById("bangalore_Streched1").style.visibility="hidden";
			document.getElementById("bangalore_Streched2").style.visibility="hidden";
			document.getElementById("bangalore_Streched3").style.visibility="hidden";

			document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_BClegend2").style.visibility="hidden";
			document.getElementById("slope_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_BSlegend2").style.visibility="hidden";
			document.getElementById("slope_SBgrid2").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SBgrid2").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_BSlegend2").style.visibility="hidden";
			document.getElementById("fill_SBgrid2").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";

			}
		}}
		else if(colorRampSelected==2)
	{
		
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_elevation1").style.visibility="visible";
		if(Symbolody==0)
		{
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			console.log("hi mangalore elevation 3")
			document.getElementById("elevation_MClegend3").style.visibility="visible";
			// document.getElementById("elevation_CMgrid3").style.visibility="visible";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_classified_elevation3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";

			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";

			
			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore elevation 3")
			document.getElementById("elevation_MSlegend3").style.visibility="visible";
			// document.getElementById("elevation_SMgrid3").style.visibility="visible"
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_streched_elevation3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";

			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";


		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_elevation1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore elevation 3")
				document.getElementById("elevation_BClegend3").style.visibility="visible";
				// document.getElementById("elevation_CBgrid3").style.visibility="visible";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid3").style.visibility="hidden";
				document.getElementById("bangalore_classified_elevation3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";

				document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
				document.getElementById("slope_BClegend3").style.visibility="hidden";
				document.getElementById("slope_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
				document.getElementById("slope_BSlegend3").style.visibility="hidden";
				document.getElementById("slope_SBgrid3").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BClegend3").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BSlegend3").style.visibility="hidden";
				document.getElementById("aspect_SBgrid3").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
				document.getElementById("fill_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
				document.getElementById("fill_BSlegend3").style.visibility="hidden";
				document.getElementById("fill_SBgrid3").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore elevation 3")
				document.getElementById("elevation_BSlegend3").style.visibility="visible";
				// document.getElementById("elevation_SBgrid3").style.visibility="visible";
				document.getElementById("elevation_BClegend3").style.visibility="hidden";
				document.getElementById("elevation_CBgrid3").style.visibility="hidden"
				document.getElementById("bangalore_streched_elevation3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";

				document.getElementById('bangalore_Classified1').style.visibility="hidden";
			document.getElementById('bangalore_Classified2').style.visibility="hidden";
			document.getElementById('bangalore_Classified3').style.visibility="hidden";

			document.getElementById("bangalore_Streched1").style.visibility="hidden";
			document.getElementById("bangalore_Streched2").style.visibility="hidden";
			document.getElementById("bangalore_Streched3").style.visibility="hidden";

			document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_BClegend3").style.visibility="hidden";
			document.getElementById("slope_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_BSlegend3").style.visibility="hidden";
			document.getElementById("slope_SBgrid3").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_BClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_BClegend3").style.visibility="hidden";
			document.getElementById("aspect_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_BSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SBgrid3").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_BClegend3").style.visibility="hidden";
			document.getElementById("aspect_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_BSlegend3").style.visibility="hidden";
			document.getElementById("fill_SBgrid3").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";

			}
		}
}}
// mangalore classified
function elevationMC1(){
	document.getElementById('elevation_CMgrid1').style.visibility="visible";
}
function elevationMC1a(){
	document.getElementById('elevation_CMgrid1').style.visibility="hidden";
}

function elevationMC2(){
	document.getElementById('elevation_CMgrid2').style.visibility="visible";
}
function elevationMC2a(){
	document.getElementById('elevation_CMgrid2').style.visibility="hidden";
}


function elevationMC3(){
	document.getElementById('elevation_CMgrid3').style.visibility="visible";
}
function elevationMC3a(){
	document.getElementById('elevation_CMgrid3').style.visibility="hidden";
}

// mangalore streched
function elevationMS1(){
	document.getElementById('elevation_SMgrid1').style.visibility="visible";
}
function elevationMS1a(){
	document.getElementById('elevation_SMgrid1').style.visibility="hidden";
}

function elevationMS2(){
	document.getElementById('elevation_SMgrid2').style.visibility="visible";
}
function elevationMS2a(){
	document.getElementById('elevation_SMgrid2').style.visibility="hidden";
}

function elevationMS3(){
	document.getElementById('elevation_SMgrid3').style.visibility="visible";
}
function elevationMS3a(){
	document.getElementById('elevation_SMgrid3').style.visibility="hidden";
}

// bangalore classified
function elevationBC1(){
	document.getElementById('elevation_CBgrid1').style.visibility="visible";
}
function elevationBC1a(){
	document.getElementById('elevation_CBgrid1').style.visibility="hidden";
}

function elevationBC2(){
	document.getElementById('elevation_CBgrid2').style.visibility="visible";
}
function elevationBC2a(){
	document.getElementById('elevation_CBgrid2').style.visibility="hidden";
}

function elevationBC3(){
	document.getElementById('elevation_CBgrid3').style.visibility="visible";
}
function elevationBC3a(){
	document.getElementById('elevation_CBgrid3').style.visibility="hidden";
}
function elevationBS1(){
	document.getElementById('elevation_SBgrid1').style.visibility="visible";
}
function elevationBS1a(){
	document.getElementById('elevation_SBgrid1').style.visibility="hidden";
}
function elevationBS2(){
	document.getElementById('elevation_SBgrid2').style.visibility="visible";
}
function elevationBS2a(){
	document.getElementById('elevation_SBgrid2').style.visibility="hidden";
}

function elevationBS3(){
	document.getElementById('elevation_SBgrid3').style.visibility="visible";
}
function elevationBS3a(){
	document.getElementById('elevation_SBgrid3').style.visibility="hidden";
}

// function myFunction() {
// 	var x = document.getElementById("myText").value;
// 	document.getElementById("demo").innerHTML = x;
//   }


function selectData(){
	
		// alert("select the data");
		document.getElementsByClassName("blink1")[0].style.visibility="visible";
		document.getElementById("myText").style.visibility="visible";
	document.getElementById("enter").style.visibility="visible";
	document.getElementById("demo").style.visibility="hidden";
}

	
function slope_Select(){
	document.getElementById('notification').style.visibility="visible";
	document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
	// document.getElementById("mangalore_Classified1").style.visibility="hidden";
	document.getElementById("elevation_MSlegend1").style.visibility="hidden";
	document.getElementById("myText").style.visibility="hidden";
	document.getElementById("enter").style.visibility="hidden";
	document.getElementsByClassName("blink1")[0].style.visibility="hidden";
	// document.getElementById("demo").style.visibility="visible";
	if(colorRampSelected==0)
	{
	var x = document.getElementById("myText").value;
	document.getElementById("demo").innerHTML = x;
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_elevation1").style.visibility="visible";
		if(Symbolody==0)
		{
			// alert('select the input data')
			// document.getElementById("demo").style.visibility="hidden";

			console.log("hi mangalore slope 1")
			document.getElementById("mangalore_classified_slope1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="visible";
			document.getElementById("slope_CMgrid1").style.visibility="visible";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden"
			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";


			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
		}
		else if(Symbolody==1){
			console.log("helllo mangalore slope 1");
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";
			// document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="visible";
			document.getElementById("slope_SMgrid1").style.visibility="visible";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";
			document.getElementById("mangalore_streched_slope1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";


}
		
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_elevation1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore slope 1");
				// document.getElementById("mangalore_Streched2").style.visibility="hidden";
				document.getElementById("slope_MSlegend1").style.visibility="hidden";
				document.getElementById("slope_SMgrid1").style.visibility="hidden";
				document.getElementById("slope_BClegend1").style.visibility="visible";
				document.getElementById("slope_CBgrid1").style.visibility="visible";
				document.getElementById("slope_BSlegend1").style.visibility="hidden";
				document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
				document.getElementById("slope_SBgrid1").style.visibility="hidden";
				document.getElementById("bangalore_classified_slope1").style.visibility="visible";

				document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_streched_slope1").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
				document.getElementById("HillShade_BClegend1").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
				document.getElementById("aspect_BClegend1").style.visibility="hidden";
				document.getElementById("aspect_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
				document.getElementById("aspect_BSlegend1").style.visibility="hidden";
				document.getElementById("aspect_SBgrid1").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
				document.getElementById("fill_BClegend1").style.visibility="hidden";
				document.getElementById("aspect_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
				document.getElementById("fill_BSlegend1").style.visibility="hidden";
				document.getElementById("fill_SBgrid1").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
				document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore slope 1")
				// document.getElementById("mangalore_Streched2").style.visibility="hidden";
				document.getElementById("slope_BSlegend1").style.visibility="visible";
				document.getElementById("slope_SBgrid1").style.visibility="visible";
				document.getElementById("slope_BClegend1").style.visibility="hidden";
				document.getElementById("slope_CBgrid1").style.visibility="hidden"
				document.getElementById("bangalore_streched_slope1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				// document.getElementById("bangalore_classified_slope1").style.visibility="hidden";


				document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
				document.getElementById("HillShade_BClegend1").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
				document.getElementById("aspect_BClegend1").style.visibility="hidden";
				document.getElementById("aspect_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
				document.getElementById("aspect_BSlegend1").style.visibility="hidden";
				document.getElementById("aspect_SBgrid1").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
				document.getElementById("fill_BClegend1").style.visibility="hidden";
				document.getElementById("aspect_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
				document.getElementById("fill_BSlegend1").style.visibility="hidden";
				document.getElementById("fill_SBgrid1").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
				document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";

			}
			else{
				// alert("select the data");
			}
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_elevation1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore slope 2")
			// document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="visible";
			document.getElementById("slope_CMgrid2").style.visibility="visible";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";
			document.getElementById("mangalore_classified_slope2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore slope 2")
			// document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="visible";
			document.getElementById("slope_SMgrid2").style.visibility="visible";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden"
			document.getElementById("mangalore_streched_slope2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			// document.getElementById('mangalore_Classified2').style.visibility="hidden";
			// document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";


			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";

}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_slope1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore slope 2")
				document.getElementById("slope_BClegend2").style.visibility="visible";
				document.getElementById("slope_CBgrid2").style.visibility="visible";
				document.getElementById("slope_BSlegend2").style.visibility="hidden";
				document.getElementById("slope_SBgrid2").style.visibility="hidden";
				document.getElementById("bangalore_classified_slope2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_streched_slope2").style.visibility="hidden";

				
				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BClegend2").style.visibility="hidden";
			document.getElementById("elevation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SBgrid2").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
				document.getElementById("HillShade_BClegend2").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BClegend2").style.visibility="hidden";
				document.getElementById("aspect_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BSlegend2").style.visibility="hidden";
				document.getElementById("aspect_SBgrid2").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
				document.getElementById("fill_BClegend2").style.visibility="hidden";
				document.getElementById("aspect_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
				document.getElementById("fill_BSlegend2").style.visibility="hidden";
				document.getElementById("fill_SBgrid2").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
				document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore slope 2")
				document.getElementById("slope_BSlegend2").style.visibility="visible";
				// document.getElementById("slope_SBgrid2").style.visibility="visible";
				document.getElementById("slope_BClegend2").style.visibility="hidden";
				document.getElementById("slope_CBgrid2").style.visibility="hidden"
				document.getElementById("bangalore_streched_slope2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_classified_slope2").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BClegend2").style.visibility="hidden";
				document.getElementById("elevation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BSlegend2").style.visibility="hidden";
				document.getElementById("elevation_SBgrid2").style.visibility="hidden";
		
					
					document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
					document.getElementById("HillShade_BClegend2").style.visibility="hidden";
					document.getElementById("HillShade_CBgrid2").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
					document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
					document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
				
		
					document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
					document.getElementById("aspect_BClegend2").style.visibility="hidden";
					document.getElementById("aspect_CBgrid2").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
					document.getElementById("aspect_BSlegend2").style.visibility="hidden";
					document.getElementById("aspect_SBgrid2").style.visibility="hidden";
				
		
					document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
					document.getElementById("fill_BClegend2").style.visibility="hidden";
					document.getElementById("aspect_CBgrid2").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
					document.getElementById("fill_BSlegend2").style.visibility="hidden";
					document.getElementById("fill_SBgrid2").style.visibility="hidden";
					
					
					document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
					document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
					document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
					document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
					document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";
		
					document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
					document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
					document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
					document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
					document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";
		
					document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
					document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
					document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
		
					document.getElementById("bangalore_watershed").style.visibility="hidden";
					document.getElementById("watershed_Blegend1").style.visibility="hidden";
					document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_slope1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore slope 3")
			document.getElementById("slope_MClegend3").style.visibility="visible";
			document.getElementById("slope_CMgrid3").style.visibility="visible";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_classified_slope3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";

}
		else if(Symbolody==1){
			console.log("helllo mangalore slope 3")
			document.getElementById("slope_MSlegend3").style.visibility="visible";
			document.getElementById("slope_SMgrid3").style.visibility="visible"
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_streched_slope3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";

		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_slope1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore slope 3")
				document.getElementById("slope_BClegend3").style.visibility="visible";
				document.getElementById("slope_CBgrid3").style.visibility="visible";
				document.getElementById("slope_BSlegend3").style.visibility="hidden";
				document.getElementById("slope_SBgrid3").style.visibility="hidden";
				document.getElementById("bangalore_classified_slope3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_streched_slope3").style.visibility="hidden";


				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BClegend3").style.visibility="hidden";
				document.getElementById("elevation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid3").style.visibility="hidden";
		
					
					document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
					document.getElementById("HillShade_BClegend3").style.visibility="hidden";
					document.getElementById("HillShade_CBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
					document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
					document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
				
		
					document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
					document.getElementById("aspect_BClegend3").style.visibility="hidden";
					document.getElementById("aspect_CBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
					document.getElementById("aspect_BSlegend3").style.visibility="hidden";
					document.getElementById("aspect_SBgrid3").style.visibility="hidden";
				
		
					document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
					document.getElementById("fill_BClegend3").style.visibility="hidden";
					document.getElementById("aspect_CBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
					document.getElementById("fill_BSlegend3").style.visibility="hidden";
					document.getElementById("fill_SBgrid3").style.visibility="hidden";
					
					
					document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
					document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
					document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";
					document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
					document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
					document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
					document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
					document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
					document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
					document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
					document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
		
					document.getElementById("bangalore_watershed").style.visibility="hidden";
					document.getElementById("watershed_Blegend1").style.visibility="hidden";
					document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore slope 3")
				document.getElementById("slope_BSlegend3").style.visibility="visible";
				document.getElementById("slope_SBgrid3").style.visibility="visible";
				document.getElementById("slope_BClegend3").style.visibility="hidden";
				document.getElementById("slope_CBgrid3").style.visibility="hidden"
				document.getElementById("bangalore_streched_slope3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_classified_slope3").style.visibility="hidden";

				
				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BClegend3").style.visibility="hidden";
				document.getElementById("elevation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid3").style.visibility="hidden";
		
					
					document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
					document.getElementById("HillShade_BClegend3").style.visibility="hidden";
					document.getElementById("HillShade_CBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
					document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
					document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
				
		
					document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
					document.getElementById("aspect_BClegend3").style.visibility="hidden";
					document.getElementById("aspect_CBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
					document.getElementById("aspect_BSlegend3").style.visibility="hidden";
					document.getElementById("aspect_SBgrid3").style.visibility="hidden";
				
		
					document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
					document.getElementById("fill_BClegend3").style.visibility="hidden";
					document.getElementById("aspect_CBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
					document.getElementById("fill_BSlegend3").style.visibility="hidden";
					document.getElementById("fill_SBgrid3").style.visibility="hidden";
					
					
					document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
					document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
					document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";
					document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
					document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
					document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
					document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
					document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
					document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";
		
					document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
					document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
					document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
		
					document.getElementById("bangalore_watershed").style.visibility="hidden";
					document.getElementById("watershed_Blegend1").style.visibility="hidden";
					document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}
}}
// mangalore classified
function slopeMC1(){
	document.getElementById('slope_CMgrid1').style.visibility="visible";
}
function slopeMC1a(){
	document.getElementById('slope_CMgrid1').style.visibility="hidden";
}

function slopeMC2(){
	document.getElementById('slope_CMgrid2').style.visibility="visible";
}
function slopeMC2a(){
	document.getElementById('slope_CMgrid2').style.visibility="hidden";
}


function slopeMC3(){
	document.getElementById('slope_CMgrid3').style.visibility="visible";
}
function slopeMC3a(){
	document.getElementById('slope_CMgrid3').style.visibility="hidden";
}

// mangalore streched
function slopeMS1(){
	document.getElementById('slope_SMgrid1').style.visibility="visible";
}
function slopeMS1a(){
	document.getElementById('slope_SMgrid1').style.visibility="hidden";
}

function slopeMS2(){
	document.getElementById('slope_SMgrid2').style.visibility="visible";
}
function slopeMS2a(){
	document.getElementById('slope_SMgrid2').style.visibility="hidden";
}

function slopeMS3(){
	document.getElementById('slope_SMgrid3').style.visibility="visible";
}
function slopeMS3a(){
	document.getElementById('slope_SMgrid3').style.visibility="hidden";
}

// bangalore classified
function slopeBC1(){
	document.getElementById('slope_CBgrid1').style.visibility="visible";
}
function slopeBC1a(){
	document.getElementById('slope_CBgrid1').style.visibility="hidden";
}

function slopeBC2(){
	document.getElementById('slope_CBgrid2').style.visibility="visible";
}
function slopeBC2a(){
	document.getElementById('slope_CBgrid2').style.visibility="hidden";
}

function slopeBC3(){
	document.getElementById('slope_CBgrid3').style.visibility="visible";
}
function slopeBC3a(){
	document.getElementById('slope_CBgrid3').style.visibility="hidden";
}

// bangalore streched

function slopeBS1(){
	document.getElementById('slope_SBgrid1').style.visibility="visible";
}
function slopeBS1a(){
	document.getElementById('slope_SBgrid1').style.visibility="hidden";
}

function slopeBS2(){
	document.getElementById('slope_SBgrid2').style.visibility="visible";
}
function slopeBS2a(){
	document.getElementById('slope_SBgrid2').style.visibility="hidden";
}

function slopeBS3(){
	document.getElementById('slope_SBgrid3').style.visibility="visible";
}
function slopeBS3a(){
	document.getElementById('slope_SBgrid3').style.visibility="hidden";
}


function selectData1(){
	// alert("select the data");
	document.getElementsByClassName("blink1")[0].style.visibility="visible";
	document.getElementById("myText").style.visibility="hidden";
	document.getElementById("enter").style.visibility="hidden";
	document.getElementById("myText1").style.visibility="visible";
	document.getElementById("demo").style.visibility="hidden";
	document.getElementById("enter1").style.visibility="visible";
	document.getElementById("demo1").style.visibility="hidden";
	// document.getElementById("enter").style.visibility="visible";
}

function HillShade_Select(){
	document.getElementById("slope_MSlegend1").style.visibility="hidden";
	document.getElementById("myText1").style.visibility="hidden";
	document.getElementById("enter1").style.visibility="hidden";
	document.getElementsByClassName("blink1")[0].style.visibility="hidden";
	// document.getElementById("demo1").style.visibility="visible";
	document.getElementById("demo").style.visibility="hidden";
	if(colorRampSelected==0)
	{
	var x = document.getElementById("myText1").value;
	document.getElementById("demo1").innerHTML = x;
		if(mapChoosen==0)
		{
			
			// document.getElementById("mangalore_classified_HillShade1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore HillShade 1")
			document.getElementById("mangalore_classified_HillShade1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="visible";
			// document.getElementById("HillShade_CMgrid1").style.visibility="visible";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden"
			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
		}
		else if(Symbolody==1){
			// document.getElementById("demo1").style.visibility="visible";
			console.log("helllo mangalore HillShade 1");
			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			// document.getElementById("demo1").style.visibility="visible";
			document.getElementById("HillShade_MSlegend1").style.visibility="visible";
			// document.getElementById("HillShade_SMgrid1").style.visibility="visible";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";
			document.getElementById("mangalore_streched_HillShade1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_HillShade1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore HillShade 1")
				document.getElementById("HillShade_BClegend1").style.visibility="visible";
				// document.getElementById("HillShade_CBgrid1").style.visibility="visible";
				document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
				document.getElementById("bangalore_classified_HillShade1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";

			document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend3").style.visibility="hidden";
			document.getElementById("slope_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend3").style.visibility="hidden";
			document.getElementById("slope_SBgrid3").style.visibility="hidden";

		

			document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_BSlegend1").style.visibility="hidden";
			document.getElementById("fill_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
				// document.getElementById("mangalore_Streched1").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore HillShade 1")
				document.getElementById("HillShade_BSlegend1").style.visibility="visible";
				// document.getElementById("HillShade_SBgrid1").style.visibility="visible";
				document.getElementById("HillShade_BClegend1").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid1").style.visibility="hidden"
				document.getElementById("bangalore_streched_HillShade1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";

				
			document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend3").style.visibility="hidden";
			document.getElementById("slope_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend3").style.visibility="hidden";
			document.getElementById("slope_SBgrid3").style.visibility="hidden";

		

			document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_BSlegend1").style.visibility="hidden";
			document.getElementById("fill_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
				// document.getElementById("mangalore_Streched1").style.visibility="hidden";
			}
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_HillShade1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore HillShade 2")
			document.getElementById("HillShade_MClegend2").style.visibility="visible";
			// document.getElementById("HillShade_CMgrid2").style.visibility="visible";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
			document.getElementById("mangalore_classified_HillShade2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore HillShade 2")
			document.getElementById("HillShade_MSlegend2").style.visibility="visible";
			// document.getElementById("HillShade_SMgrid2").style.visibility="visible";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden"
			document.getElementById("mangalore_streched_HillShade2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";


		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_HillShade1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore HillShade 2")
				document.getElementById("HillShade_BClegend2").style.visibility="visible";
				// document.getElementById("HillShade_CBgrid2").style.visibility="visible";
				document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
				document.getElementById("bangalore_classified_HillShade2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";

				
			document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BClegend2").style.visibility="hidden";
			document.getElementById("elevation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SBgrid2").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_BClegend3").style.visibility="hidden";
			document.getElementById("slope_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_BSlegend3").style.visibility="hidden";
			document.getElementById("slope_SBgrid3").style.visibility="hidden";

		

			document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SBgrid2").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_BSlegend2").style.visibility="hidden";
			document.getElementById("fill_SBgrid2").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore HillShade 2")
				document.getElementById("HillShade_BSlegend2").style.visibility="visible";
				// document.getElementById("HillShade_SBgrid2").style.visibility="visible";
				document.getElementById("HillShade_BClegend2").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid2").style.visibility="hidden"
				document.getElementById("bangalore_streched_HillShade2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BClegend2").style.visibility="hidden";
				document.getElementById("elevation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BSlegend2").style.visibility="hidden";
				document.getElementById("elevation_SBgrid2").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
				document.getElementById("slope_BClegend3").style.visibility="hidden";
				document.getElementById("slope_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
				document.getElementById("slope_BSlegend3").style.visibility="hidden";
				document.getElementById("slope_SBgrid3").style.visibility="hidden";
	
			
	
				document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BClegend2").style.visibility="hidden";
				document.getElementById("aspect_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BSlegend2").style.visibility="hidden";
				document.getElementById("aspect_SBgrid2").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
				document.getElementById("fill_BClegend2").style.visibility="hidden";
				document.getElementById("aspect_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
				document.getElementById("fill_BSlegend2").style.visibility="hidden";
				document.getElementById("fill_SBgrid2").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";
	
				document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
				document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
				document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_HillShade1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore HillShade 3")
			document.getElementById("HillShade_MClegend3").style.visibility="visible";
			// document.getElementById("HillShade_CMgrid3").style.visibility="visible";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_classified_HillShade3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";


			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore HillShade 3")
			document.getElementById("HillShade_MSlegend3").style.visibility="visible";
			// document.getElementById("HillShade_SMgrid3").style.visibility="visible"
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_streched_HillShade3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";


			
			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_HillShade1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore HillShade 3")
				document.getElementById("HillShade_BClegend3").style.visibility="visible";
				// document.getElementById("HillShade_CBgrid3").style.visibility="visible";
				document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
				document.getElementById("bangalore_classified_HillShade3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BClegend3").style.visibility="hidden";
				document.getElementById("elevation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid3").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
				document.getElementById("slope_BClegend3").style.visibility="hidden";
				document.getElementById("slope_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
				document.getElementById("slope_BSlegend3").style.visibility="hidden";
				document.getElementById("slope_SBgrid3").style.visibility="hidden";
	
			
	
				document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BSlegend3").style.visibility="hidden";
				document.getElementById("aspect_SBgrid3").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
				document.getElementById("fill_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
				document.getElementById("fill_BSlegend3").style.visibility="hidden";
				document.getElementById("fill_SBgrid3").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";
	
				document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
				document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore HillShade 3")
				document.getElementById("HillShade_BSlegend3").style.visibility="visible";
				document.getElementById("HillShade_SBgrid3").style.visibility="visible";
				document.getElementById("HillShade_BClegend3").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid3").style.visibility="hidden"
				document.getElementById("bangalore_streched_HillShade3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BClegend3").style.visibility="hidden";
				document.getElementById("elevation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid3").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
				document.getElementById("slope_BClegend3").style.visibility="hidden";
				document.getElementById("slope_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
				document.getElementById("slope_BSlegend3").style.visibility="hidden";
				document.getElementById("slope_SBgrid3").style.visibility="hidden";
	
			
	
				document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BSlegend3").style.visibility="hidden";
				document.getElementById("aspect_SBgrid3").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
				document.getElementById("fill_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
				document.getElementById("fill_BSlegend3").style.visibility="hidden";
				document.getElementById("fill_SBgrid3").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";
	
				document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
				document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}
}}
// mangalore classified
function HillShadeMC1(){
	document.getElementById('HillShade_CMgrid1').style.visibility="visible";
}
function HillShadeMC1a(){
	document.getElementById('HillShade_CMgrid1').style.visibility="hidden";
}

function HillShadeMC2(){
	document.getElementById('HillShade_CMgrid2').style.visibility="visible";
}
function HillShadeMC2a(){
	document.getElementById('HillShade_CMgrid2').style.visibility="hidden";
}


function HillShadeMC3(){
	document.getElementById('HillShade_CMgrid3').style.visibility="visible";
}
function HillShadeMC3a(){
	document.getElementById('HillShade_CMgrid3').style.visibility="hidden";
}

// mangalore streched
function HillShadeMS1(){
	document.getElementById('HillShade_SMgrid1').style.visibility="visible";
}
function HillShadeMS1a(){
	document.getElementById('HillShade_SMgrid1').style.visibility="hidden";
}

function HillShadeMS2(){
	document.getElementById('HillShade_SMgrid2').style.visibility="visible";
}
function HillShadeMS2a(){
	document.getElementById('HillShade_SMgrid2').style.visibility="hidden";
}

function HillShadeMS3(){
	document.getElementById('HillShade_SMgrid3').style.visibility="visible";
}
function HillShadeMS3a(){
	document.getElementById('HillShade_SMgrid3').style.visibility="hidden";
}

// bangalore classified
function HillShadeBC1(){
	document.getElementById('HillShade_CBgrid1').style.visibility="visible";
}
function HillShadeBC1a(){
	document.getElementById('HillShade_CBgrid1').style.visibility="hidden";
}

function HillShadeBC2(){
	document.getElementById('HillShade_CBgrid2').style.visibility="visible";
}
function HillShadeBC2a(){
	document.getElementById('HillShade_CBgrid2').style.visibility="hidden";
}

function HillShadeBC3(){
	document.getElementById('HillShade_CBgrid3').style.visibility="visible";
}
function HillShadeBC3a(){
	document.getElementById('HillShade_CBgrid3').style.visibility="hidden";
}
function HillShadeBS1(){
	document.getElementById('HillShade_SBgrid1').style.visibility="visible";
}
function HillShadeBS1a(){
	document.getElementById('HillShade_SBgrid1').style.visibility="hidden";
}
function HillShadeBS2(){
	document.getElementById('HillShade_SBgrid2').style.visibility="visible";
}
function HillShadeBS2a(){
	document.getElementById('HillShade_SBgrid2').style.visibility="hidden";
}

function HillShadeBS3(){
	document.getElementById('HillShade_SBgrid3').style.visibility="visible";
}
function HillShadeBS3a(){
	document.getElementById('HillShade_SBgrid3').style.visibility="hidden";
}


function selectData2(){
	// alert("select the data");
	document.getElementsByClassName("blink1")[0].style.visibility="visible";
	document.getElementById("myText2").style.visibility="visible";
	document.getElementById("enter2").style.visibility="visible";
	
	document.getElementById("demo2").style.visibility="hidden";
	// document.getElementById("enter").style.visibility="visible";
}


function aspect_Select(){
	document.getElementById("mangalore_Streched1").style.visibility="hidden";
	document.getElementById("myText2").style.visibility="hidden";
	document.getElementById("enter2").style.visibility="hidden"
	document.getElementsByClassName("blink1")[0].style.visibility="hidden";
	// document.getElementById("demo2").style.visibility="visible";
	
	document.getElementById("demo1").style.visibility="hidden";
	// document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
	if(colorRampSelected==0)
	{
	if(mapChoosen==0)
		{
			var x = document.getElementById("myText2").value;
	document.getElementById("demo2").innerHTML = x;
			// document.getElementById("mangalore_classified_HillShade1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore aspect 2")
			document.getElementById("aspect_MClegend1").style.visibility="visible";
			// document.getElementById("aspect_CMgrid2").style.visibility="visible";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
			document.getElementById("mangalore_classified_aspect1").style.visibility="visible";
			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById("mangalore_Classified1").style.visibility="hidden";
			
		
			
			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
}
		else if(Symbolody==1){
			console.log("helllo mangalore aspect 1")
			document.getElementById("aspect_MSlegend1").style.visibility="visible";
			// document.getElementById("aspect_SMgrid2").style.visibility="visible";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden"
			document.getElementById("mangalore_streched_aspect1").style.visibility="visible";
			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById("mangalore_Classified1").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			// document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_aspect1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore aspect 1")
				// document.getElementById("mangalore_Streched1").style.visibility="hidden";
				document.getElementById("aspect_BClegend1").style.visibility="visible";
				// document.getElementById("aspect_CBgrid1").style.visibility="visible";
				document.getElementById("aspect_BSlegend1").style.visibility="hidden";
				document.getElementById("aspect_SBgrid1").style.visibility="hidden";
				document.getElementById("bangalore_classified_aspect1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend1").style.visibility="hidden";
			document.getElementById("slope_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend1").style.visibility="hidden";
			document.getElementById("slope_SBgrid1").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_BSlegend1").style.visibility="hidden";
			document.getElementById("fill_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore aspect 1")
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById("aspect_BSlegend1").style.visibility="visible";
				// document.getElementById("aspect_SBgrid1").style.visibility="visible";
				document.getElementById("aspect_BClegend1").style.visibility="hidden";
				document.getElementById("aspect_CBgrid1").style.visibility="hidden"
				document.getElementById("bangalore_streched_aspect1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";

				
				document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend1").style.visibility="hidden";
			document.getElementById("slope_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend1").style.visibility="hidden";
			document.getElementById("slope_SBgrid1").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_BSlegend1").style.visibility="hidden";
			document.getElementById("fill_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_aspect1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore aspect 2")
			document.getElementById("aspect_MClegend2").style.visibility="visible";
			// document.getElementById("aspect_CMgrid2").style.visibility="visible";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
			document.getElementById("mangalore_classified_aspect2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById("mangalore_Classified2").style.visibility="hidden";
			// document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			// document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore aspect 2")
			document.getElementById("aspect_MSlegend2").style.visibility="visible";
			// document.getElementById("aspect_SMgrid2").style.visibility="visible";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden"
			document.getElementById("mangalore_streched_aspect2").style.visibility="visible";
			// document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById("mangalore_Classified2").style.visibility="hidden";
			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_aspect1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore aspect 2")
				document.getElementById("aspect_BClegend2").style.visibility="visible";
				// document.getElementById("aspect_CBgrid2").style.visibility="visible";
				document.getElementById("aspect_BSlegend3").style.visibility="hidden";
				document.getElementById("aspect_SBgrid2").style.visibility="hidden";
				document.getElementById("bangalore_classified_aspect2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";

				
				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BClegend2").style.visibility="hidden";
			document.getElementById("elevation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SBgrid2").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_BClegend2").style.visibility="hidden";
			document.getElementById("slope_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_BSlegend2").style.visibility="hidden";
			document.getElementById("slope_SBgrid2").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_BSlegend2").style.visibility="hidden";
			document.getElementById("fill_SBgrid2").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore aspect 2")
				document.getElementById("aspect_BSlegend2").style.visibility="visible";
				document.getElementById("aspect_SBgrid2").style.visibility="visible";
				document.getElementById("aspect_BClegend2").style.visibility="hidden";
				document.getElementById("aspect_CBgrid2").style.visibility="hidden"
				document.getElementById("bangalore_streched_aspect2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";

					
				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BClegend2").style.visibility="hidden";
			document.getElementById("elevation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SBgrid2").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_BClegend2").style.visibility="hidden";
			document.getElementById("slope_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_BSlegend2").style.visibility="hidden";
			document.getElementById("slope_SBgrid2").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_BSlegend2").style.visibility="hidden";
			document.getElementById("fill_SBgrid2").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_aspect1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore aspect 3")
			document.getElementById("aspect_MClegend3").style.visibility="visible";
			// document.getElementById("aspect_CMgrid3").style.visibility="visible";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_classified_aspect3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById("mangalore_Classified3").style.visibility="hidden";
			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			// document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";



			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore aspect 3")
			document.getElementById("aspect_MSlegend3").style.visibility="visible";
			// document.getElementById("aspect_SMgrid3").style.visibility="visible"
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_streched_aspect3").style.visibility="visible";
			// document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById("mangalore_Classified3").style.visibility="hidden";
			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";


			
			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_aspect1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore aspect 3")
				document.getElementById("aspect_BClegend3").style.visibility="visible";
				// document.getElementById("aspect_CBgrid3").style.visibility="visible";
				document.getElementById("aspect_BSlegend3").style.visibility="hidden";
				document.getElementById("aspect_SBgrid3").style.visibility="hidden";
				document.getElementById("bangalore_classified_aspect3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";

					
				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_BClegend3").style.visibility="hidden";
			document.getElementById("elevation_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_BSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SBgrid3").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_BClegend3").style.visibility="hidden";
			document.getElementById("slope_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_BSlegend3").style.visibility="hidden";
			document.getElementById("slope_SBgrid3").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_BClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_BClegend3").style.visibility="hidden";
			document.getElementById("aspect_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_BSlegend3").style.visibility="hidden";
			document.getElementById("fill_SBgrid3").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore aspect 3")
				document.getElementById("aspect_BSlegend3").style.visibility="visible";
				document.getElementById("aspect_SBgrid3").style.visibility="visible";
				// document.getElementById("aspect_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden"
				document.getElementById("bangalore_streched_aspect3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BClegend3").style.visibility="hidden";
				document.getElementById("elevation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid3").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
				document.getElementById("slope_BClegend3").style.visibility="hidden";
				document.getElementById("slope_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
				document.getElementById("slope_BSlegend3").style.visibility="hidden";
				document.getElementById("slope_SBgrid3").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BClegend3").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
				document.getElementById("fill_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
				document.getElementById("fill_BSlegend3").style.visibility="hidden";
				document.getElementById("fill_SBgrid3").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}
}}
// mangalore classified
function aspectMC1(){
	document.getElementById('aspect_CMgrid1').style.visibility="visible";
}
function aspectMC1a(){
	document.getElementById('aspect_CMgrid1').style.visibility="hidden";
}

function aspectMC2(){
	document.getElementById('aspect_CMgrid2').style.visibility="visible";
}
function aspectMC2a(){
	document.getElementById('aspect_CMgrid2').style.visibility="hidden";
}


function aspectMC3(){
	document.getElementById('aspect_CMgrid3').style.visibility="visible";
}
function aspectMC3a(){
	document.getElementById('aspect_CMgrid3').style.visibility="hidden";
}

// mangalore streched
function aspectMS1(){
	document.getElementById('aspect_SMgrid1').style.visibility="visible";
}
function aspectMS1a(){
	document.getElementById('aspect_SMgrid1').style.visibility="hidden";
}

function aspectMS2(){
	document.getElementById('aspect_SMgrid2').style.visibility="visible";
}
function aspectMS2a(){
	document.getElementById('aspect_SMgrid2').style.visibility="hidden";
}

function aspectMS3(){
	document.getElementById('aspect_SMgrid3').style.visibility="visible";
}
function aspectMS3a(){
	document.getElementById('aspect_SMgrid3').style.visibility="hidden";
}

// bangalore classified
function aspectBC1(){
	document.getElementById('aspect_CBgrid1').style.visibility="visible";
}
function aspectBC1a(){
	document.getElementById('aspect_CBgrid1').style.visibility="hidden";
}

function aspectBC2(){
	document.getElementById('aspect_CBgrid2').style.visibility="visible";
}
function aspectBC2a(){
	document.getElementById('aspect_CBgrid2').style.visibility="hidden";
}

function aspectBC3(){
	document.getElementById('aspect_CBgrid3').style.visibility="visible";
}
function aspectBC3a(){
	document.getElementById('aspect_CBgrid3').style.visibility="hidden";
}
function aspectBS1(){
	document.getElementById('aspect_SBgrid1').style.visibility="visible";
}
function aspectBS1a(){
	document.getElementById('aspect_SBgrid1').style.visibility="hidden";
}
function aspectBS2(){
	document.getElementById('aspect_SBgrid2').style.visibility="visible";
}
function aspectBS2a(){
	document.getElementById('aspect_SBgrid2').style.visibility="hidden";
}

function aspectBS3(){
	document.getElementById('aspect_SBgrid3').style.visibility="visible";
}
function aspectBS3a(){
	document.getElementById('aspect_SBgrid3').style.visibility="hidden";
}


function selectText(){
	// document.getElementById("mangalore_streched_fill1").style.visibility="visible";
	// alert("select the data");
	document.getElementsByClassName("blink1")[0].style.visibility="visible";
	document.getElementById("WText").style.visibility="visible";
	document.getElementById("Wenter").style.visibility="visible";
	document.getElementById("Wdemo").style.visibility="hidden";

	document.getElementById("WText1").style.visibility="hidden";
	document.getElementById("Wenter1").style.visibility="hidden";
	document.getElementById("Wdemo1").style.visibility="hidden";
	// document.getElementById("enter").style.visibility="visible";
}



function fill_Select(){
	document.getElementById("mangalore_streched_elevation1").style.visibility="visible";
	document.getElementById("mangalore_Streched1").style.visibility="hidden";
	document.getElementById('mangalore_Classified1').style.visibility="hidden";

	document.getElementById("bangalore_Streched1").style.visibility="hidden";
	document.getElementById('bangalore_Classified1').style.visibility="hidden";

	document.getElementById("watershed_ButtonBasin1_mangalore").style.visibility="hidden";
	document.getElementById("watershed_ButtonBasin2_mangalore").style.visibility="hidden";

	document.getElementById("watershed_ButtonBasin1_bangalore").style.visibility="hidden";
	document.getElementById("watershed_ButtonBasin2_bangalore").style.visibility="hidden";
	document.getElementById("watershed_ButtonBasin3_bangalore").style.visibility="hidden";

	document.getElementById("WText").style.visibility="hidden";
	document.getElementById("Wenter").style.visibility="hidden";
	document.getElementsByClassName("blink1")[0].style.visibility="hidden";

	// document.getElementById("mangalore_Streched1").style.visibility="hidden";

	if(colorRampSelected==0)
	{
		
	// document.getElementById("Wdemo").style.visibility="visible";
	
	// document.getElementById("demo1").style.visibility="hidden";
		if(mapChoosen==0)
		{
	var x = document.getElementById("WText").value;
	document.getElementById("Wdemo").innerHTML = x;
			document.getElementById("mangalore_streched_elevation1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			
		if(Symbolody==0)
		{
			console.log("hi mangalore fill 1")
			document.getElementById("mangalore_classified_fill1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";

			document.getElementById("fill_MClegend1").style.visibility="visible";
			// document.getElementById("fill_CMgrid1").style.visibility="visible";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden"
			

			
			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
		}
		else if(Symbolody==1){
			console.log("helllo mangalore fill 1")
			document.getElementById("fill_MSlegend1").style.visibility="visible";
			// document.getElementById("fill_SMgrid1").style.visibility="visible";
			document.getElementById("mangalore_streched_fill1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("fill_CMgrid1").style.visibility="hidden";
			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
		}
		}
		else if(mapChoosen==1)
		{
			document.getElementById("bangalore_streched_elevation1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore fill 1")
				document.getElementById("fill_BClegend1").style.visibility="visible";
				// document.getElementById("fill_CBgrid1").style.visibility="visible";
				document.getElementById("fill_BSlegend1").style.visibility="hidden";
				document.getElementById("fill_SBgrid1").style.visibility="hidden";
				document.getElementById("bangalore_classified_fill1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_streched_fill1").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend1").style.visibility="hidden";
			document.getElementById("slope_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend1").style.visibility="hidden";
			document.getElementById("slope_SBgrid1").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";

				
			}
			else if(Symbolody==1){
				console.log("hello bangalore fill 1")
				document.getElementById("fill_BSlegend1").style.visibility="visible";
				// document.getElementById("fill_SBgrid1").style.visibility="visible";
				document.getElementById("fill_BClegend1").style.visibility="hidden";
				document.getElementById("fill_CBgrid1").style.visibility="hidden"
				document.getElementById("bangalore_streched_fill1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_classified_fill1").style.visibility="hidden";


				document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
				document.getElementById("elevation_BClegend1").style.visibility="hidden";
				document.getElementById("elevation_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
				document.getElementById("elevation_BSlegend1").style.visibility="hidden";
				document.getElementById("elevation_SBgrid1").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
				document.getElementById("slope_BClegend1").style.visibility="hidden";
				document.getElementById("slope_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
				document.getElementById("slope_BSlegend1").style.visibility="hidden";
				document.getElementById("slope_SBgrid1").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
				document.getElementById("HillShade_BClegend1").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
				document.getElementById("aspect_BClegend1").style.visibility="hidden";
				document.getElementById("aspect_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
				document.getElementById("aspect_BSlegend1").style.visibility="hidden";
				document.getElementById("aspect_SBgrid1").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
				document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("mangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_fill1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore fill 2")
			document.getElementById("fill_MClegend2").style.visibility="visible";
			// document.getElementById("fill_CMgrid2").style.visibility="visible";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";
			document.getElementById("mangalore_classified_fill2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			// document.getElementById('mangalore_Classified2').style.visibility="hidden"
			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			
			

			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore fill 2")
			document.getElementById("fill_MSlegend2").style.visibility="visible";
			// document.getElementById("fill_SMgrid2").style.visibility="visible";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("fill_CMgrid2").style.visibility="hidden"
			document.getElementById("mangalore_streched_fill2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";

			
		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_fill1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore fill 2")
				document.getElementById("fill_BClegend2").style.visibility="visible";
				// document.getElementById("fill_CBgrid2").style.visibility="visible";
				document.getElementById("fill_BSlegend2").style.visibility="hidden";
				document.getElementById("fill_SBgrid2").style.visibility="hidden";
				document.getElementById("bangalore_classified_fill2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_streched_fill2").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BClegend2").style.visibility="hidden";
				document.getElementById("elevation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BSlegend2").style.visibility="hidden";
				document.getElementById("elevation_SBgrid2").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
				document.getElementById("slope_BClegend2").style.visibility="hidden";
				document.getElementById("slope_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
				document.getElementById("slope_BSlegend2").style.visibility="hidden";
				document.getElementById("slope_SBgrid2").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
				document.getElementById("HillShade_BClegend2").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BClegend2").style.visibility="hidden";
				document.getElementById("aspect_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BSlegend2").style.visibility="hidden";
				document.getElementById("aspect_SBgrid2").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
				document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("mangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore fill 2")
				document.getElementById("fill_BSlegend2").style.visibility="visible";
				document.getElementById("fill_SBgrid2").style.visibility="visible";
				document.getElementById("fill_BClegend2").style.visibility="hidden";
				document.getElementById("fill_CBgrid2").style.visibility="hidden"
				document.getElementById("bangalore_streched_fill2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_classified_fill2").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BClegend2").style.visibility="hidden";
				document.getElementById("elevation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BSlegend2").style.visibility="hidden";
				document.getElementById("elevation_SBgrid2").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
				document.getElementById("slope_BClegend2").style.visibility="hidden";
				document.getElementById("slope_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
				document.getElementById("slope_BSlegend2").style.visibility="hidden";
				document.getElementById("slope_SBgrid2").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
				document.getElementById("HillShade_BClegend2").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BClegend2").style.visibility="hidden";
				document.getElementById("aspect_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BSlegend2").style.visibility="hidden";
				document.getElementById("aspect_SBgrid2").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";
	
				document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
				document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
				document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("mangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_fill1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore fill 3")
			document.getElementById("fill_MClegend3").style.visibility="visible";
			// document.getElementById("fill_CMgrid3").style.visibility="visible";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_classified_fill3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";

			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore fill 3")
			document.getElementById("fill_MSlegend3").style.visibility="visible";
			// document.getElementById("fill_SMgrid3").style.visibility="visible"
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("fill_CMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_streched_fill3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";


			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";




		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_fill1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore fill 3")
				document.getElementById("fill_BClegend3").style.visibility="visible";
				// document.getElementById("fill_CBgrid3").style.visibility="visible";
				document.getElementById("fill_BSlegend3").style.visibility="hidden";
				document.getElementById("fill_SBgrid3").style.visibility="hidden";
				document.getElementById("bangalore_classified_fill3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_streched_fill3").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BClegend3").style.visibility="hidden";
				document.getElementById("elevation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid3").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
				document.getElementById("slope_BClegend3").style.visibility="hidden";
				document.getElementById("slope_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
				document.getElementById("slope_BSlegend3").style.visibility="hidden";
				document.getElementById("slope_SBgrid3").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BClegend3").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BSlegend3").style.visibility="hidden";
				document.getElementById("aspect_SBgrid3").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";
	
				document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
				document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("mangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore fill 3")
				document.getElementById("fill_BSlegend3").style.visibility="visible";
				document.getElementById("fill_SBgrid3").style.visibility="visible";
				document.getElementById("fill_BClegend3").style.visibility="hidden";
				document.getElementById("fill_CBgrid3").style.visibility="hidden"
				document.getElementById("bangalore_streched_fill3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_classified_fill3").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BClegend3").style.visibility="hidden";
				document.getElementById("elevation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid3").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
				document.getElementById("slope_BClegend3").style.visibility="hidden";
				document.getElementById("slope_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
				document.getElementById("slope_BSlegend3").style.visibility="hidden";
				document.getElementById("slope_SBgrid3").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BClegend3").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BSlegend3").style.visibility="hidden";
				document.getElementById("aspect_SBgrid3").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("mangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}
}}
// mangalore classified
function fillMC1(){
	document.getElementById('fill_CMgrid1').style.visibility="visible";
}
function fillMC1a(){
	document.getElementById('fill_CMgrid1').style.visibility="hidden";
}

function fillMC2(){
	document.getElementById('fill_CMgrid2').style.visibility="visible";
}
function fillMC2a(){
	document.getElementById('fill_CMgrid2').style.visibility="hidden";
}


function fillMC3(){
	document.getElementById('fill_CMgrid3').style.visibility="visible";
}
function fillMC3a(){
	document.getElementById('fill_CMgrid3').style.visibility="hidden";
}

// mangalore streched
function fillMS1(){
	document.getElementById('fill_SMgrid1').style.visibility="visible";
}
function fillMS1a(){
	document.getElementById('fill_SMgrid1').style.visibility="hidden";
}

function fillMS2(){
	document.getElementById('fill_SMgrid2').style.visibility="visible";
}
function fillMS2a(){
	document.getElementById('fill_SMgrid2').style.visibility="hidden";
}

function fillMS3(){
	document.getElementById('fill_SMgrid3').style.visibility="visible";
}
function fillMS3a(){
	document.getElementById('fill_SMgrid3').style.visibility="hidden";
}

// bangalore classified
function fillBC1(){
	document.getElementById('fill_CBgrid1').style.visibility="visible";
}
function fillBC1a(){
	document.getElementById('fill_CBgrid1').style.visibility="hidden";
}

function fillBC2(){
	document.getElementById('fill_CBgrid2').style.visibility="visible";
}
function fillBC2a(){
	document.getElementById('fill_CBgrid2').style.visibility="hidden";
}

function fillBC3(){
	document.getElementById('fill_CBgrid3').style.visibility="visible";
}
function fillBC3a(){
	document.getElementById('fill_CBgrid3').style.visibility="hidden";
}
function fillBS1(){
	document.getElementById('fill_SBgrid1').style.visibility="visible";
}
function fillBS1a(){
	document.getElementById('fill_SBgrid1').style.visibility="hidden";
}

function fillBS2(){
	document.getElementById('fill_SBgrid2').style.visibility="visible";
}
function fillBS2a(){
	document.getElementById('fill_SBgrid2').style.visibility="hidden";
}

function fillBS3(){
	document.getElementById('fill_SBgrid3').style.visibility="visible";
}
function fillBS3a(){
	document.getElementById('fill_SBgrid3').style.visibility="hidden";
}



function selectFlowDirectionData(){
	// document.getElementById("mangalore_streched_fill1").style.visibility="visible";
	// alert("select the data");
	document.getElementsByClassName("blink1")[0].style.visibility="visible";
	document.getElementById("WText1").style.visibility="visible";
	document.getElementById("Wenter1").style.visibility="visible";
	document.getElementById("Wdemo1").style.visibility="hidden";
	// document.getElementById("enter").style.visibility="visible";
}



function flowDirection_Select(){
	document.getElementById("WText1").style.visibility="hidden";
	document.getElementById("Wenter1").style.visibility="hidden"
	document.getElementById("Wdemo").style.visibility="hidden";
	document.getElementsByClassName("blink1")[0].style.visibility="hidden";
	
	if(colorRampSelected==0)
	{
		
	document.getElementsByClassName("blink1")[0].style.visibility="hidden";

	document.getElementById("watershed_ButtonBasin1_mangalore").style.visibility="hidden";
	document.getElementById("watershed_ButtonBasin2_mangalore").style.visibility="hidden";

	document.getElementById("watershed_ButtonBasin1_bangalore").style.visibility="hidden";
	document.getElementById("watershed_ButtonBasin2_bangalore").style.visibility="hidden";
	document.getElementById("watershed_ButtonBasin3_bangalore").style.visibility="hidden";

	// document.getElementById("Wdemo1").style.visibility="visible";
		if(mapChoosen==0)
		{
			var x = document.getElementById("WText1").value;
	document.getElementById("Wdemo1").innerHTML = x;
	// document.getElementById("mangalore_classified_elevation1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore flowDirection 1")
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="visible";
			// document.getElementById("flowDirection_CMgrid1").style.visibility="visible";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden"
			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";


			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore flowDirection 1")
			document.getElementById("flowDirection_MSlegend1").style.visibility="visible";
			// document.getElementById("flowDirection_SMgrid1").style.visibility="visible";
			document.getElementById("mangalore_streched_flowDirection1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			// document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";
			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";



			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";


			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";

		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_flowDirection1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore flowDirection 1")
				document.getElementById("flowDirection_BClegend1").style.visibility="visible";
				// document.getElementById("flowDirection_CBgrid1").style.visibility="visible";
				document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";
				document.getElementById("bangalore_classified_flowDirection1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";

				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";


				document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend1").style.visibility="hidden";
			document.getElementById("slope_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend1").style.visibility="hidden";
			document.getElementById("slope_SBgrid1").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_BSlegend1").style.visibility="hidden";
			document.getElementById("fill_SBgrid1").style.visibility="hidden";


			document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			
			}
			else if(Symbolody==1){
				console.log("hello bangalore flowDirection 1")
				document.getElementById("flowDirection_BSlegend1").style.visibility="visible";
				// document.getElementById("flowDirection_SBgrid1").style.visibility="visible";
				document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid1").style.visibility="hidden"
				document.getElementById("bangalore_streched_flowDirection1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
				document.getElementById("elevation_BClegend1").style.visibility="hidden";
				document.getElementById("elevation_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
				document.getElementById("elevation_BSlegend1").style.visibility="hidden";
				document.getElementById("elevation_SBgrid1").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
				document.getElementById("slope_BClegend1").style.visibility="hidden";
				document.getElementById("slope_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
				document.getElementById("slope_BSlegend1").style.visibility="hidden";
				document.getElementById("slope_SBgrid1").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
				document.getElementById("HillShade_BClegend1").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
				document.getElementById("aspect_BClegend1").style.visibility="hidden";
				document.getElementById("aspect_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
				document.getElementById("aspect_BSlegend1").style.visibility="hidden";
				document.getElementById("aspect_SBgrid1").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
				document.getElementById("fill_BClegend1").style.visibility="hidden";
				document.getElementById("aspect_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
				document.getElementById("fill_BSlegend1").style.visibility="hidden";
				document.getElementById("fill_SBgrid1").style.visibility="hidden";
	
	
				document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_flowDirection1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore flowDirection 2")
			document.getElementById("flowDirection_MClegend2").style.visibility="visible";
			// document.getElementById("flowDirection_CMgrid2").style.visibility="visible";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";


			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore flowDirection 2")
			document.getElementById("flowDirection_MSlegend2").style.visibility="visible";
			// document.getElementById("flowDirection_SMgrid2").style.visibility="visible";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden"
			document.getElementById("mangalore_streched_flowDirection2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			// document.getElementById("mangalore_Streched2").style.visibility="hidden";
			
			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";


			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";


			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";

			
		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_flowDirection1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore flowDirection 2")
				document.getElementById("flowDirection_BClegend2").style.visibility="visible";
				// document.getElementById("flowDirection_CBgrid2").style.visibility="visible";
				document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";
				document.getElementById("bangalore_classified_flowDirection2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BClegend2").style.visibility="hidden";
				document.getElementById("elevation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BSlegend2").style.visibility="hidden";
				document.getElementById("elevation_SBgrid2").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
				document.getElementById("slope_BClegend2").style.visibility="hidden";
				document.getElementById("slope_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
				document.getElementById("slope_BSlegend2").style.visibility="hidden";
				document.getElementById("slope_SBgrid2").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
				document.getElementById("HillShade_BClegend2").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BClegend2").style.visibility="hidden";
				document.getElementById("aspect_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BSlegend2").style.visibility="hidden";
				document.getElementById("aspect_SBgrid2").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
				document.getElementById("fill_BClegend2").style.visibility="hidden";
				document.getElementById("aspect_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
				document.getElementById("fill_BSlegend2").style.visibility="hidden";
				document.getElementById("fill_SBgrid2").style.visibility="hidden";
	
	
				document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore flowDirection 2")
				document.getElementById("flowDirection_BSlegend2").style.visibility="visible";
				// document.getElementById("flowDirection_SBgrid2").style.visibility="visible";
				document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid2").style.visibility="hidden"
				document.getElementById("bangalore_streched_flowDirection2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";

				
				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BClegend2").style.visibility="hidden";
				document.getElementById("elevation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
				document.getElementById("elevation_BSlegend2").style.visibility="hidden";
				document.getElementById("elevation_SBgrid2").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
				document.getElementById("slope_BClegend2").style.visibility="hidden";
				document.getElementById("slope_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
				document.getElementById("slope_BSlegend2").style.visibility="hidden";
				document.getElementById("slope_SBgrid2").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
				document.getElementById("HillShade_BClegend2").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BClegend2").style.visibility="hidden";
				document.getElementById("aspect_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
				document.getElementById("aspect_BSlegend2").style.visibility="hidden";
				document.getElementById("aspect_SBgrid2").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
				document.getElementById("fill_BClegend2").style.visibility="hidden";
				document.getElementById("aspect_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
				document.getElementById("fill_BSlegend2").style.visibility="hidden";
				document.getElementById("fill_SBgrid2").style.visibility="hidden";
	
	
				document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_flowDirection1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore flowDirection 3")
			document.getElementById("flowDirection_MClegend3").style.visibility="visible";
			// document.getElementById("flowDirection_CMgrid3").style.visibility="visible";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";


			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore flowDirection 3")
			document.getElementById("flowDirection_MSlegend3").style.visibility="visible";
			// document.getElementById("flowDirection_SMgrid3").style.visibility="visible"
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_streched_flowDirection3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";


			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_flowDirection1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore flowDirection 3")
				document.getElementById("flowDirection_BClegend3").style.visibility="visible";
				// document.getElementById("flowDirection_CBgrid3").style.visibility="visible";
				document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";
				document.getElementById("bangalore_classified_flowDirection3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";

				
				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BClegend3").style.visibility="hidden";
				document.getElementById("elevation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid3").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
				document.getElementById("slope_BClegend3").style.visibility="hidden";
				document.getElementById("slope_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
				document.getElementById("slope_BSlegend3").style.visibility="hidden";
				document.getElementById("slope_SBgrid3").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BClegend3").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BSlegend3").style.visibility="hidden";
				document.getElementById("aspect_SBgrid3").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
				document.getElementById("fill_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
				document.getElementById("fill_BSlegend3").style.visibility="hidden";
				document.getElementById("fill_SBgrid3").style.visibility="hidden";
	
	
				document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore flowDirection 3")
				document.getElementById("flowDirection_BSlegend3").style.visibility="visible";
				document.getElementById("flowDirection_SBgrid3").style.visibility="visible";
				document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid3").style.visibility="hidden"
				document.getElementById("bangalore_streched_flowDirection3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById('bangalore_Classified3').style.visibility="hidden";
				document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";

				
				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BClegend3").style.visibility="hidden";
				document.getElementById("elevation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid3").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
				document.getElementById("slope_BClegend3").style.visibility="hidden";
				document.getElementById("slope_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
				document.getElementById("slope_BSlegend3").style.visibility="hidden";
				document.getElementById("slope_SBgrid3").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BClegend3").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BSlegend3").style.visibility="hidden";
				document.getElementById("aspect_SBgrid3").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
				document.getElementById("fill_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
				document.getElementById("fill_BSlegend3").style.visibility="hidden";
				document.getElementById("fill_SBgrid3").style.visibility="hidden";
	
	
				document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
				document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}
}}
// mangalore classified
function flowDirectionMC1(){
	document.getElementById('flowDirection_CMgrid1').style.visibility="visible";
}
function flowDirectionMC1a(){
	document.getElementById('flowDirection_CMgrid1').style.visibility="hidden";
}

function flowDirectionMC2(){
	document.getElementById('flowDirection_CMgrid2').style.visibility="visible";
}
function flowDirectionMC2a(){
	document.getElementById('flowDirection_CMgrid2').style.visibility="hidden";
}


function flowDirectionMC3(){
	document.getElementById('flowDirection_CMgrid3').style.visibility="visible";
}
function flowDirectionMC3a(){
	document.getElementById('flowDirection_CMgrid3').style.visibility="hidden";
}

// mangalore streched
function flowDirectionMS1(){
	document.getElementById('flowDirection_SMgrid1').style.visibility="visible";
}
function flowDirectionMS1a(){
	document.getElementById('flowDirection_SMgrid1').style.visibility="hidden";
}

function flowDirectionMS2(){
	document.getElementById('flowDirection_SMgrid2').style.visibility="visible";
}
function flowDirectionMS2a(){
	document.getElementById('flowDirection_SMgrid2').style.visibility="hidden";
}

function flowDirectionMS3(){
	document.getElementById('flowDirection_SMgrid3').style.visibility="visible";
}
function flowDirectionMS3a(){
	document.getElementById('flowDirection_SMgrid3').style.visibility="hidden";
}

// bangalore classified
function flowDirectionBC1(){
	document.getElementById('flowDirection_CBgrid1').style.visibility="visible";
}
function flowDirectionBC1a(){
	document.getElementById('flowDirection_CBgrid1').style.visibility="hidden";
}

function flowDirectionBC2(){
	document.getElementById('flowDirection_CBgrid2').style.visibility="visible";
}
function flowDirectionBC2a(){
	document.getElementById('flowDirection_CBgrid2').style.visibility="hidden";
}

function flowDirectionBC3(){
	document.getElementById('flowDirection_CBgrid3').style.visibility="visible";
}
function flowDirectionBC3a(){
	document.getElementById('flowDirection_CBgrid3').style.visibility="hidden";
}
function flowDirectionBS1(){
	document.getElementById('flowDirection_SBgrid1').style.visibility="visible";
}
function flowDirectionBS1a(){
	document.getElementById('flowDirection_SBgrid1').style.visibility="hidden";
}
function flowDirectionBS2(){
	document.getElementById('flowDirection_SBgrid2').style.visibility="visible";
}
function flowDirectionBS2a(){
	document.getElementById('flowDirection_SBgrid2').style.visibility="hidden";
}

function flowDirectionBS3(){
	document.getElementById('flowDirection_SBgrid3').style.visibility="visible";
}
function flowDirectionBS3a(){
	document.getElementById('flowDirection_SBgrid3').style.visibility="hidden";
}


function selectFlowAccumulationData(){
	// document.getElementById("mangalore_streched_fill1").style.visibility="visible";
	// alert("select the data");
	document.getElementsByClassName("blink1")[0].style.visibility="visible";
	document.getElementById("WText2").style.visibility="visible";
	document.getElementById("Wenter2").style.visibility="visible";
	document.getElementById("Wdemo").style.visibility="hidden";
	document.getElementById("Wdemo1").style.visibility="hidden";
	document.getElementById("Wdemo2").style.visibility="hidden";
	// document.getElementById("enter").style.visibility="visible";
}

function flowAccumulation_Select(){
	document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
	document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
	document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
	document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
	document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
	document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";

	document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
	document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
	document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
	document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
	document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
	document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";

	document.getElementById("watershed_ButtonBasin1_mangalore").style.visibility="hidden";
	document.getElementById("watershed_ButtonBasin2_mangalore").style.visibility="hidden";

	document.getElementById("watershed_ButtonBasin1_bangalore").style.visibility="hidden";
	document.getElementById("watershed_ButtonBasin2_bangalore").style.visibility="hidden";
	document.getElementById("watershed_ButtonBasin3_bangalore").style.visibility="hidden";

	document.getElementById("WText2").style.visibility="hidden";
	document.getElementById("Wenter2").style.visibility="hidden";
	document.getElementsByClassName("blink1")[0].style.visibility="hidden";

	if(colorRampSelected==0)
	{
		
	document.getElementById("Wdemo").style.visibility="hidden";
	document.getElementById("Wdemo1").style.visibility="hidden";
	// document.getElementById("Wdemo2").style.visibility="visible";
		if(mapChoosen==0)
		{
			var x = document.getElementById("WText2").value;
	document.getElementById("Wdemo2").innerHTML = x;
			// document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore flowAccumulation 1")
			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="visible";
			// document.getElementById("flowAccumulation_CMgrid1").style.visibility="visible";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden"
			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";



			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore flowAccumulation 1")
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="visible";
			// document.getElementById("flowAccumulation_SMgrid1").style.visibility="visible";
			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="visible";
			document.getElementById("mangalore_Streched1").style.visibility="hidden";
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";
			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";



			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore flowAccumulation 1")
				document.getElementById("flowAccumulation_BClegend1").style.visibility="visible";
				// document.getElementById("flowAccumulation_CBgrid1").style.visibility="visible";
				document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";
				document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";

				
			document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend1").style.visibility="hidden";
			document.getElementById("slope_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend1").style.visibility="hidden";
			document.getElementById("slope_SBgrid1").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_BSlegend1").style.visibility="hidden";
			document.getElementById("fill_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";



			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			
			}
			else if(Symbolody==1){
				console.log("hello bangalore flowAccumulation 1")
				document.getElementById("flowAccumulation_BSlegend1").style.visibility="visible";
				// document.getElementById("flowAccumulation_SBgrid1").style.visibility="visible";
				document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden"
				document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="visible";
				document.getElementById("bangalore_Streched1").style.visibility="hidden";
				document.getElementById('bangalore_Classified1').style.visibility="hidden";
				document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend1").style.visibility="hidden";
			document.getElementById("slope_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend1").style.visibility="hidden";
			document.getElementById("slope_SBgrid1").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_BSlegend1").style.visibility="hidden";
			document.getElementById("fill_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";



			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			
			}
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore flowAccumulation 2")
			document.getElementById("flowAccumulation_MClegend2").style.visibility="visible";
			// document.getElementById("flowAccumulation_CMgrid2").style.visibility="visible";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";
			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";



			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore flowAccumulation 2")
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="visible";
			// document.getElementById("flowAccumulation_SMgrid2").style.visibility="visible";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden"
			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="visible";
			document.getElementById("mangalore_Streched2").style.visibility="hidden";
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";



			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";

			
		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore flowAccumulation 2")
				document.getElementById("flowAccumulation_BClegend2").style.visibility="visible";
				// document.getElementById("flowAccumulation_CBgrid2").style.visibility="visible";
				document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";
				document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BClegend2").style.visibility="hidden";
			document.getElementById("elevation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SBgrid2").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_BClegend2").style.visibility="hidden";
			document.getElementById("slope_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_BSlegend2").style.visibility="hidden";
			document.getElementById("slope_SBgrid2").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SBgrid2").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_BSlegend2").style.visibility="hidden";
			document.getElementById("fill_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";



			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			
			}
			else if(Symbolody==1){
				console.log("hello bangalore flowAccumulation 2")
				document.getElementById("flowAccumulation_BSlegend2").style.visibility="visible";
				// document.getElementById("flowAccumulation_SBgrid2").style.visibility="visible";
				document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden"
				document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="visible";
				document.getElementById("bangalore_Streched2").style.visibility="hidden";
				document.getElementById('bangalore_Classified2').style.visibility="hidden";
				document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BClegend2").style.visibility="hidden";
			document.getElementById("elevation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SBgrid2").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_BClegend2").style.visibility="hidden";
			document.getElementById("slope_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_BSlegend2").style.visibility="hidden";
			document.getElementById("slope_SBgrid2").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SBgrid2").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_BSlegend2").style.visibility="hidden";
			document.getElementById("fill_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";



			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			// document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="visible";
		if(Symbolody==0)
		{
			console.log("hi mangalore flowAccumulation 3")
			document.getElementById("flowAccumulation_MClegend3").style.visibility="visible";
			// document.getElementById("flowAccumulation_CMgrid3").style.visibility="visible";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";



			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
			
		}
		else if(Symbolody==1){
			console.log("helllo mangalore flowAccumulation 3")
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="visible";
			// document.getElementById("flowAccumulation_SMgrid3").style.visibility="visible"
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden"
			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="visible";
			document.getElementById("mangalore_Streched3").style.visibility="hidden";
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";



			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
		}
		}
		else if(mapChoosen==1)
		{
			// document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="visible";
			if(Symbolody==0)
			{
				console.log("hi bangalore flowAccumulation 3")
				document.getElementById("flowAccumulation_BClegend3").style.visibility="visible";
				// document.getElementById("flowAccumulation_CBgrid3").style.visibility="visible";
				document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";
				document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById("bangalore_Classified3").style.visibility="hidden";
				document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_BClegend3").style.visibility="hidden";
			document.getElementById("elevation_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_BSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SBgrid3").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_BClegend3").style.visibility="hidden";
			document.getElementById("slope_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_BSlegend3").style.visibility="hidden";
			document.getElementById("slope_SBgrid3").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_BClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_BSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SBgrid3").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_BClegend3").style.visibility="hidden";
			document.getElementById("aspect_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_BSlegend3").style.visibility="hidden";
			document.getElementById("fill_SBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";



			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
			else if(Symbolody==1){
				console.log("hello bangalore flowAccumulation 3")
				document.getElementById("flowAccumulation_BSlegend3").style.visibility="visible";
				// document.getElementById("flowAccumulation_SBgrid3").style.visibility="visible";
				document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
				document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden"
				document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="visible";
				document.getElementById("bangalore_Streched3").style.visibility="hidden";
				document.getElementById("bangalore_Classified3").style.visibility="hidden";
				document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";

				document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BClegend3").style.visibility="hidden";
				document.getElementById("elevation_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
				document.getElementById("elevation_BSlegend3").style.visibility="hidden";
				document.getElementById("elevation_SBgrid3").style.visibility="hidden";
	
				
				document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
				document.getElementById("slope_BClegend3").style.visibility="hidden";
				document.getElementById("slope_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
				document.getElementById("slope_BSlegend3").style.visibility="hidden";
				document.getElementById("slope_SBgrid3").style.visibility="hidden";
	
			
				document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BClegend3").style.visibility="hidden";
				document.getElementById("HillShade_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
				document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
				document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
			
	
				document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
				document.getElementById("aspect_MClegend3").style.visibility="hidden";
				document.getElementById("aspect_CMgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
				document.getElementById("aspect_BSlegend3").style.visibility="hidden";
				document.getElementById("aspect_SBgrid3").style.visibility="hidden";
				
				
				document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
				document.getElementById("fill_BClegend3").style.visibility="hidden";
				document.getElementById("aspect_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
				document.getElementById("fill_BSlegend3").style.visibility="hidden";
				document.getElementById("fill_SBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
				document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";
	
				document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";
				document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
				document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";
	
	
	
				document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
				document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
				document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
	
				document.getElementById("bangalore_watershed").style.visibility="hidden";
				document.getElementById("watershed_Blegend1").style.visibility="hidden";
				document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
			}
		}
}}
// mangalore classified
function flowAccumulationMC1(){
	document.getElementById('flowAccumulation_CMgrid1').style.visibility="visible";
}
function flowAccumulationMC1a(){
	document.getElementById('flowAccumulation_CMgrid1').style.visibility="hidden";
}

function flowAccumulationMC2(){
	document.getElementById('flowAccumulation_CMgrid2').style.visibility="visible";
}
function flowAccumulationMC2a(){
	document.getElementById('flowAccumulation_CMgrid2').style.visibility="hidden";
}


function flowAccumulationMC3(){
	document.getElementById('flowAccumulation_CMgrid3').style.visibility="visible";
}
function flowAccumulationMC3a(){
	document.getElementById('flowAccumulation_CMgrid3').style.visibility="hidden";
}

// mangalore streched
function flowAccumulationMS1(){
	document.getElementById('flowAccumulation_SMgrid1').style.visibility="visible";
}
function flowAccumulationMS1a(){
	document.getElementById('flowAccumulation_SMgrid1').style.visibility="hidden";
}

function flowAccumulationMS2(){
	document.getElementById('flowAccumulation_SMgrid2').style.visibility="visible";
}
function flowAccumulationMS2a(){
	document.getElementById('flowAccumulation_SMgrid2').style.visibility="hidden";
}

function flowAccumulationMS3(){
	document.getElementById('flowAccumulation_SMgrid3').style.visibility="visible";
}
function flowAccumulationMS3a(){
	document.getElementById('flowAccumulation_SMgrid3').style.visibility="hidden";
}

// bangalore classified
function flowAccumulationBC1(){
	document.getElementById('flowAccumulation_CBgrid1').style.visibility="visible";
}
function flowAccumulationBC1a(){
	document.getElementById('flowAccumulation_CBgrid1').style.visibility="hidden";
}

function flowAccumulationBC2(){
	document.getElementById('flowAccumulation_CBgrid2').style.visibility="visible";
}
function flowAccumulationBC2a(){
	document.getElementById('flowAccumulation_CBgrid2').style.visibility="hidden";
}

function flowAccumulationBC3(){
	document.getElementById('flowAccumulation_CBgrid3').style.visibility="visible";
}
function flowAccumulationBC3a(){
	document.getElementById('flowAccumulation_CBgrid3').style.visibility="hidden";
}
function flowAccumulationBS1(){
	document.getElementById('flowAccumulation_SBgrid1').style.visibility="visible";
}
function flowAccumulationBS1a(){
	document.getElementById('flowAccumulation_SBgrid1').style.visibility="hidden";
}
function flowAccumulationBS2(){
	document.getElementById('flowAccumulation_SBgrid2').style.visibility="visible";
}
function flowAccumulationBS2a(){
	document.getElementById('flowAccumulation_SBgrid2').style.visibility="hidden";
}

function flowAccumulationBS3(){
	document.getElementById('flowAccumulation_SBgrid3').style.visibility="visible";
}
function flowAccumulationBS3a(){
	document.getElementById('flowAccumulation_SBgrid3').style.visibility="hidden";
}


function streamNetwork_Select()
{
	if(colorRampSelected==0)
	{
		
		if(mapChoosen==0)
		{
			document.getElementById('streamNetwork_MClegend1').style.visibility="visible";
			// document.getElementById('streamNetwork_CMgrid1').style.visibility="visible";
			document.getElementById('mangalore_streamNetwork').style.visibility="visible";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";



			// document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			// document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('streamNetwork_BClegend1').style.visibility="visible";
			// document.getElementById('streamNetwork_CBgrid1').style.visibility="visible";
			document.getElementById('bangalore_streamNetwork').style.visibility="visible";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";

			document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend1").style.visibility="hidden";
			document.getElementById("slope_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend1").style.visibility="hidden";
			document.getElementById("slope_SBgrid1").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_BSlegend1").style.visibility="hidden";
			document.getElementById("fill_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";



			// document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";

			// document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			document.getElementById('streamNetwork_MClegend1').style.visibility="visible";
			// document.getElementById('streamNetwork_CMgrid1').style.visibility="visible";
			document.getElementById('mangalore_streamNetwork').style.visibility="visible";
			// document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			// document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";



			// document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			// document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend1").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
		}
	
		else if(mapChoosen==1)
		{
			document.getElementById('streamNetwork_BClegend1').style.visibility="visible";
			// document.getElementById('streamNetwork_CBgrid1').style.visibility="visible";
			document.getElementById('bangalore_streamNetwork').style.visibility="visible";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";

			document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BClegend2").style.visibility="hidden";
			document.getElementById("elevation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SBgrid2").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_BClegend2").style.visibility="hidden";
			document.getElementById("slope_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_BSlegend2").style.visibility="hidden";
			document.getElementById("slope_SBgrid2").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SBgrid2").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_BSlegend2").style.visibility="hidden";
			document.getElementById("fill_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";



			// document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";

			// document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
		}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			document.getElementById('streamNetwork_MClegend1').style.visibility="visible";
			// document.getElementById('streamNetwork_CMgrid1').style.visibility="visible";
			document.getElementById('mangalore_streamNetwork').style.visibility="visible";
			// document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			// document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";



			// document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			// document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Mlegend3").style.visibility="hidden";
			document.getElementById("watershed_Manglore_streamNetwork").style.visibility="hidden";
		}
		
		else if(mapChoosen==1)
		{
			document.getElementById('streamNetwork_BClegend1').style.visibility="visible";
			// document.getElementById('streamNetwork_CBgrid1').style.visibility="visible";
			document.getElementById('bangalore_streamNetwork').style.visibility="visible";
			// document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";

			document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_BClegend3").style.visibility="hidden";
			document.getElementById("elevation_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_BSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SBgrid3").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_BClegend3").style.visibility="hidden";
			document.getElementById("slope_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_BSlegend3").style.visibility="hidden";
			document.getElementById("slope_SBgrid3").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_BClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_BClegend3").style.visibility="hidden";
			document.getElementById("aspect_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_BSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SBgrid3").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_BClegend3").style.visibility="hidden";
			document.getElementById("aspect_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_BSlegend3").style.visibility="hidden";
			document.getElementById("fill_SBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";



			document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";

			// document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_watershed").style.visibility="hidden";
			document.getElementById("watershed_Blegend1").style.visibility="hidden";
			document.getElementById("watershed_Bangalore_streamNetwork").style.visibility="hidden";
		}
}}}
// mangalore classified
function streamNetworkMC1(){
	document.getElementById('streamNetwork_CMgrid1').style.visibility="visible";
	document.getElementById('mangalore_streamNetwork').style.visibility="visible";
	document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
	document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
	
}
function streamNetworkMC1a(){
	document.getElementById('streamNetwork_CMgrid1').style.visibility="hidden";
	document.getElementById('mangalore_streamNetwork').style.visibility="hidden";
	document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
	document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
}

function streamNetworkBC2(){
	document.getElementById('streamNetwork_CBgrid1').style.visibility="visible";
	document.getElementById('bangalore_streamNetwork').style.visibility="visible";
	document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
	document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
}
function streamNetworkBC2a(){
	document.getElementById('streamNetwork_CBgrid1').style.visibility="hidden";
	document.getElementById('bangalore_streamNetwork').style.visibility="hidden";
	document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
	document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
}



function watershed_Select()
{
	document.getElementById("filled").disabled = true;
	document.getElementById("flow").disabled = true;
	document.getElementById("flowaccumulate").disabled = true;
	document.getElementById("streamN").disabled = true;
	document.getElementById("DEM Derivatives").disabled = true;
	

	document.getElementById('text').style.visibility="hidden";
	document.getElementById('Rclassified').style.visibility="hidden";
	document.getElementById('Rstreched').style.visibility="hidden";
	document.getElementById('mangalore_Classified1').style.visibility="hidden";
	document.getElementById('mangalore_Streched1').style.visibility="hidden";
	document.getElementById('bangalore_Classified1').style.visibility="hidden";
	document.getElementById('bangalore_Streched1').style.visibility="hidden";
	document.getElementById('streamNetwork_BClegend1').style.visibility="hidden";
	document.getElementById('SubbasinInstruction1_Bangalore').style.visibility="hidden";
	document.getElementById('watershed_Bbasin1').style.visibility="hidden";
	document.getElementById('watershed_Bsubbasin3').style.visibility="hidden";
	document.getElementById('watershed_Bbasin2').style.visibility="hidden";
	document.getElementById('watershed_Bbasin3').style.visibility="hidden";
	
	
	
	// document.getElementById('blink1').style.visibility="hidden";
	
	document.getElementById('WText').style.visibility="hidden";
	document.getElementById('WText1').style.visibility="hidden";
	document.getElementById('WText2').style.visibility="hidden";

	document.getElementById('Wenter').style.visibility="hidden";
	document.getElementById('Wenter1').style.visibility="hidden";
	document.getElementById('Wenter2').style.visibility="hidden";

	if(colorRampSelected==0)
{
		
		if(mapChoosen==0)
		{
			document.getElementById('mangalore_Classified1').style.visibility="hidden";
			document.getElementById('mangalore_Streched1').style.visibility="hidden";
			// document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			// document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			
			document.getElementById('mangalore_watershed').style.visibility="visible";
			document.getElementById('watershed_Mlegend1').style.visibility="visible";

			document.getElementById("watershed_Msubbasin1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasinlegend1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasin1_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2")[0].style.visibility="hidden";
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1').style.visibility="hidden";
			
			document.getElementById("watershed_Msubbasin1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasinlegend1").style.visibility="hidden";

			document.getElementById("watershed_Msubbasin2").style.visibility="hidden";
			document.getElementById("watershed_Msubbasinlegend2").style.visibility="hidden";


			document.getElementById("watershed_Msubbasin2_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2a")[0].style.visibility="hidden";
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="hidden";
			
		
			document.getElementById('watershed_ButtonBasin1_mangalore').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin2_mangalore').style.visibility="visible";
			document.getElementById('watershed_Mlegend1').style.visibility="visible";

			document.getElementById("mangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MClegend1").style.visibility="hidden";
			document.getElementById("elevation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_MSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SMgrid1").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_MClegend1").style.visibility="hidden";
			document.getElementById("slope_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_MSlegend1").style.visibility="hidden";
			document.getElementById("slope_SMgrid1").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid1").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_MSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SMgrid1").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_MClegend1").style.visibility="hidden";
			document.getElementById("aspect_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_MSlegend1").style.visibility="hidden";
			document.getElementById("fill_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid1").style.visibility="hidden";



			document.getElementById("mangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid1").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";
		}
		
		else if(mapChoosen==1)
		{
	
			document.getElementById('bangalore_watershed').style.visibility="visible";
			document.getElementById('watershed_Blegend1').style.visibility="visible";

			document.getElementById("watershed_Msubbasin1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasinlegend1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasin1_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2")[0].style.visibility="hidden";
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1').style.visibility="hidden";
			
			document.getElementById("watershed_Bsubbasin1").style.visibility="hidden";
			document.getElementById("watershed_Bsubbasinlegend1").style.visibility="hidden";

			document.getElementById("watershed_Bsubbasin2").style.visibility="hidden";
			document.getElementById("watershed_Bsubbasinlegend2").style.visibility="hidden";

			document.getElementById("watershed_Bsubbasin3").style.visibility="hidden";
			document.getElementById("watershed_Bsubbasinlegend3").style.visibility="hidden";
			

			document.getElementById("watershed_Bbasin1").style.visibility="hidden";
			document.getElementById("watershed_Bbasin2").style.visibility="hidden";
			document.getElementById("watershed_Bbasin3").style.visibility="hidden";

			document.getElementById("watershed_Msubbasinlegend1").style.visibility="hidden";
			document.getElementById("watershed_Bsubbasin2_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2a")[0].style.visibility="hidden";
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="hidden";
			
		
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="visible";
			document.getElementById('watershed_Mlegend1').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="visible";
			
			
			document.getElementById("bangalore_classified_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BClegend1").style.visibility="hidden";
			document.getElementById("elevation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation1").style.visibility="hidden";
			document.getElementById("elevation_BSlegend1").style.visibility="hidden";
			document.getElementById("elevation_SBgrid1").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope1").style.visibility="hidden";
			document.getElementById("slope_BClegend1").style.visibility="hidden";
			document.getElementById("slope_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope1").style.visibility="hidden";
			document.getElementById("slope_BSlegend1").style.visibility="hidden";
			document.getElementById("slope_SBgrid1").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BClegend1").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade1").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend1").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid1").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect1").style.visibility="hidden";
			document.getElementById("aspect_BSlegend1").style.visibility="hidden";
			document.getElementById("aspect_SBgrid1").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill1").style.visibility="hidden";
			document.getElementById("fill_BClegend1").style.visibility="hidden";
			document.getElementById("aspect_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill1").style.visibility="hidden";
			document.getElementById("fill_BSlegend1").style.visibility="hidden";
			document.getElementById("fill_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend1").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection1").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend1").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid1").style.visibility="hidden";



			document.getElementById("bangalore_classified_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation1").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend1").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid1").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";
		}}
	
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			document.getElementById('mangalore_Classified2').style.visibility="hidden";
			document.getElementById('mangalore_Streched2').style.visibility="hidden";
			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			
			document.getElementById('mangalore_watershed').style.visibility="visible";
			document.getElementById('watershed_Mlegend1').style.visibility="visible";

			document.getElementById("watershed_Msubbasin1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasinlegend1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasin1_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2")[0].style.visibility="hidden";
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1').style.visibility="hidden";

			document.getElementById("watershed_Msubbasin2").style.visibility="hidden";
			document.getElementById("watershed_Msubbasinlegend2").style.visibility="hidden";
			document.getElementById("watershed_Msubbasin2_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2a")[0].style.visibility="hidden";
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="hidden";
			
		
			document.getElementById('watershed_ButtonBasin1_mangalore').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin2_mangalore').style.visibility="visible";
			
			
			document.getElementById("mangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MClegend2").style.visibility="hidden";
			document.getElementById("elevation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_MSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SMgrid2").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_MClegend2").style.visibility="hidden";
			document.getElementById("slope_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_MSlegend2").style.visibility="hidden";
			document.getElementById("slope_SMgrid2").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid2").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_MSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SMgrid2").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_MClegend2").style.visibility="hidden";
			document.getElementById("aspect_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_MSlegend2").style.visibility="hidden";
			document.getElementById("fill_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid2").style.visibility="hidden";



			document.getElementById("mangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid2").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('bangalore_Classified2').style.visibility="hidden";
			document.getElementById('bangalore_Streched2').style.visibility="hidden";
			document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";
			
			document.getElementById('bangalore_watershed').style.visibility="visible";
			document.getElementById('watershed_Blegend1').style.visibility="visible";

			document.getElementById("watershed_Bsubbasin2").style.visibility="hidden";
			document.getElementById("watershed_Bsubbasinlegend2").style.visibility="hidden";

			document.getElementById("watershed_Msubbasin1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasinlegend1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasin1_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2")[0].style.visibility="hidden";
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1').style.visibility="hidden";

			
			document.getElementById("watershed_Bsubbasin2_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2a")[0].style.visibility="hidden";
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="hidden";
			
			

			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="visible";
			// document.getElementById('watershed_Mlegend1').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="visible";

			document.getElementById("bangalore_classified_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BClegend2").style.visibility="hidden";
			document.getElementById("elevation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation2").style.visibility="hidden";
			document.getElementById("elevation_BSlegend2").style.visibility="hidden";
			document.getElementById("elevation_SBgrid2").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope2").style.visibility="hidden";
			document.getElementById("slope_BClegend2").style.visibility="hidden";
			document.getElementById("slope_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope2").style.visibility="hidden";
			document.getElementById("slope_BSlegend2").style.visibility="hidden";
			document.getElementById("slope_SBgrid2").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BClegend2").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade2").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend2").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid2").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect2").style.visibility="hidden";
			document.getElementById("aspect_BSlegend2").style.visibility="hidden";
			document.getElementById("aspect_SBgrid2").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill2").style.visibility="hidden";
			document.getElementById("fill_BClegend2").style.visibility="hidden";
			document.getElementById("aspect_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill2").style.visibility="hidden";
			document.getElementById("fill_BSlegend2").style.visibility="hidden";
			document.getElementById("fill_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend2").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection2").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend2").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid2").style.visibility="hidden";



			document.getElementById("bangalore_classified_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation2").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend2").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid2").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";


		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			document.getElementById('mangalore_Classified3').style.visibility="hidden";
			document.getElementById('mangalore_Streched3').style.visibility="hidden";
			// document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			// document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			
			document.getElementById('mangalore_watershed').style.visibility="visible";
			document.getElementById('watershed_Mlegend1').style.visibility="visible";

			document.getElementById("watershed_Msubbasin1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasinlegend1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasin1_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2")[0].style.visibility="hidden";
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1').style.visibility="hidden";

			document.getElementById("watershed_Msubbasin2").style.visibility="hidden";
			document.getElementById("watershed_Msubbasinlegend2").style.visibility="hidden";
			document.getElementById("watershed_Msubbasin2_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2a")[0].style.visibility="hidden";
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="hidden";
			
		
			document.getElementById('watershed_ButtonBasin1_mangalore').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin2_mangalore').style.visibility="visible";
			document.getElementById('watershed_Mlegend1').style.visibility="visible";


			document.getElementById("mangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MClegend3").style.visibility="hidden";
			document.getElementById("elevation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_MSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SMgrid3").style.visibility="hidden";

			
			document.getElementById("mangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_MClegend3").style.visibility="hidden";
			document.getElementById("slope_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_MSlegend3").style.visibility="hidden";
			document.getElementById("slope_SMgrid3").style.visibility="hidden";

		
			document.getElementById("mangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_MSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SMgrid3").style.visibility="hidden";
		

			document.getElementById("mangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_MSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SMgrid3").style.visibility="hidden";
			
			
			document.getElementById("mangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_MClegend3").style.visibility="hidden";
			document.getElementById("aspect_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_MSlegend3").style.visibility="hidden";
			document.getElementById("fill_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_MSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SMgrid3").style.visibility="hidden";



			document.getElementById("mangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_MSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SMgrid3").style.visibility="hidden";

			document.getElementById("mangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_MClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CMgrid1").style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{

			document.getElementById('bangalore_Classified3').style.visibility="hidden";
			document.getElementById('bangalore_Streched3').style.visibility="hidden";
			document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";
			
			document.getElementById('bangalore_watershed').style.visibility="visible";
			document.getElementById('watershed_Blegend1').style.visibility="visible";

			document.getElementById("watershed_Msubbasin1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasinlegend1").style.visibility="hidden";
			document.getElementById("watershed_Msubbasin1_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2")[0].style.visibility="hidden";
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1').style.visibility="hidden";

			document.getElementById("watershed_Bsubbasin2").style.visibility="hidden";
			document.getElementById("watershed_Bsubbasinlegend2").style.visibility="hidden";
			document.getElementById("watershed_Bsubbasin2_withriver").style.visibility="hidden";
			document.getElementsByClassName("blink2a")[0].style.visibility="hidden";
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="hidden";
			
			document.getElementById("watershed_Bsubbasin3").style.visibility="hidden";
			document.getElementById("watershed_Bsubbasinlegend3").style.visibility="hidden";

			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="visible";
			
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="visible";

			document.getElementById("bangalore_classified_elevation3").style.visibility="hidden";
			document.getElementById("elevation_BClegend3").style.visibility="hidden";
			document.getElementById("elevation_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_elevation3").style.visibility="hidden";
			document.getElementById("elevation_BSlegend3").style.visibility="hidden";
			document.getElementById("elevation_SBgrid3").style.visibility="hidden";

			
			document.getElementById("bangalore_classified_slope3").style.visibility="hidden";
			document.getElementById("slope_BClegend3").style.visibility="hidden";
			document.getElementById("slope_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_slope3").style.visibility="hidden";
			document.getElementById("slope_BSlegend3").style.visibility="hidden";
			document.getElementById("slope_SBgrid3").style.visibility="hidden";

		
			document.getElementById("bangalore_classified_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_BClegend3").style.visibility="hidden";
			document.getElementById("HillShade_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_HillShade3").style.visibility="hidden";
			document.getElementById("HillShade_BSlegend3").style.visibility="hidden";
			document.getElementById("HillShade_SBgrid3").style.visibility="hidden";
		

			document.getElementById("bangalore_classified_aspect3").style.visibility="hidden";
			document.getElementById("aspect_BClegend3").style.visibility="hidden";
			document.getElementById("aspect_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_aspect3").style.visibility="hidden";
			document.getElementById("aspect_BSlegend3").style.visibility="hidden";
			document.getElementById("aspect_SBgrid3").style.visibility="hidden";
			
			
			document.getElementById("bangalore_classified_fill3").style.visibility="hidden";
			document.getElementById("fill_BClegend3").style.visibility="hidden";
			document.getElementById("aspect_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_fill3").style.visibility="hidden";
			document.getElementById("fill_BSlegend3").style.visibility="hidden";
			document.getElementById("fill_SBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_BClegend3").style.visibility="hidden";
			document.getElementById("flowDirection_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowDirection3").style.visibility="hidden";
			document.getElementById("flowDirection_BSlegend3").style.visibility="hidden";
			document.getElementById("flowDirection_SBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_classified_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_BClegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_CBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streched_flowAccumulation3").style.visibility="hidden";
			document.getElementById("flowAccumulation_BSlegend3").style.visibility="hidden";
			document.getElementById("flowAccumulation_SBgrid3").style.visibility="hidden";

			document.getElementById("bangalore_streamNetwork").style.visibility="hidden";
			document.getElementById("streamNetwork_BClegend1").style.visibility="hidden";
			document.getElementById("streamNetwork_CBgrid1").style.visibility="hidden";

		}}
}

// mangalore classified
function watershedM1(){
	document.getElementById('watershed_Manglore_streamNetwork').style.visibility="visible";
}
function watershedM1a(){
	document.getElementById('watershed_Manglore_streamNetwork').style.visibility="hidden";
}

function watershedB1(){
	document.getElementById('watershed_Bangalore_streamNetwork').style.visibility="visible";
}
function watershedB1a(){
	document.getElementById('watershed_Bangalore_streamNetwork').style.visibility="hidden";
}


function basin1(){
	// document.getElementById('mangalore_streched1').style.visibility="hidden";
	document.getElementById('mangalore_watershed').style.visibility="hidden";
	document.getElementById('watershed_Mlegend1').style.visibility="hidden";
	document.getElementById('bangalore_watershed').style.visibility="hidden";
	document.getElementById('watershed_Blegend1').style.visibility="hidden";
	document.getElementById('SubbasinInstruction3').style.visibility="hidden";
	document.getElementById('SubbasinInstruction2').style.visibility="hidden";
	document.getElementById('Instruction2').style.visibility="hidden";
	document.getElementById('Instruction3').style.visibility="hidden";
	
	document.getElementsByClassName("blink3")[0].style.visibility="hidden";
	
	document.getElementById('watershed_Msubbasinlegend2').style.visibility="hidden";
	document.getElementById('watershed_Msubbasinlegend1').style.visibility="hidden";
	document.getElementById('watershed_Bsubbasinlegend3').style.visibility="hidden";
	document.getElementById('watershed_Bsubbasin3_withriver').style.visibility="hidden";

	
	

	
	if(colorRampSelected==0)
	{
		
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Mbasin1').style.visibility="visible";
			document.getElementsByClassName("blink2")[0].style.visibility="visible";
			document.getElementById('Instruction1').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin2_mangalore').style.visibility="hidden";
			document.getElementById('watershed_Mbasin2').style.visibility="hidden";
			document.getElementById('watershed_Msubbasin2_withriver').style.visibility="hidden";
			document.getElementById('watershed_Msubbasin2').style.visibility="hidden";

		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementsByClassName("blink2")[0].style.visibility="visible";
			document.getElementById('Instruction1').style.visibility="visible";

			document.getElementById('watershed_Bbasin1').style.visibility="visible";
			document.getElementById('watershed_Bbasin2').style.visibility="hidden";
			document.getElementById('watershed_Bbasin3').style.visibility="hidden";
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Mbasin1').style.visibility="visible";
			document.getElementsByClassName("blink2")[0].style.visibility="visible";
			document.getElementById('Instruction1').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin2_mangalore').style.visibility="hidden";
			document.getElementById('watershed_Mbasin2').style.visibility="hidden";
			document.getElementById('watershed_Msubbasin2_withriver').style.visibility="hidden";
			document.getElementById('watershed_Msubbasin2').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementsByClassName("blink2")[0].style.visibility="visible";
			document.getElementById('Instruction1').style.visibility="visible";

			document.getElementById('watershed_Bbasin1').style.visibility="visible";
			document.getElementById('watershed_Bbasin2').style.visibility="hidden";
			document.getElementById('watershed_Bbasin3').style.visibility="hidden";
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Mbasin1').style.visibility="visible";
			document.getElementsByClassName("blink2")[0].style.visibility="visible";
			document.getElementById('Instruction1').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin2_mangalore').style.visibility="hidden";
			document.getElementById('watershed_Mbasin2').style.visibility="hidden";
			document.getElementById('watershed_Msubbasin2_withriver').style.visibility="hidden";
			document.getElementById('watershed_Msubbasin2').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementsByClassName("blink2")[0].style.visibility="visible";
			document.getElementById('Instruction1').style.visibility="visible";

			document.getElementById('watershed_Bbasin1').style.visibility="visible";
			document.getElementById('watershed_Bbasin2').style.visibility="hidden";
			document.getElementById('watershed_Bbasin3').style.visibility="hidden";
		}
}}


function basin2(){
	// document.getElementById('mangalore_streched1').style.visibility="hidden";
	document.getElementById('mangalore_watershed').style.visibility="hidden";
	document.getElementById('watershed_Mlegend1').style.visibility="hidden";
	document.getElementById('bangalore_watershed').style.visibility="hidden";
	document.getElementById('watershed_Blegend1').style.visibility="hidden";
	document.getElementById('watershed_Msubbasin1').style.visibility="hidden";
	document.getElementById('watershed_Msubbasin1_withriver').style.visibility="hidden";
	document.getElementById('watershed_Msubbasinlegend1').style.visibility="hidden";

	document.getElementById('Instruction1').style.visibility="hidden";
	document.getElementById('Instruction3').style.visibility="hidden";

	document.getElementById('SubbasinInstruction3').style.visibility="hidden";
	document.getElementById('SubbasinInstruction1').style.visibility="hidden";
	
	if(colorRampSelected==0)
	{
		
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Mbasin2').style.visibility="visible";
			document.getElementsByClassName("blink2a")[0].style.visibility="visible";
			document.getElementById('Instruction2').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin1_mangalore').style.visibility="hidden";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementsByClassName("blink2a")[0].style.visibility="visible";
			document.getElementById('Instruction2').style.visibility="visible";

			document.getElementById('watershed_Bbasin2').style.visibility="visible";
			document.getElementById('watershed_Bbasin1').style.visibility="hidden";
			document.getElementById('watershed_Bbasin3').style.visibility="hidden";
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Mbasin2').style.visibility="visible";
			document.getElementsByClassName("blink2a")[0].style.visibility="visible";
			document.getElementById('Instruction2').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin1_mangalore').style.visibility="hidden";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementsByClassName("blink2a")[0].style.visibility="visible";
			document.getElementById('Instruction2').style.visibility="visible";

			document.getElementById('watershed_Bbasin2').style.visibility="visible";
			document.getElementById('watershed_Bbasin1').style.visibility="hidden";
			document.getElementById('watershed_Bbasin3').style.visibility="hidden";
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Mbasin2').style.visibility="visible";
			document.getElementsByClassName("blink2a")[0].style.visibility="visible";
			document.getElementById('Instruction2').style.visibility="visible";
			document.getElementById('watershed_ButtonBasin1_mangalore').style.visibility="hidden";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementsByClassName("blink2a")[0].style.visibility="visible";
			document.getElementById('Instruction2').style.visibility="visible";

			document.getElementById('watershed_Bbasin2').style.visibility="visible";
			document.getElementById('watershed_Bbasin1').style.visibility="hidden";
			document.getElementById('watershed_Bbasin3').style.visibility="hidden";
		}
}}

function basin3(){
	document.getElementById('watershed_Mlegend1').style.visibility="hidden";
	document.getElementById('watershed_Blegend1').style.visibility="hidden";
	document.getElementById('bangalore_watershed').style.visibility="hidden";
	document.getElementById('SubbasinInstruction3').style.visibility="hidden";
	document.getElementsByClassName("blink3")[0].style.visibility="hidden";
	
	document.getElementById('watershed_Msubbasinlegend2').style.visibility="hidden";
	document.getElementById('watershed_Msubbasinlegend1').style.visibility="hidden";
	document.getElementById('watershed_Bsubbasinlegend3').style.visibility="hidden";
	document.getElementById('watershed_Bsubbasin3_withriver').style.visibility="hidden";
	document.getElementById('SubbasinInstruction3').style.visibility="hidden";

	
	document.getElementById('Instruction2').style.visibility="hidden";
	document.getElementById('Instruction3').style.visibility="hidden";

	document.getElementById('SubbasinInstruction2').style.visibility="hidden";
	document.getElementById('SubbasinInstruction1').style.visibility="hidden";
	if(colorRampSelected==0)
	{
		
		if(mapChoosen==0)
		{
			// document.getElementById('watershed_Mbasin3').style.visibility="visible";
			// document.getElementById('watershed_Basin1').style.visibility="visible";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementsByClassName("blink3")[0].style.visibility="visible";
			document.getElementById('watershed_Bbasin3').style.visibility="visible";
		
			document.getElementById('Instruction3').style.visibility="visible";

			// document.getElementById('watershed_Bbasin3').style.visibility="visible";
			document.getElementById('watershed_Bbasin2').style.visibility="hidden";
			document.getElementById('watershed_Bbasin1').style.visibility="hidden";
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			// document.getElementById('watershed_Mbasin2').style.visibility="visible";
			// document.getElementById('watershed_Basin12').style.visibility="visible";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementsByClassName("blink3")[0].style.visibility="visible";
			document.getElementById('watershed_Bbasin3').style.visibility="visible";
			document.getElementById('Instruction3').style.visibility="visible";

			// document.getElementById('watershed_Bbasin3').style.visibility="visible";
			document.getElementById('watershed_Bbasin1').style.visibility="hidden";
			document.getElementById('watershed_Bbasin2').style.visibility="hidden";
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			// document.getElementById('watershed_Mbasin2').style.visibility="visible";
			// document.getElementById('watershed_Basin3').style.visibility="visible";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementsByClassName("blink3")[0].style.visibility="visible";
			document.getElementById('watershed_Bbasin3').style.visibility="visible";
			document.getElementById('Instruction3').style.visibility="visible";

			// document.getElementById('watershed_Bbasin3').style.visibility="visible";
			document.getElementById('watershed_Bbasin2').style.visibility="hidden";
			document.getElementById('watershed_Bbasin1').style.visibility="hidden";
		}
}}

function subbasin1(){
	
	// document.getElementById('watershed_Mlegend1').style.visibility="hidden";
	// document.getElementById('bangalore_watershed').style.visibility="hidden";
	if(colorRampSelected==0)
	{
		
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Msubbasin1').style.visibility="visible";
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1').style.visibility="visible";
			document.getElementById('watershed_Msubbasinlegend1').style.visibility="visible";
			document.getElementById('watershed_Msubbasin1_withriver').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementById('watershed_Bsubbasin1').style.visibility="visible";
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1_Bangalore').style.visibility="visible";
			document.getElementById('watershed_Bsubbasinlegend1').style.visibility="visible";
			// document.getElementById('watershed_Bsubbasin1_withriver').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Msubbasin1').style.visibility="visible";
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1').style.visibility="visible";
			document.getElementById('watershed_Msubbasinlegend1').style.visibility="visible";
			document.getElementById('watershed_Msubbasin1_withriver').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";
			
			document.getElementById('watershed_Bsubbasin2').style.visibility="visible";
			document.getElementById('watershed_Bbasin1').style.visibility="hidden";
			
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1_Bangalore').style.visibility="visible";
			document.getElementById('watershed_Bsubbasinlegend2').style.visibility="visible";
			// document.getElementById('watershed_Bsubbasin1_withriver').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Msubbasin1').style.visibility="visible";
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1').style.visibility="visible";
			document.getElementById('watershed_Msubbasinlegend1').style.visibility="visible";
			document.getElementById('watershed_Msubbasin1_withriver').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";
			
			document.getElementById('watershed_Bsubbasin3').style.visibility="visible";
			
			document.getElementById('Instruction1').style.visibility="hidden";
			document.getElementById('SubbasinInstruction1_Bangalore').style.visibility="visible";
			document.getElementById('watershed_Bsubbasinlegend3').style.visibility="visible";
			// document.getElementById('watershed_Bsubbasin1_withriver').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
}}

function subbasinM1(){
	document.getElementById('watershed_Msubbasin1_withriver').style.visibility="visible";
}
function subbasinM1a(){
	document.getElementById('watershed_Msubbasin1_withriver').style.visibility="hidden";
}



function subbasin2(){
	// document.getElementById('watershed_Mlegend1').style.visibility="hidden";
	// document.getElementById('bangalore_watershed').style.visibility="hidden";
	if(colorRampSelected==0)
	{
		
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Msubbasin2').style.visibility="visible";
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="visible";
			document.getElementById('watershed_Msubbasinlegend2').style.visibility="visible";
			document.getElementById('watershed_Mbasin2').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementById('watershed_Bsubbasin2').style.visibility="visible";
			document.getElementById('watershed_Bbasin2').style.visibility="hidden";
			watershed_Bbasin1
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="visible";
			document.getElementById('watershed_Bsubbasinlegend2').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Msubbasin2').style.visibility="visible";
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="visible";
			document.getElementById('watershed_Msubbasinlegend2').style.visibility="visible";
			document.getElementById('watershed_Mbasin2').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementById('watershed_Bsubbasin2').style.visibility="visible";
			document.getElementById('watershed_Bbasin2').style.visibility="hidden";
			
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="visible";
			document.getElementById('watershed_Bsubbasinlegend2').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
			document.getElementById('watershed_Bbasin1').style.visibility="visible";
			document.getElementById('watershed_Bbasin2').style.visibility="hidden";
			document.getElementById('watershed_Bbasin3').style.visibility="hidden";
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			document.getElementById('watershed_Msubbasin2').style.visibility="visible";
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="visible";
			document.getElementById('watershed_Msubbasinlegend2').style.visibility="visible";
			// document.getElementById('watershed_Msubbasin2_withriver').style.visibility="visible";
			document.getElementById('watershed_Mbasin2').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementById('watershed_Bsubbasin2').style.visibility="visible";
			document.getElementById('watershed_Bbasin2').style.visibility="hidden";
			
			document.getElementById('Instruction2').style.visibility="hidden";
			document.getElementById('SubbasinInstruction2').style.visibility="visible";
			document.getElementById('watershed_Bsubbasinlegend2').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
			document.getElementById('watershed_Bbasin1').style.visibility="visible";
			document.getElementById('watershed_Bbasin2').style.visibility="hidden";
			document.getElementById('watershed_Bbasin3').style.visibility="hidden";
		}
}}

function subbasinM2(){
	document.getElementById('watershed_Msubbasin2_withriver').style.visibility="visible";
}
function subbasinM2a(){
	document.getElementById('watershed_Msubbasin2_withriver').style.visibility="hidden";
}

function subbasinB1(){
	document.getElementById('watershed_Bsubbasin1_withriver').style.visibility="visible";
}
function subbasinB1a(){
	document.getElementById('watershed_Bsubbasin1_withriver').style.visibility="hidden";
}

function subbasinB2(){
	document.getElementById('watershed_Bsubbasin2_withriver').style.visibility="visible";
}
function subbasinB2a(){
	document.getElementById('watershed_Bsubbasin2_withriver').style.visibility="hidden";
}



function subbasin3(){
	
	// document.getElementById('watershed_Mlegend1').style.visibility="hidden";
	// document.getElementById('bangalore_watershed').style.visibility="hidden";
	if(colorRampSelected==0)
	{
		
		if(mapChoosen==0)
		{
			// document.getElementById('watershed_Msubbasin1').style.visibility="visible";
			// document.getElementById('Instruction1').style.visibility="hidden";
			// document.getElementById('SubbasinInstruction1').style.visibility="visible";
			// document.getElementById('watershed_Msubbasinlegend1').style.visibility="visible";
			// document.getElementById('watershed_Msubbasin1_withriver').style.visibility="visible";
			// document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementById('watershed_Bsubbasin3').style.visibility="visible";
			document.getElementById('Instruction3').style.visibility="hidden";
			document.getElementById('SubbasinInstruction3').style.visibility="visible";
			document.getElementById('watershed_Bsubbasinlegend3').style.visibility="visible";
			document.getElementById('watershed_Bsubbasin3_withriver').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
	}
		else if(colorRampSelected==1)
	{
		if(mapChoosen==0)
		{
			// document.getElementById('watershed_Msubbasin1').style.visibility="visible";
			// document.getElementById('Instruction1').style.visibility="hidden";
			// document.getElementById('SubbasinInstruction1').style.visibility="visible";
			// document.getElementById('watershed_Msubbasinlegend1').style.visibility="visible";
			// document.getElementById('watershed_Msubbasin1_withriver').style.visibility="visible";
			// document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementById('watershed_Bsubbasin3').style.visibility="visible";
			document.getElementById('Instruction3').style.visibility="hidden";
			document.getElementById('SubbasinInstruction3').style.visibility="visible";
			document.getElementById('watershed_Bsubbasinlegend3').style.visibility="visible";
			document.getElementById('watershed_Bsubbasin3_withriver').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
			// document.getElementById('watershed_Bsubbasin1_withriver').style.visibility="visible";
			// document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}}
		else if(colorRampSelected==2)
	{
		if(mapChoosen==0)
		{
			
		}
		else if(mapChoosen==1)
		{
			document.getElementById('watershed_ButtonBasin1_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin2_bangalore').style.visibility="hidden";
			document.getElementById('watershed_ButtonBasin3_bangalore').style.visibility="hidden";

			document.getElementById('watershed_Bsubbasin3').style.visibility="visible";
			document.getElementById('Instruction3').style.visibility="hidden";
			document.getElementById('SubbasinInstruction3').style.visibility="visible";
			document.getElementById('watershed_Bsubbasinlegend3').style.visibility="visible";
			document.getElementById('watershed_Bsubbasin3_withriver').style.visibility="visible";
			document.getElementById('watershed_Mbasin1').style.visibility="hidden";
			// document.getElementById('watershed_Bsubbasin1_withriver').style.visibility="visible";
			// document.getElementById('watershed_Mbasin1').style.visibility="hidden";
		}
}}

function subbasinB3(){
	document.getElementById('watershed_Bsubbasin3_withriver').style.visibility="visible";
}
function subbasinB3a(){
	document.getElementById('watershed_Bsubbasin3_withriver').style.visibility="hidden";
}