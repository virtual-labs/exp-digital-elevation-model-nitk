function navNext()
{
	for(temp=0;temp<=1;temp++)
	{
		document.getElementById("canvas"+temp).style.visibility="hidden";
	}
	simsubscreennum+=1;
	document.getElementById("canvas"+simsubscreennum).style.visibility="visible";
	document.getElementById("nextButton").style.visibility="hidden";
	magic();
}
function animatearrow()
{
	if(document.getElementById('arrow1').style.visibility=="hidden")
		document.getElementById('arrow1').style.visibility="visible";
	else
		document.getElementById('arrow1').style.visibility="hidden";
}
function myStopFunction()
{
	clearInterval(myInt);
	document.getElementById('arrow1').style.visibility="hidden";
}
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("myClose");

// When the user clicks the button, open the modal 
function map1(){
	document.getElementById("myModal").style.visibility="visible";
	// document.getElementById('')
	

}
// btn.onclick = function() {
//   modal.style.display ="block";
// }

// When the user clicks on <span> (x), close the modal
function mclose(){
	document.getElementById("myModal").style.visibility="hidden";
}
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// function showMap(){
//     document.getElementById('')
// }
function magic(){
    if(simsubscreennum==1){
        
    }
}
