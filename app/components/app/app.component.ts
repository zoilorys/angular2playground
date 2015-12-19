import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { HeroService } from '../../services/hero-service';
import { Hero } from '../../interfaces/common';

@Component({
	selector: 'my-app',
	styleUrls:['app/styles/app.css'],
	templateUrl: 'app/components/app/app.template.html',
	providers: [HeroService]
})
export class AppComponent implements OnInit {
	constructor(private _router: Router , private _heroService: HeroService) {}
	
	public title: string = "Tour of Heroes";
	public selectedHero: Hero;
	public heroes: Hero[];
	
	ngOnInit() {
		this._heroService.getHeroes()
			.then(heroes => this.heroes = heroes);
	}	
	onSelect(hero: Hero) {
		this._router.navigate(['HeroDetails', { id: hero.id }]);
	} 
}