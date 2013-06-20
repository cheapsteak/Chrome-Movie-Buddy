//algorithm from http://stackoverflow.com/a/11958496/482053
var levDist=function(e,t){var n=[];var r=e.length;var i=t.length;if(r==0)return i;if(i==0)return r;for(var s=r;s>=0;s--)n[s]=[];for(var s=r;s>=0;s--)n[s][0]=s;for(var o=i;o>=0;o--)n[0][o]=o;for(var s=1;s<=r;s++){var u=e.charAt(s-1);for(var o=1;o<=i;o++){if(s==o&&n[s][o]>4)return r;var a=t.charAt(o-1);var f=u==a?0:1;var l=n[s-1][o]+1;var c=n[s][o-1]+1;var h=n[s-1][o-1]+f;if(c<l)l=c;if(h<l)l=h;n[s][o]=l;if(s>1&&o>1&&u==t.charAt(o-2)&&e.charAt(s-2)==a){n[s][o]=Math.min(n[s][o],n[s-2][o-2]+f)}}}return n[r][i]}

var blacklist = [
    ': Director\'s Cut - A Most Wanted Mondays Presentation',
    ': An IMAX 3D Experience®',
    '- A Sinister Cinema Presentation'
];

var blacklistRegexp = new RegExp('('+blacklist.join('|')+')');

var findTomato = function (title, tomatoes) {
    var mostSimilar = _(tomatoes).min(function(tomato){
        return levDist(title, tomato.title);
    });

    if (levDist(title, mostSimilar.title) < 3) {
        return mostSimilar;
    }
};

var injectRatings = function(tomatoes){
    $('.movie-link h3').each(function(i, el){
        var title = $(el).text().replace(blacklistRegexp, '').trim();
        var tomato = findTomato(title, tomatoes);
        if (tomato) {
            $(el).closest('.moviedetailsmaininfo').prepend('<div style="float:right">'+tomato.ratings.critics_score+' % </div>');
        }
    });
}

var requestInTheatres = $.getJSON("//api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?page_limit=20&page=1&country=ca&apikey=fq9pzgtxgnpqp53d56kccez9&callback=?");
var requestOpeningMovies = $.getJSON("//api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?limit=20&country=ca&apikey=fq9pzgtxgnpqp53d56kccez9&callback=?")
$.when(requestInTheatres, requestOpeningMovies)
.done(function (data1, data2) {
    var tomatoes = _.union(data1[0].movies, data2[0].movies);
    console.log(tomatoes);
    injectRatings(tomatoes);
});