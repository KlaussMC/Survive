(function () {
	'use strict';

	window.vars = {};

	vars.startGame = function () {
		var canvas = document.querySelector("#gameCanvas"),
			w = canvas.width,
			h = canvas.height,
			c = canvas.getContext("2d")

		c.fillStyle = '#5a5';
		c.fillRect(0, 0, w, h);
	}

	window.addEventListener("DOMContentLoaded", e => vars.startGame())
})()
