import { Component, Input } from 'angular2/core';

import { Hero } from '../../interfaces/common';

@Component({
	selector: 'hero-detail',
	templateUrl: 'app/components/hero-detail/hero-detail.template.html'
})
export class HeroDetailComponent {
	@Input() hero: Hero;
}
