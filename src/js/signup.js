/*
*	Signup
*/
$(document).ready(function(){
	$(".contact-enquiry__section .submit-field input").on("click", function(){
		var email = $(".contact-enquiry__section .contact-enquiry__section--email").val();
		var password = $(".contact-enquiry__section .contact-enquiry__section--password").val();
		var company = $(".contact-enquiry__section .contact-enquiry__section--company").val();
		var fullname = $(".contact-enquiry__section .contact-enquiry__section--fullName").val();

		var isEmail = isEmailValid(email);
		var isPassword = isPasswordValid(password);
		var isCompany = isCompanyValid(company);
		var isFullname = isNameValid(fullname)

		if (!(isEmail && isPassword && isCompany && isFullname)) return;

		var details = {
		    password: password,
		    name: fullname,
		    email: email,
		    orgname: company,
		    action: "signupCompleted"
		};
		$.ajax({
		  method: "POST",
		  url: "https://signup.bigpanda.io/api/signup",
		  data: details
		})
		.done(function( result ) {
			var form = '<form class="redirect-form" method="post" action="/signup-thanks"><input type="hidden" name="red" value="' +result.bpUrl + '"/></form>';
			jQuery('body').append(form);
			jQuery('.redirect-form').submit();
		});
	});
});

function isEmailValid(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(regex.test(email)){
  	$(".contact-enquiry__section .contact-enquiry__section--email").siblings(".error-field").hide();
  	return true;
  }else{
  	$(".contact-enquiry__section .contact-enquiry__section--email").siblings(".error-field").fadeIn(400);
  	return false;
  }
}
function isPasswordValid(password) {
    if(password.length < 8) {
    	$(".contact-enquiry__section .contact-enquiry__section--password").siblings(".error-field").fadeIn(400);
        return false;
    }
    $(".contact-enquiry__section .contact-enquiry__section--password").siblings(".error-field").hide();
    return true;
}
function isCompanyValid(company) {
	if (!company.match(/^[A-Za-z][A-Za-z0-9 ]*$/) || company.length > 80) {
        $(".contact-enquiry__section .contact-enquiry__section--company").siblings(".error-field").fadeIn(400);
        return false;
    }
    $(".contact-enquiry__section .contact-enquiry__section--company").siblings(".error-field").hide();
    return true;
}
function isNameValid(fullname) {
        var res = fullname.trim().split(" ");
        if (!res || res.length < 2) {
        	$(".contact-enquiry__section .contact-enquiry__section--fullName").siblings(".error-field").fadeIn(400);
            return false;
        }
        $(".contact-enquiry__section .contact-enquiry__section--fullName").siblings(".error-field").hide();
        return true;
}