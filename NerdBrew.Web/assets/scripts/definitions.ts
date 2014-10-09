/// <reference path="typings/angularjs/angular.d.ts"/>

interface IBeer {
    Brewery: string;
    Name: string;
    ImageUrl: string;
    Points: number;
}

interface IBeerListControllerScope extends ng.IScope {
    BeerList:IBeer[]
}
