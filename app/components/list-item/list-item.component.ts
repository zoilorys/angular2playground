import { Component, Input } from 'angular2/core';

@Component({
	selector: 'list-item',
	templateUrl: 'app/components/list-item/list-item.template.html'
})
export class ListItemComponent{
	@Input() data;
}