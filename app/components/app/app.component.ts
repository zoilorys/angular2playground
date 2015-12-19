import { Component } from 'angular2/core';

import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../../services/hero-service';
import { Hero } from '../../interfaces/common';

@Component({
	selector: 'my-app',
	styleUrls:['app/styles/app.css'],
	templateUrl: 'app/components/app/app.template.html',
	directives: [HeroDetailComponent],
	providers: [HeroService]
})
export class AppComponent {
	constructor(heroService: HeroService) {
		this.heroes = heroService.getHeroes();
	}
	
	public title: string = "Tour of Heroes";
	public selectedHero: Hero;
	public heroes: Hero[];
	
	onSelect(hero: Hero) { this.selectedHero = hero; } 
}