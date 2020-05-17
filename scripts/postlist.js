var ind = -1;
function showModal(postInd) {
	ind = postInd;
	$('#exampleModal2').modal('toggle');
}
function deletePost() {
	document.getElementsByClassName('board1')[ind - 1].style.display = 'none';
	$('#exampleModal2').modal('toggle');
	ind = -1;
}