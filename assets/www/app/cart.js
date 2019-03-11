/*
 * JS for products generated by Appery.io
 */


Apperyio.getProjectGUID = function() {
    return 'ec7518f9-d042-4137-bf4f-6bad235470fc';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "medical",
    "location": "medical.html"
}, {
    "name": "products",
    "location": "products.html"
}, {
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "datacom",
    "location": "datacom.html"
}, {
    "name": "automotive",
    "location": "automotive.html"
}];









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



function ajax(){
    

    
  
   var product_name = produkt;
   var product ={};
    for (var i in produkt){
                
            product["product_"+i]=produkt[i];    
            }    
    
    try {
    $.ajax({
        url: 'https://noel777.com/Auto/feetch_more.php',
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'callback',
        data:product,
        success: function(data, status){
            $.each(data, function(i,item){ 
              
               
              $(".produkty").append('<div class="name_product" id='+item.Mark+'>'+item.Name+'</div><a class="delete" data-id="'+item.Mark+'">X</div>');
               $(".produkty").append('<input hidden name=zbozi type=text id="'+item.Mark+'" value="'+item.Mark+'">');
            
              $(".produkty").append(" <div class='image_product' data-id='"+item.Mark+"'><img width='100%' src=https://noel777.com/Auto/"+item.Mark+"/"+item.Mark+".jpg /> </div>" );
              $(".produkty").append('<div class="subcategory_product" id='+item.Mark+'>'+item.Subcategory+'</div>');
              
              $(".produkty").append('<div class="category_product" id='+item.Mark+'>'+item.Category+'</div>');
             
          
            });
        },
        error: function(data){
            console.log(data);
           $(".name").append('There was an error loading the data.');
        }
    });

}
catch (e) {

   logMyErrors(e); 
}



   try {
    $.ajax({
        url: 'https://noel777.com/Auto/stuff.php',
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 5000,
        data:product,
        success: function(data, status){
            $.each(data, function(i,item){ 
              
               
              $("#stuff_list").append('<option value='+item.email_address+'>'+item.Name_stuff+'</option>');
              
          
            });
        },
        error: function(data){
            console.log(data);
           $("#stuff_list").append('There was an error loading the data.');
        }
    });

}
catch (e) {

   logMyErrors(e); 
}

    
}





function products_js() {
    
    
    



    // On Load
    var products_onLoad = function() {
        products_elementsExtraJS();
        products_deviceEvents();
        products_windowEvents();
        products_elementsEvents();
    };
   
     // screen window events

    function products_windowEvents() {
        $('#cart').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
          $('#cart').on({
            pageshow: function(event) {
                try {
                    ajax();
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });
    };
    // device events
    function products_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function products_elementsExtraJS() {
        // screen (products) extra code
    };
    // screen elements handler
    function products_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#cart").on("pagebeforeshow", "#cart", function(event, ui) {
        Apperyio.CurrentScreen = "cart";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    products_onLoad();
};
$(document).off("pagecreate", "#cart").on("pagecreate", "#cart", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    
    $('#ocr_function').on('change', function() {
    var file_data = $('#ocr_function').prop('files')[0];   
    var form_data = new FormData();                  
    form_data.append('file', file_data);                            
    $.ajax({
                url: 'https://noel777.com/Auto/uploader.php',
                dataType: 'text',
                cache: false,
                contentType: false,
                processData: false,
                data: form_data,                         
                type: 'post',
                success: function(php_script_response){
                    alert(php_script_response); // display response from the PHP script, if any
                }
     });
});  
    
  
    
    
   
    $(".terms_agree").on("click", function(){
        $("#terms2").popup("open"); 
        setTimeout(function(){  $("#terms2").popup("close"); }, 5000);
    });
    
    $(".privacy_terms").on("click", function(){
        $("#terms1").popup("open"); 
        setTimeout(function(){  $("#terms1").popup("close"); }, 5000);
    });
    
    
    document.getElementById("checkbox_terms").required = true;
    document.getElementById("name_r").required = true;
    document.getElementById("company_r").required = true;
    document.getElementById("phone_r").required = true;
    document.getElementById("email_r").required = true;
  
    
   
    
    
    $(document).on("click", ".colors_blue", function(){
       
      $(".colors_orange").attr("id","opacity");
      $(".colors_red").attr("id","opacity");
      $(this).attr("id","");
      
      
      
      $("input#color_check").attr('value', 'COLD');
     
       
    });
    
     $(document).on("click", ".colors_orange", function(){
         
         $(".colors_blue").attr("id","opacity");
      $(".colors_red").attr("id","opacity");
      $(this).attr("id","");
       
     
      $("input#color_check").attr('value', 'WARM');
     
       
    });
    
     $(document).on("click", ".colors_red", function(){
      
      
         $(".colors_blue").attr("id","opacity");
      $(".colors_orange").attr("id","opacity");
      $(this).attr("id",""); 
     
      $("input#color_check").attr('value', 'WARM');
     
       
    });
    
    $(document).on("click", ".clear_basket", function(){
     produkt=[];        
      
       pocet = 0;       
      
      window.location.replace("startScreen.html");
 
    
   
    });
    
    $(document).off('click', ".delete");
    
   $(document).on("click", ".delete", function(){
       
      var produkt_delete = $(this).attr('data-id'); 
      var input = $("input#"+produkt_delete).attr('value');

    
      produkt = produkt.filter(pName => pName != produkt_delete);
      pocet = pocet - 1;
      $(".counter").html(pocet);

      $('div.produkty').children().each(function(i, obj) {
        if (obj.id == produkt_delete) obj.remove();
        if ($(obj).attr('data-id') == produkt_delete) obj.remove();
    });
       
    });
    $(".counter").html(pocet);
    products_js();
    
 
     
});