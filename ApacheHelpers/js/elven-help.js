$(document).ready(function() {
	'use strict';
	$('table').addClass('table table-striped table-hover');
	
	$('#getPresidents').click(getPresidents);

	function getPresidents() {
		$.getJSON('/cgi-bin/get-presidents.py', function(presidents) {
			presidents.forEach(function(president) {
				$('#bar').append('<li>' + president[1] + ' ' + president[2] + '</li>');
			});
		})
	}
	
	$('.navbar-nav li.trigger-collapse a').click(function(event) {
        $('.navbar-collapse').collapse('hide');
    });
});
