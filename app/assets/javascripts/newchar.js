var skillpoints =7;
var practice = 0;
var master = 2;
document.getElementById("master").innerHTML = "Masteries:" + master;
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
	if(skillpoints > 0 && test.value <= 3){
		test.value = parseInt(test.value) + 1;
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
				document.getElementById('char_submit').style.display ="none";
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
	document.getElementById("master").style.display = "initial";
    practice = parseInt(intell.value) + 2;
    document.getElementById("practices").innerHTML = "Practices: " + parseInt(practice);
    hide[2].style.display = "initial";
;
}
function showMe(){
	var charButtons = document.getElementsByClassName("btn btn-info");
	document.getElementById("practices").style.display = "none";
	document.getElementById("master").style.display = "none";
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
		document.getElementById('character_presence').value == 0 
		){
	document.getElementById('character_brawn').value = 1;
	document.getElementById('character_wit').value =1;
	document.getElementById('character_charm').value =1;
	document.getElementById('character_intelligence').value =1;
	document.getElementById('character_agility').value =1;
	document.getElementById('character_presence').value =1;

	document.getElementById('brawn').innerHTML = document.getElementById('character_brawn').value;
	document.getElementById('agility').innerHTML = document.getElementById('character_agility').value;
	document.getElementById('wit').innerHTML = document.getElementById('character_wit').value;
	document.getElementById('charm').innerHTML = document.getElementById('character_charm').value;
	document.getElementById('intelligence').innerHTML = document.getElementById('character_intelligence').value;
	document.getElementById('presence').innerHTML = document.getElementById('character_presence').value;
	skillpoints = 7;
	document.getElementById('points').innerHTML= skillpoints;
			}
	else{
	document.getElementById('brawn').innerHTML = document.getElementById('character_brawn').value;
	document.getElementById('agility').innerHTML = document.getElementById('character_agility').value;
	document.getElementById('wit').innerHTML = document.getElementById('character_wit').value;
	document.getElementById('charm').innerHTML = document.getElementById('character_charm').value;
	document.getElementById('intelligence').innerHTML = document.getElementById('character_intelligence').value;
	document.getElementById('presense').innerHTML = document.getElementById('character_presence').value;
	var skillpoints = 0;
	document.getElementById('points').innerHTML= skillpoints;
	if(skillpoints == 0){
		var subButtion = document.getElementsByClassName("btn btn-info");
		subButtion[1].style.display = 'initial';
		document.getElementById('char_submit').style.display ="initial";
			}
			}
	}

function setSkills(){
	var skills = document.getElementsByClassName("skills");
	var sPoints = document.getElementsByClassName("skill_points");
	
	for(var i = 0; i < skills.length; i++){
		if(skills[i].value == 0 ){
			console.log(skills[i].value);
			skills[i].value = 0;
			sPoints[i].innerHTML = skills[i].value;

		}
		else{
			skills[i] = skills[i].value;
			sPoints[i].innerHTML = skills[i].value;
		}
	}
}
setValues();
setSkills();

function setPractice(test){
	if(practice > 0 && (test.value == 0 || test.value ==4)){
		test.value = 2;
		practice = parseInt(practice) -1;
		document.getElementById("practices").innerHTML = "Practices: " + parseInt(practice);
		setSkills();
	}
	else if(test.value == 2){
		test.value = 0;
		practice = parseInt(practice) +1;
		document.getElementById("practices").innerHTML = "Practices: " + parseInt(practice);
		setSkills();
	}
}

function setMaster(test){
	if(master > 0 && (test.value == 0 || test.value == 2)){
		test.value = 4;
		master = parseInt(master) -1;
		document.getElementById("master").innerHTML = "Masteries: " + parseInt(master);
		setSkills();
	}
	else if(test.value == 4){
		test.value = 0;
		master = parseInt(master) +1;
		document.getElementById("master").innerHTML = "Practices: " + parseInt(master);
		setSkills();
	}
}