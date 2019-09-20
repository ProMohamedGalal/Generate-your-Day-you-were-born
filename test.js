/* eslint-disable no-unused-vars */
/*jslint browser:true, evil: true */
/*jslint sloppy:true, white:true, browser:true, regexp: true */
/* eslint-env browser */
/* eslint-env es6 */
/* eslint-disable no-console */
/* eslint-disable */
/*global 
const, alert, confirm,  console, Debug, opera, prompt, WSH ,switch, case, console, $, continue, clearInterval, clearTimeout, document, event, FileReader, FormData, history, localStorage, location, name, navigator, screen, sessionStorage, setInterval, setTimeout, Storage, URL, window, XMLHttpRequest, emit, getRow, isArray, log, provides, registerType, require, send, start, sum, toJSON, Buffer, clearImmediate, clearInterval, clearTimeout, console, exports, module, process, require, setImmediate, setInterval, setTimeout, URL, URLSearchParams, 
*/
/* eslint-disable no-console */
/*jslint plusplus: true */

var Generate = document.getElementById("Generate"),
	mainDiv = document.getElementById("main"),
	userDate = document.getElementById("userDate"),
	GenerateYourDay = document.getElementById("GenerateYourDay"),
	theDay = document.getElementById("theDay");
Generate.onclick = function() {
	mainDiv.style.display = "block";
	var yourMonth = document.getElementById("yourMonth").value,
		yourDayN = document.getElementById("yourDayN").value,
		yourYear = document.getElementById("yourYear").value,
		x = new Date(yourMonth + yourDayN + ", " + yourYear),
		c = x.toString(),
		v = c.slice(3),
		getDay = c.slice(0, 3);
	if (yourMonth >= 0) {
		userDate.innerHTML =
			"this Field Can not Be Zero Or number So It Must Be String (Month's name)";
	} else if (yourMonth === "") {
		userDate.innerHTML =
			"this Field Can not Be Empty So It Must Be String (Month's name)";
	} else if (yourMonth < 0) {
		userDate.innerHTML =
			"this Field Can not Be Negative So It Must Be String (Month's name)";
	} else {
		userDate.innerHTML = v;
	}
	GenerateYourDay.onclick = function() {
		"use strict";
		theDay.innerHTML = getDay;
	};
};
