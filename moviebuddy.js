var blacklist = [
    ': Director\'s Cut - A Most Wanted Mondays Presentation',
    ': An IMAX 3D Experience®',
    '- A Sinister Cinema Presentation'
];

var blacklistRegexp = new RegExp('('+blacklist.join('|')+')');

var findTomato = function (title, tomatoes) {
    var mostSimilar = _(tomatoes).min(function(tomato){
        return Levenshtein(title, tomato.title);
    });

    if (Levenshtein(title, mostSimilar.title) < 3) {
        return mostSimilar;
    }
};

var injectRatings = function(tomatoes){
    $('.movie-link h3').each(function(i, el){
        var title = $(el).text().replace(blacklistRegexp, '').trim();
        var tomato = findTomato(title, tomatoes);
        if (tomato) {
            $(el).closest('.moviedetailsmaininfo').prepend(Handlebars.templates.ratings(tomato.ratings));
        }
    });
}

$(function(){
    var requestInTheatres = $.getJSON("//api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=20&page=1&country=ca&apikey="+apiKey);
    var requestOpeningMovies = $.getJSON("//api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?limit=20&country=ca&apikey="+apiKey);
    $.when(requestInTheatres, requestOpeningMovies)
    .done(function (data1, data2) {
        var tomatoes = _.union(data1[0].movies, data2[0].movies);
        console.log(tomatoes);
        injectRatings(tomatoes);
    });
});