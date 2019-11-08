		function drop_up(n) {
			let dropm = document.getElementsByClassName("dm");
			if (dropm[n].style.display === "block") {
				dropm[n].style.display = "none";
			} else {
				dropm[n].style.display = "block";
			}
		}

		function drop_up2() {
			let dropm2 = document.getElementById("main-menu");
			if (dropm2.style.display === "flex") {
				dropm2.style.display = "none";
			} else {
				dropm2.style.display = "flex";
			}
		}