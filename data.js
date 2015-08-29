$(function(){
    $.getJSON('data.json', function(data) {
        var template = $('#template').html();
        var html = Mustache.to_html(template, data);
        $('#target').html(html);
    });
})
