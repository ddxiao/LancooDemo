"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require('aurelia-framework');
var aurelia_http_client_1 = require("aurelia-http-client");
var TriggersView = (function () {
    function TriggersView(http) {
        this.http = http;
    }
    TriggersView.prototype.activate = function (params) {
        var _this = this;
        return this.http.get("/api/schedulers/" + params.schedulerName + "/triggers").then(function (response) {
            _this.triggers = response.content;
        });
    };
    TriggersView = __decorate([
        aurelia_framework_1.autoinject, 
        __metadata('design:paramtypes', [(typeof (_a = typeof aurelia_http_client_1.HttpClient !== 'undefined' && aurelia_http_client_1.HttpClient) === 'function' && _a) || Object])
    ], TriggersView);
    return TriggersView;
    var _a;
}());
exports.TriggersView = TriggersView;
//# sourceMappingURL=triggers.js.map