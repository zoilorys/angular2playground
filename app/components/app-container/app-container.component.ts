import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent, AppComponent, ListComponent, HeroDetailComponent } from '../index';

@Component({
	selector: 'app-container',
	styleUrls: ['app/styles/main.css'],
	templateUrl: 'app/components/app-container/app-container.template.html',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{ path: '/', name: 'Home', component: HomeComponent },
	{ path: '/hall-of-heroes', name: 'HallOfHeroes', component: AppComponent },
	{ path: '/hero/:id', name: 'HeroDetails', component: HeroDetailComponent },
	{ path: '/list', name: 'List', component: ListComponent }
])
export class AppContainerComponent {
	
}