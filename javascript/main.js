/*Add API*/

function toAPI() {
var url = "https://api.giphy.com/v1/gifs/search?q='random'&api_key=jYPiaqlS3ryNTKLPNQZkThcsxw2SqKDC"; // ===> API Key

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load', data => {
 var resource = data.target.response;
 pushToDOM(resource);
});
}

/*Push to DOM HTML*/
function pushToDOM(resource) {
	console.log(counter + " +1 GIF");
	var response = JSON.parse(resource);
 	var imageURLs = response.data;
 	var i = Math.floor(Math.random()*imageURLs.length);
 	var src = imageURLs[i].images.fixed_height.url;
 	var container = document.querySelector('.js-container');
	container.innerHTML =  "<img src='" + src + "' class='container-image'/>";


} // ====> function to push GIF and showing to container

/*Add GIF showing interval,  1 GIF = 5 second*/
let tvkuInterval = setInterval(toAPI, 5000);

let counter = 0;

let counterInterval = setInterval(() => {
	counter += 1;
	if (counter === 6640) {
		clearInterval(tvkuInterval);
		document.querySelector('.js-container').innerHTML = "<h1>Just showing 5 GIFs , reload to show again</h1>";
	}
}, 1); // ====> IF showing 5 gif , then stopped and add alert