
        $(document).on("change", "input[type='file']", function(event) {
          console.log(event);
          var fileInput = event.target;
          if (fileInput.files[0]) {
            var FR = new window.FileReader();
            var url = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCBCjOcNuBN_-HeG8osAhGOvaKFITszMT8";
            FR.addEventListener("load", function (e) {
                console.log(e);
                var b64data = e.target.result.split(',')[1];
                $.ajax({
                    url: url,
                    type: "POST",
                    contentType: "application/json",
                    dataType: "json",
                    data: JSON.stringify({
                        requests: [{
                            image: {content: b64data},
                            features: {type: 'TEXT_DETECTION', maxResults: 1}
                        }]
                    }),
                    success: function(response) {
                        console.log(response);
                        var text = response.responses[0].textAnnotations && response.responses[0].textAnnotations[0].description || '';
                        if (text) {
                            var url = 'https://language.googleapis.com/v1beta1/documents:analyzeEntities?key=AIzaSyC3pdG61NEwkV9W9aY9rd_KXlz6ZNbajsU';
                            $.ajax({
                                url: url,
                                type: "POST",
                                contentType: "application/json",
                                dataType: "json",
                                data: JSON.stringify({
                                    document: {
                                        type: "PLAIN_TEXT",
                                        content: text
                                    },
                                    encodingType: "UTF8"
                                }),
                                success: function(response) {
                                    console.log(response);
                                    var required_entities = {
                                        ORGANIZATION: '',
                                        PERSON: '',
                                        LOCATION: '',
                                    }
                                    for (var entity of response['entities']) {
                                        var type = entity.type;
                                        if (type in required_entities) {
                                            required_entities[type] += entity.name;
                                        }
                                    }
                                    console.log(required_entities);
                                    //$("input[name='company']").val(required_entities.ORGANIZATION);
                                    $("input[name='name']").val(required_entities.PERSON);
                                    //$("input[name='adress'").val(required_entities.LOCATION);
                                    //$("input[name='address'").val(required_entities.LOCATION);
                                }
                            });
                            var emailMatch = text.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
                            var email = emailMatch && emailMatch[0] || "";
                            // German
                            var phoneMatch = text.match(/^(?:([+][0-9]{1,2})+[ .-]*)?([(]{1}[0-9]{1,6}[)])?([0-9 .-/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/);
                            // US
                            var phoneMatch = phoneMatch || text.match(/((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7})|([0-9]{4}\s[0-9]{4}))/);
                            var phone = phoneMatch && phoneMatch[0] || "";
                            $("input[name='email']").val(email);
                            $("input[name='phone']").val(phone);
                        }
                    }
                });
            });
            FR.readAsDataURL(fileInput.files[0]);
          }
      });

      $(document).on('click', '.clear_basket', function() {
        $('form#kosik').trigger('reset');
        produkt.length = 0;
        pocet = 0;
      });