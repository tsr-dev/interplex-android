/*
 * JS for Products_Entertainment_system generated by Appery.io
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
    "name": "startScreen",
    "location": "startScreen.html"
}, {
    "name": "Products_Entertainment_system",
    "location": "Products_Entertainment_system.html"
}, {
    "name": "automotive",
    "location": "automotive.html"
}, {
    "name": "products",
    "location": "products.html"
}, {
    "name": "A_Entertainment_Systems",
    "location": "A_Entertainment_Systems.html"
}, {
    "name": "datacom",
    "location": "datacom.html"
}, {
    "name": "A_Powertrain",
    "location": "A_Powertrain.html"
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

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}



function select(category_name, main_category){
    main_category = unescape(main_category);
    subcategory_name = unescape(category_name);
    var collumn=-1;
     try {
    $.ajax({
        url: 'http://10.70.1.148:8080/Serverfiles/select.php',
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'callback',
        data:{
        category: subcategory_name,
        main_category: main_category
        },

         success: function(data, status){

                     var count = data.length;


                     $(".tabs_sub").html('');

                    $.each(data, function(i,item){
                    // $("#form_list").append("<option value='"+item.Name+"'>"+item.Name+"</option>");

                      if(item.Segment=="Automotive"){
                           var kategorie =  replaceAll(item.Category," ","_");

                              if(kategorie=="Passenger_Comfort_And_Access")
                           {
                               kategorie="Passenger_Comfort";
                           }

                               if(kategorie=="Servers")
                           {
                               kategorie="Server";
                           }

                            var subkategorie =  replaceAll(item.Subcategory,"%20"," ");
                      $(".breadcrumb").html("<a href=startScreen.html>HOME</a> / <a href=automotive.html>"+item.Segment+"</a> / <a href=A_"+kategorie+".html>"+item.Category+"</a> / <a href='Products_Entertainment_system.html?category="+item.Subcategory+"&main_category="+item.Category+"'>"+item.Subcategory+"</a>" );
                      }

                       if(item.Segment=="Medical & Life Sciences"){

                           var kategorie =  replaceAll(item.Category," ","_");


                              if(kategorie=="Drug_Delivery_and_Diagnostics")
                           {
                               kategorie="Drug";
                           }

                             if(kategorie=="Surgical_and_Treatment")
                           {
                               kategorie="Surgical";
                           }

                            var subkategorie =  replaceAll(item.Subcategory,"%20"," ");
                      $(".breadcrumb").html("<a href=startScreen.html>HOME</a> / <a href=medical.html>"+item.Segment+"</a> / <a href=M_"+kategorie+".html>"+item.Category+"</a> / <a href='Products_Entertainment_system.html?category="+item.Subcategory+"&main_category="+item.Category+"'>"+item.Subcategory+"</a>" );
                      }

                       if(item.Segment=="Datacom & Telecom"){
                           var kategorie =  replaceAll(item.Category," ","_");

                              if(kategorie=="Servers")
                           {
                               kategorie="Server";
                           }
                            var subkategorie =  replaceAll(item.Subcategory,"%20"," ");
                      $(".breadcrumb").html("<a href=startScreen.html>HOME</a> / <a href=datacom.html>"+item.Segment+"</a> / <a href=D_"+kategorie+".html>"+item.Category+"</a> / <a href='Products_Entertainment_system.html?category="+item.Subcategory+"&main_category="+item.Category+"'>"+item.Subcategory+"</a>" );
                      }

                        collumn++;

                        /* if(c==total){

                                c=1;

                          }  */



                        var columnSide = '';

                        switch(collumn) {
                            case 0:
                                columnSide = 'left';
                                break;
                            case 1:
                                columnSide = 'center';
                                break;
                            case 2:
                                columnSide = 'right';
                                break;
                        }

                        $(".tabs_sub_" + columnSide).append("<div class='category_name_product'><a href='products_level.html?name="+item.Name+"&main_category="+item.Category+"&subcategory="+item.Subcategory+"'><img width='100%' src=http://10.70.1.148:8080/Serverfiles/thumbs/"+item.Mark+".jpg /></a><div class='name_cat'>"+item.Name+"</div></div>");

                        if ((i + 1) % 3 == 0) {
                           collumn = -1;
                       }

                        /*if (collumn==0){






                        }


                         if (collumn==1){



                            $(".tabs_sub_center").html("<div class='category_name_product'><a href=products.html?product="+item.Mark+"><img width='100%' src=http://10.70.1.148:8080/Serverfiles/"+item.Mark+"/"+item.Mark+".jpg /></a><div class='name_cat'>"+item.Name+"</div></div>");


                        }


                         if (collumn==2){
                            $(".tabs_sub_right").html("<div class='category_name_product'><a href=products.html?product="+item.Mark+"><img width='100%' src=http://10.70.1.148:8080/Serverfiles/"+item.Mark+"/"+item.Mark+".jpg /></a><div class='name_cat'>"+item.Name+"</div></div>");


                        } */

                     //  c++;



                    });
                },
        error: function(data){
            console.log(data);
           $(".name").append('There was an error loading the data.');
        }
    });

} catch (e) {

   logMyErrors(e); 
}    
    
    
}

function ajax(category_name, state, subcat, main_category){
  
    main_category = unescape(main_category);
  
     subcat =  unescape(subcat);
    category_name = unescape(category_name);
   // var c=1;
    var collumn=-1;
    
    try {
    $.ajax({
        url: 'http://10.70.1.148:8080/Serverfiles/feetch_products.php',
        type: "GET",
        dataType: 'jsonp',
        jsonp: 'callback',
        data:{
        subcat: subcat,
        main_category:  main_category,
        category: category_name,
        state: state
        },
        success: function(data, status){
            
             var count = data.length;
              
              
             $(".tabs_sub").html('');
              
            $.each(data, function(i,item){ 
                
              if(item.Segment=="Automotive"){
                   var kategorie =  replaceAll(item.Category," ","_");
                   
                      if(kategorie=="Passenger_Comfort_And_Access")
                   {
                       kategorie="Passenger_Comfort";
                   }
                   
                       if(kategorie=="Servers")
                   {
                       kategorie="Server";
                   }
                   
                    var subkategorie =  replaceAll(item.Subcategory,"%20"," ");
              $(".breadcrumb").html("<a href=startScreen.html>HOME</a> / <a href=automotive.html>"+item.Segment+"</a> / <a href=A_"+kategorie+".html>"+item.Category+"</a> / <a href='Products_Entertainment_system.html?category="+item.Subcategory+"&main_category="+item.Category+"'>"+item.Subcategory+"</a>" );
              }
              
               if(item.Segment=="Medical & Life Sciences"){
                   
                   var kategorie =  replaceAll(item.Category," ","_");
                   
                     
                      if(kategorie=="Drug_Delivery_and_Diagnostics")
                   {
                       kategorie="Drug";
                   }
                   
                     if(kategorie=="Surgical_and_Treatment")
                   {
                       kategorie="Surgical";
                   }
                   
                    var subkategorie =  replaceAll(item.Subcategory,"%20"," ");
              $(".breadcrumb").html("<a href=startScreen.html>HOME</a> / <a href=medical.html>"+item.Segment+"</a> / <a href=M_"+kategorie+".html>"+item.Category+"</a> / <a href='Products_Entertainment_system.html?category="+item.Subcategory+"&main_category="+item.Category+"'>"+item.Subcategory+"</a>" );
              }
              
               if(item.Segment=="Datacom & Telecom"){
                   var kategorie =  replaceAll(item.Category," ","_");
                   
                      if(kategorie=="Servers")
                   {
                       kategorie="Server";
                   }
                    var subkategorie =  replaceAll(item.Subcategory,"%20"," ");
              $(".breadcrumb").html("<a href=startScreen.html>HOME</a> / <a href=datacom.html>"+item.Segment+"</a> / <a href=D_"+kategorie+".html>"+item.Category+"</a> / <a href='Products_Entertainment_system.html?category="+item.Subcategory+"&main_category="+item.Category+"'>"+item.Subcategory+"</a>" );
              }
              
                collumn++;
               
                /* if(c==total){
                       
                        c=1;
                        
                  }  */
                
                
                
                var columnSide = '';
                    
                switch(collumn) {
                    case 0:
                        columnSide = 'left';
                        break;
                    case 1:
                        columnSide = 'center';
                        break;
                    case 2:
                        columnSide = 'right';
                        break;
                } 
                
                $(".tabs_sub_" + columnSide).append("<div class='category_name_product'><a href=products.html?product="+item.Mark+"><img width='100%' src=http://10.70.1.148:8080/Serverfiles/thumbs/"+item.Mark+".jpg /></a><div class='name_cat'>"+item.Name+"</div></div>");
                
                if ((i + 1) % 3 == 0) {
                   collumn = -1;
               }
                
                /*if (collumn==0){
                    
                    
                    
                    
                  
                   
                } 
                
                
                 if (collumn==1){
                     
                     
                      
                    $(".tabs_sub_center").html("<div class='category_name_product'><a href=products.html?product="+item.Mark+"><img width='100%' src=http://10.70.1.148:8080/Serverfiles/"+item.Mark+"/"+item.Mark+".jpg /></a><div class='name_cat'>"+item.Name+"</div></div>");
                    
                    
                } 
                
                
                 if (collumn==2){
                    $(".tabs_sub_right").html("<div class='category_name_product'><a href=products.html?product="+item.Mark+"><img width='100%' src=http://10.70.1.148:8080/Serverfiles/"+item.Mark+"/"+item.Mark+".jpg /></a><div class='name_cat'>"+item.Name+"</div></div>");
                    
                   
                } */
                  
             //  c++;  
              
             
              
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

function Products_Entertainment_system_js() {

    

    
    
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'Products_Entertainment_system';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var Products_Entertainment_system_onLoad = function() {
        Products_Entertainment_system_elementsExtraJS();
        Products_Entertainment_system_deviceEvents();
        Products_Entertainment_system_windowEvents();
        Products_Entertainment_system_elementsEvents();
    };
    // screen window events
    function Products_Entertainment_system_windowEvents() {
        $('#Products_Entertainment_system').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        
        $('#Products_Entertainment_system').on({
            pageshow: function(event) {
                try {
                   select(getAllUrlParams().category, getAllUrlParams().main_category);
                  // ajax(getAllUrlParams().category, 'category', '', getAllUrlParams().main_category);
                    
                   
                } catch (e) {
                    console.error(e);
                    hideSpinner();
                };
            },
        });
    };
    // device events
    function Products_Entertainment_system_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function Products_Entertainment_system_elementsExtraJS() {
        // screen (Products_Entertainment_system) extra code
    };
    // screen elements handler
    function Products_Entertainment_system_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#Products_Entertainment_system").on("pagebeforeshow", "#Products_Entertainment_system", function(event, ui) {
        Apperyio.CurrentScreen = "Products_Entertainment_system";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    Products_Entertainment_system_onLoad();
};
$(document).off("pagecreate", "#Products_Entertainment_system").on("pagecreate", "#Products_Entertainment_system", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    
    
   
    
    
 //   $(document).on("change","#form_list", function(){
                  
 //       ajax($("#form_list").val(), 'product', getAllUrlParams().category,getAllUrlParams().main_category);
// });
    
    $(".counter").html(pocet);
    Products_Entertainment_system_js();
});