import { Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation : ViewEncapsulation.None
})
export class AppComponent {

fname = 'Swati';
lname = 'Shankar';

getFname(){
	console.log(fname);
	console.log(lname);
}

}
