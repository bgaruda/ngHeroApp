import { Component } from '@angular/core';
import { Hero }  from './Hero';


const HEROES: Hero[]=[
 {id:1, name:'David'},
 {id:2, name:'Sam'},
 {id:3, name:'Leo'},
 {id:4, name:'Windward'},
 {id:5, name:'Bombasto'}
 ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	heroes = HEROES;
 	selectedHero: Hero;

  title = 'Hero App';
  hero: Hero ={
  	id:1,
  	name:'David'
  }

  onSelect(heroSelected:Hero): void{
  	this.selectedHero = heroSelected;
  }

}
