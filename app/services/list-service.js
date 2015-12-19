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
    var ListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ListService = (function () {
                function ListService() {
                    this.list = [];
                }
                ListService.prototype.buildName = function () {
                    var letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
                    var name = "\n\t\t\t" + letters.charAt(Math.floor(Math.random() * letters.length)) + "\n\t\t\t" + letters.charAt(Math.floor(Math.random() * letters.length)) + "\n\t\t\t" + letters.charAt(Math.floor(Math.random() * letters.length)) + "\n\t\t\t" + letters.charAt(Math.floor(Math.random() * letters.length)) + "\n\t\t\t";
                    return name;
                };
                ListService.prototype.initList = function () {
                    var temp = [];
                    for (var i = 0; i < 100; i++) {
                        temp.push({ name: this.buildName() });
                    }
                    return temp;
                };
                ListService.prototype.getList = function () {
                    if (this.list.length === 0) {
                        this.list = this.initList();
                    }
                    return this.list;
                };
                ListService.prototype.shuffle = function (v) {
                    for (var j, x, i = v.length; i; j = parseInt((Math.random() * i).toString()), x = v[--i], v[i] = v[j], v[j] = x)
                        ;
                    return v;
                };
                ;
                ListService.prototype.shuffleList = function () {
                    return this.shuffle(this.list);
                };
                ListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ListService);
                return ListService;
            })();
            exports_1("ListService", ListService);
        }
    }
});
//# sourceMappingURL=list-service.js.map