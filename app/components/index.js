System.register(['./hero-detail/hero-detail.component', './list-item/list-item.component', './list/list.component', './app/app.component', './home-page/home-page.component', './app-container/app-container.component'], function(exports_1) {
    var hero_detail_component_1, list_item_component_1, list_component_1, app_component_1, home_page_component_1, app_container_component_1;
    return {
        setters:[
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (list_item_component_1_1) {
                list_item_component_1 = list_item_component_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_page_component_1_1) {
                home_page_component_1 = home_page_component_1_1;
            },
            function (app_container_component_1_1) {
                app_container_component_1 = app_container_component_1_1;
            }],
        execute: function() {
            exports_1("HomeComponent", home_page_component_1.HomeComponent);
            exports_1("AppContainerComponent", app_container_component_1.AppContainerComponent);
            exports_1("AppComponent", app_component_1.AppComponent);
            exports_1("HeroDetailComponent", hero_detail_component_1.HeroDetailComponent);
            exports_1("ListItemComponent", list_item_component_1.ListItemComponent);
            exports_1("ListComponent", list_component_1.ListComponent);
        }
    }
});
//# sourceMappingURL=index.js.map