import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: [ './button.component.css' ]
})
export class ButtonComponent implements OnInit {
	@Input() nombre: string;
	@Input() clase: string;
	constructor() {}

	ngOnInit(): void {}
}
