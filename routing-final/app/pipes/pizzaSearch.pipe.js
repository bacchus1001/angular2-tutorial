System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PizzaSearchPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PizzaSearchPipe = (function () {
                function PizzaSearchPipe() {
                }
                PizzaSearchPipe.prototype.transform = function (pizzas, args) {
                    var searchString = args[0], matches = [];
                    if (!searchString) {
                        return pizzas;
                    }
                    pizzas.forEach(function (pizza) {
                        if (pizza.name.match(new RegExp(searchString, 'i'))) {
                            matches.push(pizza);
                        }
                    });
                    return matches;
                };
                PizzaSearchPipe = __decorate([
                    core_1.Pipe({ name: 'pizzaSearch' }), 
                    __metadata('design:paramtypes', [])
                ], PizzaSearchPipe);
                return PizzaSearchPipe;
            })();
            exports_1("PizzaSearchPipe", PizzaSearchPipe);
        }
    }
});
//# sourceMappingURL=pizzaSearch.pipe.js.map