<script>
   		
	function results(){
		// var love_data = Math.random() * 100;
		// love_data = Math.ceil(love_data);
		var love_data = Math.ceil(Math.random() * 100 + 1);
		document.getElementById('result').value = love_data + "%";

		if((love_data >=1) && (love_data <=25)){
			document.getElementById('tips').value = "";
			document.getElementById('tips').value = "Your love is not strong enough";
		}

		if((love_data >=26) && (love_data <=50)){
			document.getElementById('tips').value = "";
			document.getElementById('tips').value = "Your love is complicated";
		}

		if((love_data >=51) && (love_data <=80)){
			document.getElementById('tips').value = "";
			document.getElementById('tips').value = "Your love is strong";
		}

		if((love_data >=81) && (love_data <=99)){
			document.getElementById('tips').value = "";
			document.getElementById('tips').value = "Your love is so strong that no one can break it :)";
		}

		if((love_data ==100) || (love_data ==101)){
			document.getElementById('tips').value = "";
			document.getElementById('tips').value = "Your love is unconditional";
		}		

	}

   	</script>
