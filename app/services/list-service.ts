import { Injectable } from 'angular2/core';

@Injectable()
export class ListService {
	private list: Array<Object> = [];
	
	private buildName(): string{
		let letters: string = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
		let	name: string = `
			${letters.charAt(Math.floor(Math.random() * letters.length))}
			${letters.charAt(Math.floor(Math.random() * letters.length))}
			${letters.charAt(Math.floor(Math.random() * letters.length))}
			${letters.charAt(Math.floor(Math.random() * letters.length))}
			`;
		
		return name;
	}
	
	private initList(): Array<Object>{
		let temp: Array<Object>= [];
		
		for (let i = 0; i < 100; i++) {
			temp.push({ name: this.buildName() });
		}
		
		return temp;
	}
	
	public getList(): Array<Object>{
		if (this.list.length === 0) {
			this.list = this.initList();
		}
		return this.list;
	}
	
	private	shuffle (v: Array<Object>): Array<Object>{
    for(var j: number, x: Object, i = v.length; i; j = parseInt((Math.random() * i).toString()), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
	};
	
	public shuffleList(): Array<Object>{
		return this.shuffle(this.list);
	}
}