var express = require('express');

express().use('/', express.static(__dirname)).listen(3000, function() {
	console.log('running');
});