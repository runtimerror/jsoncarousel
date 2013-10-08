var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
}
else {
	request = new ActiveXObject("Microsoft.HMLHTTP");
}
request.open('GET', 'data.xml');
request.onreadystatechange = function() {
	if (request.status === 200 && request.readyState === 4) {
		console.log(request.responseXML);
	}
}
request.send();