/*!
* This file is part of a11y-guidelines | Our vision of mobile & web accessibility guidelines and best practices, with valid/invalid examples.
* Copyright (C) 2016  Orange SA
* See the Creative Commons Legal Code Attribution-ShareAlike 3.0 Unported License for more details (LICENSE file).**/
$(document).ready(function() {
      jQuery.extend(jQuery.validator.messages, {
            required: "Veuillez renseigner le champ : {0}."
      });
      
	jQuery("#formulaire").validate({
            errorContainer: "#globalErrorMessage",            

            rules: {                  
                  "votre-email":{
                        "required": true,
						"regex": /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
                  },
                  "destinaires": {
                        "required": true,
						"regex": /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*,{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/
                  },"delai":{
                        "required": true
                  }
            },
			messages: {
				    "votre-email": {
						required: "Erreur"
					},
				    "destinaires": {
						required: "Erreur"
					},
				    "delai": {
						required: "Erreur"
					}
			},

            submitHandler: function () { alert("Merci !");}
      });

      jQuery.validator.addMethod(
            "regex",
            function(value, element, regexp) {
                  if (regexp.constructor != RegExp) {
                        regexp = new RegExp(regexp);
                  } else if (regexp.global) {
                        regexp.lastIndex = 0;
                  }
                  return this.optional(element) || regexp.test(value);
            },
            function (regex, input) { 
			
				console.log($(input).attr("data-displayname"));
				if ($(input).attr("data-displayname")=="votre email") {
					 return jQuery.validator.format("Erreur");
				} else {
                  return jQuery.validator.format("Le format du champ {0}, n'est pas valide.", $(input).attr("data-displayname"));
				}
            }
      );
      	 
     $.validator.messages.required = function (param, input) {           
            return 'Le champ ' + $(input).attr("data-displayname") + ' est obligatoire.';
     }
	 
	   
});

function GetInputValue (item) {
	var listResult = document.getElementById("listResult");
    
	//ajout liste
	if (!listResult) {
		var list = document.getElementById("listFile");
	
		var newlistResult = document.createElement("ul");
		newlistResult.setAttribute('id', 'listResult');
		console.log(newlistResult);
		list.appendChild(newlistResult);
		var listResult = document.getElementById("listResult");
	}
	
	//ajout item liste
	  var newListItem = document.createElement("li");
	  var newListContent = document.createTextNode(item.value);
	  newListItem.appendChild(newListContent);
	listResult.appendChild(newListItem);
	
	//reset input value
	item.value = "";
	
	
}
     