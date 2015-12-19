System.register(['angular2/core', 'angular2/router', '../index'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, index_1;
    var AppContainerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }],
        execute: function() {
            AppContainerComponent = (function () {
                function AppContainerComponent() {
                }
                AppContainerComponent = __decorate([
                    core_1.Component({
                        selector: 'app-container',
                        styleUrls: ['http://rawgit.com/zoilorys/angular2playground/gh-pages/app/styles/main.css'],
                        templateUrl: 'http://rawgit.com/zoilorys/angular2playground/gh-pages/app/components/app-container/app-container.template.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Home', component: index_1.HomeComponent },
                        { path: '/hall-of-heroes', name: 'HallOfHeroes', component: index_1.AppComponent },
                        { path: '/hero/:id', name: 'HeroDetails', component: index_1.HeroDetailComponent },
                        { path: '/list', name: 'List', component: index_1.ListComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppContainerComponent);
                return AppContainerComponent;
            })();
            exports_1("AppContainerComponent", AppContainerComponent);
        }
    }
});
//# sourceMappingURL=app-container.component.js.map