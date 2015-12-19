System.register(['angular2/platform/browser', 'angular2/router', './components/app-container/app-container.component'], function(exports_1) {
    var browser_1, router_1, app_container_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_container_component_1_1) {
                app_container_component_1 = app_container_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_container_component_1.AppContainerComponent, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map