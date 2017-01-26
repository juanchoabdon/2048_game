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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var game_service_1 = require("../services/game.service");
var GameComponent = (function () {
    function GameComponent(_route, _router, _gameService) {
        this._route = _route;
        this._router = _router;
        this._gameService = _gameService;
    }
    GameComponent.prototype.ngOnInit = function () {
        this.init_positions = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        this.final_positions = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        this.play = false;
        this.played = false;
        this.movements = [];
        this.validate = true;
        console.log("Componente del juego cargado");
    };
    GameComponent.prototype.getInputMovements = function (val) {
        this.input_movements = [];
        for (var i = 0; i < val; i++) {
            this.input_movements.push(i);
        }
        if (this.input_movements != []) {
            this.play = true;
        }
        else {
            this.play = false;
        }
    };
    GameComponent.prototype.getFinalPositions = function () {
        if (this.validate || this.movements == []) {
            this.played = true;
            this.final_positions = this._gameService.getFinalPositions(this.init_positions, this.movements);
        }
    };
    GameComponent.prototype.repeatGame = function () {
        this.init_positions = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        this.final_positions = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        this.play = false;
        this.played = false;
        this.movements = [];
        this.num_movements = 0;
        this.getInputMovements(this.num_movements);
    };
    GameComponent.prototype.validateGrid = function (val) {
        if (val > 0 && val <= 2048) {
            this.validate = true;
        }
        else {
            this.validate = false;
        }
    };
    return GameComponent;
}());
GameComponent = __decorate([
    core_1.Component({
        selector: 'game-init',
        templateUrl: 'app/views/game.html',
        providers: [game_service_1.GameService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        game_service_1.GameService])
], GameComponent);
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map