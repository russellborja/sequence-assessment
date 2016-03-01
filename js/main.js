var url = "http://seq-front-end-assessment.s3-website-us-west-2.amazonaws.com/";
var app = angular.module('sequence',[]);

app.run(function($rootScope, $http) {
    $http.get(url + "catalog.json").then(function(response) {
        $rootScope.jsonObject = response.data;
    });
});

app.directive('carouselIndicator', function() {
    return {
        scope: {
            num: '@'
        },
        template: "<li data-target='#myCarousel' data-slide-to='{{num}}''></li>"
    }
});



// app.directive('carouselItem', function(){
// 	return{
// 		scope: {
// 			imageurl: '@',
// 			name: '@',
// 			description: '@'
// 		},
// 		template: "<div class='item' id='{{num}}'><img src='http://seq-front-end-assessment.s3-website-us-west-2.amazonaws.com/assets{{imageurl}}' alt=''><div class='carousel-caption'><h3>{{name}}</h3><p>{{description}}</p></div></div>"
// 	}
// });

// Activate Carousel


// Enable Carousel Indicators
$(".item").click(function() {
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function() {
    $("#myCarousel").carousel("prev");
});

function viewDetails() {
    alert($('.item.active').attr('id'));
}