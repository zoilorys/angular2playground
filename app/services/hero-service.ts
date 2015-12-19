import { Injectable } from 'angular2/core';

import { Hero } from '../interfaces/common';

@Injectable()
export class HeroService {
	private heroes: Hero[] = [
			{ "id": 11, "name": "Mr. Nice" },
			{ "id": 12, "name": "Narco" },
			{ "id": 13, "name": "Bombasto" },
			{ "id": 14, "name": "Celeritas" },
			{ "id": 15, "name": "Magneta" },
			{ "id": 16, "name": "RubberMan" },
			{ "id": 17, "name": "Dynama" },
			{ "id": 18, "name": "Dr IQ" },
			{ "id": 19, "name": "Magma" },
			{ "id": 20, "name": "Tornado" }
		];
	
	private heroesPromise = Promise.resolve(this.heroes);
	
	public getHeroes(): Promise<Hero[]>{
		return this.heroesPromise;
	}
	
	public getHero(id: number): Promise<Hero>{
		return this.heroesPromise.then(heroes => heroes.filter(hero => hero.id === id)[0]);
	}
}