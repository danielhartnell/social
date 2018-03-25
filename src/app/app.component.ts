import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Social Fun Times';
  events = [
  	{
  		'name': 'Cascade brewing',
  		'location': '939 SE Belmont St, Portland, OR 97214',
  		'votes': 0
  	},
  	{
  		'name': 'McMenamins Blue Moon Tavern & Grill',
  		'location': '432 NW 21st Ave, Portland, OR 97209',
  		'votes': 0
  	},
  	{
  		'name': 'Ex Novo Brewing Co.',
  		'location': '2326 N Flint Ave, Portland, OR 97227',
  		'votes': 0
  	}
  ]
}
