function show_hide_password(target){
	var input = document.getElementById('password');
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text');
	} else {
		input.setAttribute('type', 'password');
	}
	return false;
}
function show_hide_password2(target){
	var input = document.getElementById('passwordtwo');
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text');
	} else {
		input.setAttribute('type', 'password');
	}
	return false;
}
function show_hide_password3(target){
	var input = document.getElementById('passwordthree');
	if (input.getAttribute('type') == 'password') {
		input.setAttribute('type', 'text');
	} else {
		input.setAttribute('type', 'password');
	}
	return false;
}