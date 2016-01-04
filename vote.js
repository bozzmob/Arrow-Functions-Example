	function validateAge () {
		var name = document.getElementById('name');
		var age = document.getElementById('age');
		var result = document.getElementById('result');
		var votingRight = ageval => ageval > 18 ? name.value +" is Eligible To Vote" : name.value +" is Not Eligible To Vote";
		result.innerHTML = votingRight(age.value);
	}

	function emptyArrowFunc() {
		var empty = () => {};
		document.getElementById('emptyAF').innerHTML = "Empty Arrow Function returns "+empty;
	}

	function orderOfFunctions () {
		emptyArrowFunc();
		document.getElementById('heading').innerHTML = setHeading();
	}

	function setHeading(){
		return (() => "Voting Eligibility")();
	}