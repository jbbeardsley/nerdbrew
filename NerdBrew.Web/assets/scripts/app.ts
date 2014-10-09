/// <reference path="definitions.ts"/>
/// <reference path="controllers/brewListController.ts"/>

var app = angular.module('NerdBrewApp', []);
app.controller('brewListController', BrewListController);