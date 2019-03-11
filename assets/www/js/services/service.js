/*
 * Security contexts
 */
/*
 * Service settings
 */
var Automotive_settings = {
    "database_id": "5bcd7b9e2e22d74cce3b5317"
}
/*
 * Services
 */
var Automotive_Products_list_service = new Apperyio.RestService({
    'url': 'https://api.appery.io/rest/1/db/collections/Products',
    'dataType': 'json',
    'type': 'get',
    'serviceSettings': Automotive_settings
        ,
    'defaultRequest': {
        "headers": {
            "X-Appery-Database-Id": "{database_id}",
            "X-Appery-Api-Express-Api-Key": ""
        },
        "parameters": {},
        "body": null
    }
});