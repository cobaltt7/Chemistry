document.getElementById("nav").innerHTML             =
	'<p class="center nav">The Periodic Table of Elements | <a href=" /index.html ">Table</a> / <a href=" / credits.html ">Credits</a> / <a href=" / chemistry.html ">More Chemistry</a></p>';
document.getElementsByTagName("footer")[0].innerHTML =
	'<p style = "font-size: 20pt;" > Coded with HTML, CSS, and JavaScript < /p>';
var pic                                              = "g";
document.cookie                                      = "test=yes";
document
	.getElementsByClassName("rdi")[0]
	.setAttribute("src", "images/redir_".concat(pic, ".jpg"));

function alertjsOO() {
	console.log(pic);
	if (pic == "g") {
		if (confirm(
				"The redirect alert is ON. Click 'OK' to keep it on or click 'Cancel' to turn it off.",
			)
		) {
		} else {
			pic = "r";
		}
	} else {
		if (pic == "r") {
			if (confirm(
					"The redirect alert is OFF. Click 'OK' to turn it on or click 'Cancel' to keep it off.",
				)
			) {
				pic = "g";
			}
		} else {
			console.log(
				"ERROR: variable 'pic' is defined as neather 'g' nor 'r'. It is defined as '".concat(
					pic,
					"'.",
				),
			);
			if (confirm(
					"The redirect alert is ON. Click 'OK' to keep it on or click 'Cancel' to turn it off.",
				)
			) {
				pic = "g";
			} else {
				pic = "r";
			}
		}
	}

	console.log(pic);
	localStorage.redirect = pic;
	document
		.getElementsByClassName("rdi")[0]
		.setAttribute("src", "images/redir_".concat(pic, ".jpg"));
	if (navigator.cookieEnabled) {
		alert("Preference saved.");
	} else {
		alert("Saved for now.");
	}
}

function alertjs(url) {
	if (confirm(
			"Redirecting to " +
				url.split("/")[0].concat("//", url.split("/")[2]),
		)
	) {
		open(url, "_blank");
		this.style.color = "#551A8B";
	} else {
	}
}
if (navigator.cookieEnabled) {
	alert(
		"Welcome to my Periodic Table! Click on a element to go to Wikipedia. To turn off the redirect alert, press the green arrow. Cookies are enabled, so your preferance will be saved throughout the site and until you clear cookies. Thanks for visiting!",
	);
} else {
	alert(
		"Welcome to my Periodic Table! Click on a element to go to Wikipedia. To turn off the redirect alert, press the green arrow. Cookies are NOT enabled, so your preferance will NOT be saved. I reccomend enabling/unblocking them so you will not have to turn off the alert on every page. Thanks for visiting!",
	);
}
