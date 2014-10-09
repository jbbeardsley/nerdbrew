/// <reference path="../definitions.ts"/>

class BrewListController {
    constructor(private $scope: IBeerListControllerScope) {
        $scope.BeerList = [
            {
                Name: "Prima Pils",
                Points: 31,
                Brewery: "Victory",
                ImageUrl: "http://res.cloudinary.com/ratebeer/image/upload/w_120,c_limit,q_85,d_no%20image.jpg/beer_619.jpg"
            },
            {
                Name: "Ur-Bock",
                Points: 29,
                Brewery: "Einbecker",
                ImageUrl: "http://res.cloudinary.com/ratebeer/image/upload/w_120,c_limit,q_85,d_no%20image.jpg/beer_5403.jpg"
            }
        ];
    }

    // protect the injection from minification  
    static $inject = ['$scope'];
}
