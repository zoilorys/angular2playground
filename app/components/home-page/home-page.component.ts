import { Component } from 'angular2/core';

@Component({
	selector: 'home-page',
	styles: [`
		h1 {
			text-align: center;
		}
		
		.logo-container {
			display: flex;
			width: 100%,
			justify-content: center;
		}
		
		#logo {
			margin: 0px auto;
			width: 30%;
			height: 20%;
		}
	`],
	templateUrl: 'http://rawgit.com/zoilorys/angular2playground/gh-pages/app/components/home-page/home-page.template.html'
})
export class HomeComponent {
	
}