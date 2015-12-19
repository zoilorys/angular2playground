import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import { HeroService } from '../../services/hero-service';
import { Hero } from '../../interfaces/common';

@Component({
	selector: 'hero-detail',
	templateUrl: 'app/components/hero-detail/hero-detail.template.html',
	providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
	constructor(
		private _router: Router,
		private _routeParams: RouteParams,
		private _heroService: HeroService
	) {}
	
	public hero: Hero;
	
	ngOnInit() {
		let id = this._routeParams.get('id');
		
		this._heroService.getHero(parseInt(id))
			.then(hero => this.hero = hero);
	}
	
	goToHeroes() {
		this._router.navigate(['HallOfHeroes']);
	}
}
