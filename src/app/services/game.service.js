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
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
var GameService = (function () {
    function GameService() {
        this.size = [0, 1, 2, 3];
        this.inverseSize = [3, 2, 1, 0];
    }
    GameService.prototype.getFinalPositions = function (init_positions, movements) {
        var final_positions = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
        for (var _i = 0, movements_1 = movements; _i < movements_1.length; _i++) {
            var movement = movements_1[_i];
            switch (movement) {
                case "1":
                    final_positions = this.leftMovement(init_positions);
                    break;
                case "2":
                    final_positions = this.rightMovement(init_positions);
                    break;
                case "3":
                    final_positions = this.downMovement(init_positions);
                    break;
                case "4":
                    final_positions = this.upMovement(init_positions);
                    break;
            }
            final_positions = this.addGrid(final_positions);
        }
        return final_positions;
    };
    GameService.prototype.leftMovement = function (init_positions) {
        for (var _i = 0, _a = this.size; _i < _a.length; _i++) {
            var i = _a[_i];
            for (var _b = 0, _c = this.size; _b < _c.length; _b++) {
                var j = _c[_b];
                if (j != 3) {
                    if (init_positions[i][j] == 0) {
                        if (init_positions[i][j + 1] == 0 && j == 1) {
                            init_positions[i][j] = init_positions[i][j + 2];
                            init_positions[i][j + 2] = 0;
                        }
                        else {
                            init_positions[i][j] = init_positions[i][j + 1];
                            init_positions[i][j + 1] = 0;
                        }
                        if (j != 0) {
                            if (init_positions[i][j] == init_positions[i][j - 1]) {
                                if (init_positions[i][j] + init_positions[i][j - 1] < 2048) {
                                    init_positions[i][j - 1] = init_positions[i][j] + init_positions[i][j - 1];
                                    init_positions[i][j] = 0;
                                }
                            }
                        }
                    }
                    if (init_positions[i][j] == init_positions[i][j + 1]) {
                        if (init_positions[i][j] + init_positions[i][j + 1] < 2048) {
                            init_positions[i][j] = init_positions[i][j] + init_positions[i][j + 1];
                            init_positions[i][j + 1] = 0;
                        }
                    }
                    if (j == 2) {
                        if (init_positions[i][j - 2] == 0) {
                            init_positions[i][j - 2] = init_positions[i][j - 1];
                            init_positions[i][j - 1] = 0;
                        }
                    }
                }
            }
        }
        return init_positions;
    };
    GameService.prototype.rightMovement = function (init_positions) {
        for (var _i = 0, _a = this.inverseSize; _i < _a.length; _i++) {
            var i = _a[_i];
            for (var _b = 0, _c = this.inverseSize; _b < _c.length; _b++) {
                var j = _c[_b];
                if (j != 0) {
                    if (init_positions[i][j] == 0) {
                        if (init_positions[i][j - 1] == 0 && j == 2) {
                            init_positions[i][j] = init_positions[i][j - 2];
                            init_positions[i][j - 2] = 0;
                        }
                        else {
                            init_positions[i][j] = init_positions[i][j - 1];
                            init_positions[i][j - 1] = 0;
                        }
                        if (j != 3) {
                            if (init_positions[i][j] == init_positions[i][j + 1]) {
                                if (init_positions[i][j] + init_positions[i][j + 1] < 2048) {
                                    init_positions[i][j + 1] = init_positions[i][j] + init_positions[i][j + 1];
                                    init_positions[i][j] = 0;
                                }
                            }
                        }
                    }
                    if (init_positions[i][j] == init_positions[i][j - 1]) {
                        if (init_positions[i][j] + init_positions[i][j - 1] < 2048) {
                            init_positions[i][j] = init_positions[i][j] + init_positions[i][j - 1];
                            init_positions[i][j - 1] = 0;
                        }
                    }
                    if (j == 1) {
                        if (init_positions[i][j + 2] == 0) {
                            init_positions[i][j + 2] = init_positions[i][j + 1];
                            init_positions[i][j + 1] = 0;
                        }
                    }
                }
            }
        }
        return init_positions;
    };
    GameService.prototype.downMovement = function (init_positions) {
        for (var _i = 0, _a = this.size; _i < _a.length; _i++) {
            var i = _a[_i];
            for (var _b = 0, _c = this.inverseSize; _b < _c.length; _b++) {
                var j = _c[_b];
                if (j != 0) {
                    if (init_positions[j][i] == 0) {
                        if (init_positions[j - 1][i] == 0 && j == 2) {
                            init_positions[j][i] = init_positions[j - 2][i];
                            init_positions[j - 2][i] = 0;
                        }
                        else {
                            init_positions[j][i] = init_positions[j - 1][i];
                            init_positions[j - 1][i] = 0;
                        }
                        if (j != 3) {
                            if (init_positions[j][i] == init_positions[j + 1][i]) {
                                if (init_positions[i][j] + init_positions[j + 1][i] < 2048) {
                                    init_positions[j + 1][i] = init_positions[j][i] + init_positions[j + 1][i];
                                    init_positions[j][i] = 0;
                                }
                            }
                        }
                    }
                    if (init_positions[j][i] == init_positions[j - 1][i]) {
                        if (init_positions[i][j] + init_positions[j - 1][i] < 2048) {
                            init_positions[j][i] = init_positions[j][i] + init_positions[j - 1][i];
                            init_positions[j - 1][i] = 0;
                        }
                    }
                    if (j == 1) {
                        if (init_positions[j + 2][i] == 0) {
                            init_positions[j + 2][i] = init_positions[j + 1][i];
                            init_positions[j + 1][i] = 0;
                        }
                    }
                }
            }
        }
        return init_positions;
    };
    GameService.prototype.upMovement = function (init_positions) {
        for (var _i = 0, _a = this.size; _i < _a.length; _i++) {
            var i = _a[_i];
            for (var _b = 0, _c = this.size; _b < _c.length; _b++) {
                var j = _c[_b];
                if (j != 3) {
                    if (init_positions[j][i] == 0) {
                        if (init_positions[j + 1][i] == 0 && j == 1) {
                            init_positions[j][i] = init_positions[j + 2][i];
                            init_positions[j + 2][i] = 0;
                        }
                        else {
                            init_positions[j][i] = init_positions[j + 1][i];
                            init_positions[j + 1][i] = 0;
                        }
                        if (j != 0) {
                            if (init_positions[j][i] == init_positions[j - 1][i]) {
                                if (init_positions[i][j] + init_positions[j - 1][i] < 2048) {
                                    init_positions[j - 1][i] = init_positions[j][i] + init_positions[j - 1][i];
                                    init_positions[j][i] = 0;
                                }
                            }
                        }
                    }
                    if (init_positions[j][i] == init_positions[j + 1][i]) {
                        if (init_positions[i][j] + init_positions[j + 1][i] < 2048) {
                            init_positions[j][i] = init_positions[j][i] + init_positions[j + 1][i];
                            init_positions[j + 1][i] = 0;
                        }
                    }
                    if (j == 2) {
                        if (init_positions[j - 2][i] == 0) {
                            init_positions[j - 2][i] = init_positions[j - 1][i];
                            init_positions[j - 1][i] = 0;
                        }
                    }
                }
            }
        }
        return init_positions;
    };
    GameService.prototype.addGrid = function (init_positions) {
        for (var _i = 0, _a = this.size; _i < _a.length; _i++) {
            var i = _a[_i];
            for (var _b = 0, _c = this.size; _b < _c.length; _b++) {
                var j = _c[_b];
                if (init_positions[i][j] == 0) {
                    init_positions[i][j] = 2;
                    return init_positions;
                }
            }
        }
        return null;
    };
    GameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map