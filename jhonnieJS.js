$(document).ready(function () { // Once the document has loaded
    $('#work').show(); // Show wor as the default screen
    
    $('#contact').hide(); // Hide everything else
    $('#statement').hide(); // Hide everything else
    
    $('#workButton').click(function () {
        $('#contact').hide();
        $('#statement').hide();
        $('#work').show();
    });
    
    $('#contactButton').click(function () {
        $('#work').hide();
        $('#statement').hide();
        $('#contact').show();
    });
    
    $('#statementButton').click(function () {
        $('#work').hide();
        $('#contact').hide();
        $('#statement').show();
    });
    
    var url = 'https://www.youtube.com/embed/{ID HERE}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist={ID HERE};';
    $('#env').click(function () {
        $(".backgroundImage").css("background-image", "url('env.png')");
        $('#videoIframe').attr('src', '');
    });
    $('#warehouse').click(function () {
        var id = '8DzrOQCEMTw';
        var myUrl = url.replace('{ID HERE}', id).replace('{ID HERE}', id);
        $('#videoIframe').attr('src', myUrl);
        $(".backgroundImage").css("background-image", "url('')");
    });
    $('#visr').click(function () {
        var id = 'nHtP2ydhAPI';
        var myUrl = url.replace('{ID HERE}', id).replace('{ID HERE}', id);
        $('#videoIframe').attr('src', myUrl);
        $(".backgroundImage").css("background-image", "url('')");
    });
    $('#unity').click(function () {
        var id = 'SIkB64oYPJU';
        var myUrl = url.replace('{ID HERE}', id).replace('{ID HERE}', id);
        $('#videoIframe').attr('src', myUrl);
        $(".backgroundImage").css("background-image", "url('')");
    });
});
