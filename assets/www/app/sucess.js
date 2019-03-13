/*
 * JS for startScreen generated by Appery.io
 */


function getAllUrlParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i=0; i<arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // in case params look like: list[]=thing1&list[]=thing2
      var paramNum = undefined;
      var paramName = a[0].replace(/\[\d*\]/, function(v) {
        paramNum = v.slice(1,-1);
        return '';
      });

      // set parameter value (use 'true' if empty)
      var paramValue = typeof(a[1])==='undefined' ? true : a[1];

      // (optional) keep case consistent
      

      // if parameter name already exists
      if (obj[paramName]) {
        // convert value to array (if still string)
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        // if no array index number specified...
        if (typeof paramNum === 'undefined') {
          // put the value on the end of the array
          obj[paramName].push(paramValue);
        }
        // if array index number specified...
        else {
          // put the value at that index number
          obj[paramName][paramNum] = paramValue;
        }
      }
      // if param name doesn't exist yet, set it
      else {
        obj[paramName] = paramValue;
      }
    }
  }

  return obj;
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}




function ajax(){
    
    
    
    var company = getAllUrlParams().company;
    var name = getAllUrlParams().name;
    var position = getAllUrlParams().position;
    var request_catalogue = getAllUrlParams().request_catalogue;
    var request_quotition = getAllUrlParams().request_quotition;
    var request_visit = getAllUrlParams().request_visit;
    var request_Samples = getAllUrlParams().request_Samples;
    var adress = getAllUrlParams().adress;
    var phone = getAllUrlParams().phone;
    var email = getAllUrlParams().email;
    var zbozi = getAllUrlParams().zbozi;
    var stuff = getAllUrlParams().stuff;
     var terms = getAllUrlParams().terms;
     var lead = getAllUrlParams().lead;
    
    var colors = getAllUrlParams().colors;
     var comments = getAllUrlParams().comments;
    
    var interestedproducts = getAllUrlParams().interestedproducts;
    var request = getAllUrlParams().request;
   if(company == ""){
      $(".message_red").append('You must fill Company name');  
      return false; 
   }else if(name ==""){
    $(".message_red").append('You must fill Name');  
      return false;     
   }else if(phone ==""){  
    $(".message_red").append('You must fill Phone');  
      return false;     
   }else if(email ==""){
       $(".message_red").append('You must fill Email');  
      return false; 
   }else{
 
   
  
    try {
    $.ajax({
        url: 'http://47.102.96.129/interplex-backend/order.php',
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 5000,
        data:{
        zbozi: zbozi,    
        company: company,
        lead:lead,
        request_catalogue: request_catalogue,
        request_quotition: request_quotition,
        request_visit: request_visit,
        request_Samples: request_Samples,
        name: name,
        position: position,
        adress: adress,
        phone: phone,
        email: email,
        stuff:stuff,
        colors:colors,
        interestedproducts: interestedproducts,
        comments: comments,
        request: request


        },
        success: function(data, status){
            
            if(lead===""){
            $(".change").append('<a href="cart.html">CONTACT FORM</a>');   
            }else{
            $(".change").append('<a href="lead_form.html">LEAD FORM</a>');    
            }
          
             $(".message").append('Your request has been successfully submitted'); 
           window.setTimeout(function () {
        location.href = "startScreen.html";
    }, 2000);
            
        },
        error: function(data){
            console.log(data);
           $(".name").append('Oops! There was a technical glitch. Please resubmit your request');
        }
    });

}
catch (e) {

   logMyErrors(e); 
}

}
    
}

function startScreen_js() {


    /*
     * Events and handlers
     */
    // On Load
    var startScreen_onLoad = function() {
        startScreen_elementsExtraJS();
        startScreen_deviceEvents();
        startScreen_windowEvents();
        startScreen_elementsEvents();
    };
    // screen window events
    function startScreen_windowEvents() {
        $('#sucess').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
      
          $('#sucess').on({
            pageshow: function(event) {
                try {
                    ajax();
                   produkt=[];
                   pocet=0;
                   
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });  
        
    };
    // device events
    function startScreen_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function startScreen_elementsExtraJS() {
        // screen (startScreen) extra code
    };
    // screen elements handler
    function startScreen_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#sucess").on("pagebeforeshow", "#sucess", function(event, ui) {
        Apperyio.CurrentScreen = "sucess";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    startScreen_onLoad();
};
$(document).off("pagecreate", "#sucess").on("pagecreate", "#sucess", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    produkt=[];
    pocet=0;
    
    $(".counter").html(pocet); 
    startScreen_js();
    
});