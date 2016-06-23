$(function(){
// Document is ready
var city = '', country = '', date = '', temp = '', text = '';
	$.ajax({
		headers: {
			"X-Mashape-Key": "9jOmyeo2g7mshCcuDkLZUfgB6fSvp1zbvPtjsnvFNrJXes1b1s",
			Accept: "application/json"
		},
		url: 'https://simple-weather.p.mashape.com/weatherdata?lat=25.02&lng=121.38',
		success: function(response){
			var r = JSON.parse(response);
			city = r.query.results.channel.location.city;
			country = r.query.results.channel.location.country;
			date = r.query.results.channel.item.condition.date;
			temp = r.query.results.channel.item.condition.temp;
			text = r.query.results.channel.item.condition.text;
			$( "<span>" + city + "</span>" ).appendTo("#city");
			$( "<span>" + country + "</span>" ).appendTo("#country");
			$( "<span>" + date + "</span>" ).appendTo("#date");
			$( "<span>" + temp + "</span>" ).appendTo("#temp");
			$( "<span>" + text + "</span>" ).appendTo("#text");
		}

	})
});
