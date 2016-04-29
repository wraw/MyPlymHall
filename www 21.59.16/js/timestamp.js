function DOMLoaded()	{

	document.addEventListener("deviceready", phonegapLoaded, false);

}

function phonegapLoaded()	{

	navigator.geolocation.getCurrentPosition(onSuccess);
	
}

function onSuccess(position)	{

	alert("Timestamp: " + new Date(position.timestamp)	);
	
}