function init()
{
	$(".roTitle").prop('title', getGreetingExplained());
	$(".roTitle").html(getGreeting);
}

function getGreeting()
{
	var date = new Date();
	var hr = date.getHours();
	if (hr >= 18 || hr <= 3)
		return 'Bună seara!';
	else if (hr <= 11)
		return 'Bună dimineața!';
	else
		return 'Bună ziua!';
}

function getGreetingExplained()
{
	var date = new Date();
	var hr = date.getHours();
	if (hr >= 18 || hr <= 3)
		return "'Good evening!' in Romanian";
	else if (hr <= 11)
		return "'Good morning!' in Romanian";
	else
		return "'Good afternoon!' in Romanian";
}
