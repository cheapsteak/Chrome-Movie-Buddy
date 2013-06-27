var blacklist = [
    ': Director\'s Cut - A Most Wanted Mondays Presentation',
    ': An IMAX 3D Experience®',
    ': The IMAX Experience®',
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

var namespaceClasses = function (classes) {
    return classes.map(function (mbclass) {return "mb--" + mbclass;}).join(' ');
};

var prepareData = function (tomato, classes) {
    return {
        audience_score: tomato.ratings.audience_score,
        critics_score: tomato.ratings.critics_score !== -1 ? tomato.ratings.critics_score : null,
        critics_rating: tomato.ratings.critics_rating,
        audience_rating: tomato.ratings.audience_rating || "WantToSee",
        link: tomato.links.alternate,
        title: tomato.title,
        classes: namespaceClasses(classes)
    };
};

var injectRatings = function(tomatoes){
    switch (namespace) {
        case "cineplex":

            //first on top : http://cineplex.com/Theatres/TheatreDetails/Cineplex-Cinemas-Mississauga-formerly-Coliseum-Mississauga-.aspx
            $('.FFEC-Display').css('position','relative');
            $('.FFEC-Display').each(function(i, el){
                var title = $(el).find('h3').text().replace(blacklistRegexp, '').trim();
                var tomato = findTomato(title, tomatoes);
                var classes = ["poster-width", "overlay"];
                var templateData = tomato ? prepareData(tomato, classes) : { query: title, classes: namespaceClasses(classes) };
                $(el).find('.movie-link').prepend(Handlebars.templates.ratings(templateData));
            });
            //http://cineplex.com/Theatres/TheatreDetails/Cineplex-Cinemas-Mississauga-formerly-Coliseum-Mississauga-.aspx
            $('.Listing .moviedetailsmaininfo').css('position', 'relative');
            $('.Listing .moviedetailsmaininfo').each(function(i, el){
                var title = $(el).find('h3').text().replace(blacklistRegexp, '').trim();
                var tomato = findTomato(title, tomatoes);
                var classes = ["inline", "poster-width", "text-center", "below-poster"];
                var templateData = tomato ? prepareData(tomato, classes) : { query: title, classes: namespaceClasses(classes) };
                $(el).find('.Poster').after(Handlebars.templates.ratings(templateData));
            });
            //homepage
            $('.BoxOfficeMovie').each(function(i, el){
                var title = $(el).find('a').text().replace(blacklistRegexp, '').trim();
                var tomato = findTomato(title, tomatoes);
                var classes = ["inline", "float-right"];
                var templateData = tomato ? prepareData(tomato, classes) : { query: title, classes: namespaceClasses(classes) };
                $(el).append(Handlebars.templates.ratings(templateData));
            });
            //homepage
            $('.MovieItemsRotator .item').each(function(i, el){
                var title = $(el).find('.Title').text().replace(blacklistRegexp, '').trim();
                var tomato = findTomato(title, tomatoes);
                var classes = ["overlay", "overlay-poster"];
                var templateData = tomato ? prepareData(tomato, classes) : { query: title, classes: namespaceClasses(classes) };
                $(el).prepend(Handlebars.templates.ratings(templateData));
            });
            //http://cineplex.com/Movies.aspx
            $('.Movies .Movie').each(function(i, el){
                var title = $(el).find('h3').text().replace(blacklistRegexp, '').trim();
                var tomato = findTomato(title, tomatoes);
                var classes = ["inline", "full-center"];
                var templateData = tomato ? prepareData(tomato, classes) : { query: title, classes: namespaceClasses(classes) };
                $(el).find('.MoviePoster').append(Handlebars.templates.ratings(templateData));
            });
            break;
        case "netflix":
            break;
    }
    
};

$(function(){
    var requestInTheatres = $.getJSON("//api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=20&page=1&country=ca&apikey="+apiKey);
    var requestOpeningMovies = $.getJSON("//api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?limit=20&country=ca&apikey="+apiKey);
    $.when(requestInTheatres, requestOpeningMovies)
    .done(function (data1, data2) {
        var tomatoes = _.union(data1[0].movies, data2[0].movies);
        injectRatings(tomatoes);
        console.log(tomatoes);
    });
});