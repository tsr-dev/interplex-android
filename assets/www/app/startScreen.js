/*
 * JS for startScreen generated by Appery.io
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

function startScreen_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.mappings["startScreen_restservice1_onbeforesend_mapping_0"] = {
        "homeScreen": "startScreen",
        "directions": [
            {
                "to_name": "restservice1",
                "to_type": "SERVICE_REQUEST",
                "to_default": {
                    "headers": {
                        "X-Appery-Database-Id": "{database_id}"
                    },
                    "parameters": {},
                    "body": null
                },
                "mappings": []
            }
        ]
    };
    Apperyio.datasources = Apperyio.datasources || {};
    window.restservice1 = Apperyio.datasources.restservice1 = new Apperyio.DataSource(Automotive_Products_list_service, {
        "onBeforeSend": function(jqXHR) {
            Apperyio.processMappingAction(Apperyio.mappings["startScreen_restservice1_onbeforesend_mapping_0"]);
        },
        "onComplete": function(jqXHR, textStatus) {
        },
        "onSuccess": function(data) {},
        "onError": function(jqXHR, textStatus, errorThrown) {}
    });
    Apperyio.CurrentScreen = 'startScreen';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
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
        $('#startScreen').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
        
        
    };
    // device events
    function startScreen_deviceEvents() {
        document.addEventListener("deviceready", function() {
            navigator.splashscreen.hide();
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
    $(document).off("pagebeforeshow", "#startScreen").on("pagebeforeshow", "#startScreen", function(event, ui) {
        Apperyio.CurrentScreen = "startScreen";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    startScreen_onLoad();
};
$(document).off("pagecreate", "#startScreen").on("pagecreate", "#startScreen", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    $(".counter").html(pocet);
    startScreen_js();
});