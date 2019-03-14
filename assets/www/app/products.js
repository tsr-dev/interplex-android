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


function checkImage(imageSrc, good, bad) {
    var img = new Image();
    img.onload = good; 
    img.onerror = bad;
    img.src = imageSrc;
}

function ajax(){
    
    

   
   
   var product_name = getAllUrlParams().product;
   var main_category = getAllUrlParams().Segment;

  
    
    try {
//    alert(main_category);
    $.ajax({
        url: 'http://web-dev.us/Interplex-backend/feetch.php',
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 5000,
        data:{
        product: product_name,
        main_category: main_category
        },
        success: function(data, status){
            $.each(data, function(i,item){
             
              $(".name").append(item.Name);
              
              if(item.Segment=="Automotive"){
                   var kategorie =  replaceAll(item.Category," ","_");
                   

                    var subkategorie =  replaceAll(item.Subcategory,"%20"," ");
              $(".breadcrumb").append("<a href=startScreen.html>HOME</a> / <a href=automotive.html>"+item.Segment+"</a> / <a href=A_"+kategorie+".html>"+item.Category+"</a> / <a href='Products_Entertainment_system.html?segment="+item.Segment+"&category="+item.Subcategory+"&main_category="+item.Category+"'>"+item.Subcategory+"</a>" );
              }


              
               if(item.Segment=="Medical & Life Sciences"){
                   
                  
                   
                   var kategorie =  replaceAll(item.Category," ","_");
                   
                   if(kategorie=="Drug_Delivery_and_Diagnostics"){
                     kategorie ="Drug";  
                   } 
                   
                    if(kategorie=="Surgical_and_Treatment"){
                     kategorie ="Surgical";  
                   } 
                   
                  
                   
                    var subkategorie =  replaceAll(item.Subcategory,"%20"," ");
              $(".breadcrumb").append("<a href=startScreen.html>HOME</a> / <a href=medical.html>"+item.Segment+"</a> / <a href=M_"+kategorie+".html>"+item.Category+"</a> / <a href='Products_Entertainment_system.html?category="+item.Subcategory+"&Segment="+item.Segment+"'>"+item.Subcategory+"</a>" );
              }
              
               if(item.Segment=="Datacom & Telecom"){
                   var kategorie =  replaceAll(item.Category," ","_");
                    var subkategorie =  replaceAll(item.Subcategory,"%20"," ");
              $(".breadcrumb").append("<a href=startScreen.html>HOME</a> / <a href=datacom.html>"+item.Segment+"</a> / <a href=D_"+kategorie+".html>"+item.Category+"</a> / <a href='Products_Entertainment_system.html?category="+item.Subcategory+"&Segment="+item.Segment+"'>"+item.Subcategory+"</a>" );
              }
              
             
          
              $(".enquiry_form").append("<a href=# class=enquiry data-id="+item.Mark+">ADD TO ENQUIRY</a>" ); 
            
             $(".image").append("<img id='first_image1' width='100%' data-src=http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+".jpg src=http://web-dev.us/Interplex-backend/thumbs/"+item.Mark+".jpg />" );  
         
         
         checkImage(("http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_1.jpg"), function(){ $(".gallery").append("<img id='first_image' width='45%;float:left;margin-right:10px;' src=http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_1.jpg />" );}, function(){ }  );    
            
        checkImage(("http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_2.jpg"), function(){ $(".gallery").append("<img id='first_image' width='45%;float:left;margin-right:10px;' src=http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_2.jpg />" );}, function(){ }  );  
           
    
        
            
             
             checkImage(("http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_3.jpg"), function(){ $(".thumb").append("<img id='first_image' width='15%;float:left;margin-left:15px;' src=http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_3.jpg />");}, function(){ }  );
             
              checkImage(("http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_4.jpg"), function(){ $(".thumb").append("<img id='first_image' width='15%;float:left;margin-left:15px;' src=http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_4.jpg />");}, function(){ }  );
              
               checkImage(("http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_5.jpg"), function(){ $(".thumb").append("<img id='first_image' width='15%;float:left;margin-left:15px;' src=http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_5.jpg />");}, function(){ }  );
               
               checkImage(("http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_6.jpg"), function(){ $(".thumb").append("<img id='first_image' width='15%;float:left;margin-left:15px;' src=http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_6.jpg />");}, function(){ }  ); 
               
               checkImage(("http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_7.jpg"), function(){ $(".thumb").append("<img id='first_image' width='15%;float:left;margin-left:15px;' src=http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_7.jpg />");}, function(){ }  ); 
               
               checkImage(("http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_8.jpg"), function(){ $(".thumb").append("<img id='first_image' width='15%;float:left;margin-left:15px;' src=http://web-dev.us/Interplex-backend/"+item.Mark+"/"+item.Mark+"_8.jpg />");}, function(){ }  ); 
             
              $(".description").append(item.Description);
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
        $('#products').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
          $('#products').on({
            pageshow: function(event) {
                try {
                    ajax();
                    $(".counter").html(pocet);  
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
    $(document).off("pagebeforeshow", "#products").on("pagebeforeshow", "#products", function(event, ui) {
        Apperyio.CurrentScreen = "products";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    products_onLoad();
};
$(document).off("pagecreate", "#products").on("pagecreate", "#products", function(event, ui) {
    Apperyio.processSelectMenu($(this));
$(document).off("click", ".enquiry");   

$(document).on("click", "#first_image", function(){
     
     var src = $(this).attr('src');
     $("#img01").attr("src",src);
     
    $("#myModal").css("display", "block"); 
    $("#exit").css("display", "block"); 
     
     
    });
    
$(document).on("click", "#first_image1", function(){
     
     var src = $(this).attr('data-src');
     $("#img01").attr("src",src);
     
    $("#myModal").css("display", "block"); 
    $("#exit").css("display", "block"); 
     
     
    });    
    
   
$(document).on("click", "#exit", function(){
     
     
    $("#myModal").css("display", "none"); 
    $("#exit").css("display", "none");  
     
    });   
    
   
    products_js();
   
   $(document).on("click", ".enquiry", function(){

       
      produkt[pocet]= $(this).attr('data-id');

     $(".success").slideDown(); 
     pocet = pocet+1;   
     $(".counter").html(pocet); 
      
    });
    
    
});