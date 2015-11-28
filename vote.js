	function validateAge () {
		var name = document.getElementById('name');
		var age = document.getElementById('age');
		var result = document.getElementById('result');
		var votingRight = ageval => ageval > 18 ? true : false;
		var vr = votingRight(age);
		if(vr)
		{
			console.log("inside if "+vr);
			result.innerHTML = name.value +"\t is Eligible To Vote";
		}
		else
		{
			console.log("inside else "+vr);
			result.innerHTML = name.value +"\t is Not Eligible To Vote";
		}	
	}