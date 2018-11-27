$(document).ready( function() {
	
	
	$("input[name=whereLive]").click(function() {
		var item = $('input[name=whereLive]:checked').val();

		if (item == "own") {
			hideHomeOptions();
		} else {
		    showHomeOptions();
	    }
	});
	
	$("input[name=previousPets]").click(function() {
		var item = $('input[name=previousPets]:checked').val();

		if (item == "neither") {
			hidePrevious();
		} else {
		    showPrevious();
	    }
	});
	
});

function hideHomeOptions() {
	
	$(".homeIrrelevant").hide();
	
}

function showHomeOptions() {
	$(".homeIrrelevant").show();
}

function hidePrevious() {
	
	$(".noPetsIrrelevant").hide();
	
}

function showPrevious() {
	$(".noPetsIrrelevant").show();
}

