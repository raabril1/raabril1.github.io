/^
 *   @TODO Once a server is estabished, this funtion can be used to send the email.
 */
function sendForm() {
	
	var url = "blah.php";
	
	var applicantName = $("#applicantName").val();
    var email = "rachel@breathe.com";
	
	
	var data = {
		applicantName : applicantName,
		email : email
		
	}

    $.ajax({
        url : url,
        type : "GET",
        data : data
    }).done(function(data) {
		
	});
	