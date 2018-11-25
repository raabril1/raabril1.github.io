
/**
 * 
 */
$(document).ready( function() {
    
	runAdoptapetApi();
	
});

/**
 * 
 * @returns
 */
function runAdoptapetApi() {
	
	$(".item--big").off("click");
	
	// Get the URL
	var url = "https://api.adoptapet.com/search/pets_at_shelter"; 
	
	/*
	 * Test call: https://api.adoptapet.com/search/pets_at_shelter?key=8b9b5134f7310508671a1f68225751ad&shelter_id=88921&output=json
	 */
	
	// Set the variables to pass
	var data = {
			key : "8b9b5134f7310508671a1f68225751ad",
			shelter_id : "88921",
			output : "json"
				
	}
	
	var petDialog = $( "#dogDetailsDialog" ).dialog({
	      autoOpen: false,
	      height: 400,
	      width: 350,
	      modal: true
	    });
	
	$.ajax({
        url : url,
        type : "GET",
        data : data,
        dataType : "json"
    }).done(function(data) {
    	
    	var pets = data.pets;
    	
    	//var smallList = $("#items--small");
    	var bigList = $("#items--big");
    	
    	$.each(pets, function(index,element) {
    		var smallImage = element.results_photo_url;
    		var largeImage = element.large_results_photo_url;
    		var petName = element.pet_name;
			var petURL = element.details_url;
			var petGender = element.sex;
			var petAge = element.age;
			
			if (petGender == "m") {
				petGender = "Male";
			} else {
				petGender = "Female";
			}
			
			if (petAge == "young") {
				petAge = "Young";
			} else if (petAge == "puppy"){
				petAge = "Puppy";
			} else if (petAge == "senior"){
				petAge = "Senior";
			} else {
				petAge = "Adult";
			}
    		
    		var bigListItem = '<li class="item--big" detailsUrl="' + petURL  + '" ><img src="'  + largeImage + '" alt="" /><p class="dogNamePreview">' + petName + '</p><p>' + petGender + '<br>' + petAge + '</p></li>';
    		
    		$(bigList).append(bigListItem);
    	});
    	
    	
    	
    	$(".item--big").on("click", function() {
    		var detailsUrl = $(this).attr("detailsUrl");
			
    		
    		getPetDetails(detailsUrl, petDialog);
    	})

    });	
}

function getPetDetails(detailsUrl, petDialog) {
	
	console.log("Clicked: " + detailsUrl);
	
	
	
	var data = {}
	
	$.ajax({
        url : detailsUrl,
        type : "GET",
        data : data,
        dataType : "json"
    }).done(function(data) {
    	
    	var pet = data.pet;
		
		var name = pet.pet_name;
		var size = pet.size;
		var age = pet.age;
		var breed = pet.primary_breed;
		var secondaryBreed = pet.secondary_breed;
		var gender = pet.sex;
		var permLink = pet.pet_details_url;
		
		if (secondaryBreed != null){
				breed = breed + ' & ' + secondaryBreed;
			}
			else {
				breed = breed;
			}
			
		var petImages = pet.images[0];
		var petURL = petImages.original_url;
		
		

    	
		
    	$("#dogName").html(name);
		$("#dogSize").html(size);
		$("#dogAge").html(age);
		$("#dogBreed").html(breed);
		$("#dogGender").html(gender);
		$("#dogLink").attr("href", permLink);
		$("#dogPic").attr("src", petURL);
		
		
    });
	
	petDialog.dialog("open");
	
}



