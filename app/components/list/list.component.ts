import { Component } from 'angular2/core';

import { ListItemComponent } from '../list-item/list-item.component';
import { ListService } from '../../services/list-service';

@Component({
	selector: 'data-list',
	templateUrl: 'app/components/list/list.template.html',
	styleUrls: ['app/styles/list.css'],
	directives: [ListItemComponent],
	providers: [ListService]
})
export class ListComponent {
	constructor(listService: ListService) {
		this.list = listService.getList();
		
		this.shuffle = function() {
			this.list = listService.shuffleList();
		}
	}
	
	public list;
	
	public shuffle;
}

