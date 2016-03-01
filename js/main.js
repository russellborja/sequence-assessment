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

// Enable Carousel Indicators
$(".item").click(function() {
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function() {
    $("#myCarousel").carousel("prev");
});

// function viewDetails() {
//     alert($('.item.active').attr('id'));
// }