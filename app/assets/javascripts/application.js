// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//=	require jquery_ujs
//= require bootstrap-sprockets
 
 
var skillpoints = 7;
document.getElementById('points').innerHTML= skillpoints;

function addPoint(test, test1){
if(skillpoints > 0 && test.value <= 3){test.value = parseInt(test.value) + 1;
skillpoints = skillpoints - 1;
test1.innerHTML = test.value;
document.getElementById('points').innerHTML= skillpoints;
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
}
