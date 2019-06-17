function getData(){
        //$('#action').html("Authenticating...");
        var username = $('#username').val();
        var password = $('#password').val();
        var message = JSON.stringify({
                "username": username,
                "password": password
            });

        $('#loading').show();
        $('#ok').hide();
        $('#canc').hide();

        //$('#loading').style.display = "none";

        $.ajax({
            url:'/authenticate',
            type:'POST',
            contentType: 'application/json',
            data : message,
            dataType:'json',
            success: function(response){
                alert(JSON.stringify(response));
                //$('#action').html(response['statusText']);
                $('#loading').hide();
                $('#ok').show();
                $('#canc').hide();
                //var url = 'http://' + document.domain + ':' + location.port + '/static/chat.html?username=rmosque';
                //$(location).attr('href',url);
            },
            error: function(response){
                alert(JSON.stringify(response));

                //$('#action').html(response['statusText']);
                if(response['status'] ==401)
                {
                    $('#loading').hide();
                    $('#ok').hide();
                    $('#canc').show();
                } else {
                    $('#loading').hide();
                    $('#ok').show();
                    $('#canc').hide();

                //username = response['responseText']

                 //var url = 'http://' + document.domain + ':' + location.port + '/static/chat.html?username=' + username;
                 //$(location).attr('href',url);
                }
            }
        });
    }
