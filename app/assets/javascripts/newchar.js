 
var skillpoints = 7;
document.getElementById('points').innerHTML= skillpoints;



function addPoint(test, test1){
if(skillpoints > 0 && test.value <= 3){test.value = parseInt(test.value) + 1;
skillpoints = skillpoints - 1;
test1.innerHTML = test.value;
document.getElementById('points').innerHTML= skillpoints;
if(skillpoints == 0){
	var subButtion = document.getElementsByClassName("btn btn-info");
	subButtion[1].style.display = 'initial';
		}
	}
}

// else{
// 	
// }
function subPoint(test, test1){
if(skillpoints <= 6 && test.value > 1){
test.value = parseInt(test.value) - 1;
skillpoints = skillpoints + 1;
test1.innerHTML = test.value;
document.getElementById('points').innerHTML= skillpoints;}
if(skillpoints != 0){
	var subButtion = document.getElementsByClassName("btn btn-info");
	subButtion[1].style.display = 'none';
		}

}
function hideMe(){
	var hide = document.getElementsByClassName("row");
	var charButtons = document.getElementsByClassName("btn btn-info");
	for(var i = 0; i < 2; i++){
	hide[i].style.display = 'none';
	}
	charButtons[1].style.display = "none";
	charButtons[0].style.display = "inline-block";
	var intell = document.getElementById("character_intelligence");
	document.getElementById("practices").style.display = "initial";
    var practice = parseInt(intell.value) + 2;
    document.getElementById("practices").innerHTML = "Practices: " + parseInt(practice);
    hide[2].style.display = "initial";
;

}
function showMe(){
	var charButtons = document.getElementsByClassName("btn btn-info");
	document.getElementById("practices").style.display = "none";
	var subButtion = document.getElementsByClassName("actions")[0];;
	var hide = document.getElementsByClassName("row");
	for(var i = 0; i < 2; i++){
	hide[i].style.display = 'block';
	}
	charButtons[0].style.display = "none";
	charButtons[1].style.display = "block";
	hide[2].style.display = "none";
}