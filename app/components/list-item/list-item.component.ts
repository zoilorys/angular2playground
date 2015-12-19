import { Component, Input } from 'angular2/core';

@Component({
	selector: 'list-item',
	templateUrl: 'http://rawgit.com/zoilorys/angular2playground/gh-pages/app/components/list-item/list-item.template.html'
})
export class ListItemComponent{
	@Input() data;
}