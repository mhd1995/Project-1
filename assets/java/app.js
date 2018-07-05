<<<<<<< HEAD
=======
function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function displaySearch()
{
    var song = $('#favSong').val().trim();
    var artist = $('#favArtist').val().trim();
    var queryURL = 'http://api.onemusicapi.com/20151208/track?user_key=e0209eb6caec689f7566faf9cfb6e44b&title='+song+'&artist='+artist;
    $.ajax({
        url: queryURL,
        method: 'GET'
    })

    .done(function(response)
    {
        console.log(response);
        $('#songView').empty();
        var results = response.data;
        for(var i=0; i<results.length; i++)
        {
            var songDiv= $('<div>');
            songDiv.addClass('gifDiv');
            var songImg =$('<img>');
            songImg.attr('src',results[i]);//apijsoncall. to get imageurl)
            songImg.addClass('songImage');
            songDiv.append(songImg);
            $('#songDiv').prepend(songImg);

        }
    })

};
$(document).on('click', 'submitButton', displaySearch);
>>>>>>> 5fedf9a5a1281c94d0e65933b7919b0dd340d29a
