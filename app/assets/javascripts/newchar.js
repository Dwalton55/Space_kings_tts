 var skillpoints;

document.getElementById('points').innerHTML= skillpoints;
if(document.getElementById('character_brawn').value == 0){
	document.getElementById('character_brawn').value = 1;
	document.getElementById('brawn').innerHTML = document.getElementById('character_brawn').value;
	skillpoints = 7;
	document.getElementById('points').innerHTML= skillpoints;
}
else{
document.getElementById('brawn').innerHTML = document.getElementById('character_brawn').value;
var skillpoints = 0;
document.getElementById('points').innerHTML= skillpoints;
}


function addPoint(test, test1){
if(skillpoints > 0 && test.value <= 3){test.value = parseInt(test.value) + 1;
skillpoints = skillpoints - 1;
test1.innerHTML = test.value;
document.getElementById('points').innerHTML= skillpoints;
if(skillpoints == 0){
	var subButtion = document.getElementsByClassName("btn btn-info");
	subButtion[1].style.display = 'initial';
	document.getElementById('char_submit').style.display ="initial";
		}
	}
};

// else{
// 	
// }
function subPoint(test, test1){
if(skillpoints <= 6 && test.value > 1){
test.value = parseInt(test.value) - 1;
skillpoints = skillpoints + 1;
test1.innerHTML = test.value;
document.getElementById('points').innerHTML= skillpoints;
if(skillpoints != 0){
	var subButtion = document.getElementsByClassName("btn btn-info");
	subButtion[1].style.display = 'none';
		}
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

function setValues(){
	if(
		document.getElementById('character_brawn').value == 0 ||
		document.getElementById('character_wit').value == 0 ||
		document.getElementById('character_charm').value == 0 ||
		document.getElementById('character_intelligence').value == 0 ||
		document.getElementById('character_agility').value == 0 ||
		document.getElementById('character_presense').value == 0 
		){
	document.getElementById('character_brawn').value = 1;
	document.getElementById('character_wit').value =1;
	document.getElementById('character_charm').value =1;
	document.getElementById('character_intelligence').value =1;
	document.getElementById('character_agility').value =1;
	document.getElementById('character_presense').value =1;

	document.getElementById('brawn').innerHTML = document.getElementById('character_brawn').value;
	document.getElementById('agility').innerHTML = document.getElementById('character_agility').value;
	document.getElementById('wit').innerHTML = document.getElementById('character_wit').value;
	document.getElementById('charm').innerHTML = document.getElementById('character_charm').value;
	document.getElementById('intelligence').innerHTML = document.getElementById('character_intelligence').value;
	document.getElementById('presense').innerHTML = document.getElementById('character_presense').value;
	skillpoints = 7;
	document.getElementById('points').innerHTML= skillpoints;
			}
else{
document.getElementById('brawn').innerHTML = document.getElementById('character_brawn').value;
document.getElementById('agility').innerHTML = document.getElementById('character_agility').value;
document.getElementById('wit').innerHTML = document.getElementById('character_wit').value;
document.getElementById('charm').innerHTML = document.getElementById('character_charm').value;
document.getElementById('intelligence').innerHTML = document.getElementById('character_intelligence').value;
document.getElementById('presense').innerHTML = document.getElementById('character_presense').value;
var skillpoints = 0;
document.getElementById('points').innerHTML= skillpoints;
if(skillpoints == 0){
	var subButtion = document.getElementsByClassName("btn btn-info");
	subButtion[1].style.display = 'initial';
	document.getElementById('char_submit').style.display ="initial";
		}
		}
}

setValues();