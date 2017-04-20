import { Component, Input } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'hero-detail',
  template: `<div *ngIf="hero">
  <h1>{{hero.name}} Details!</h1>
  <div><label>id: {{hero.id}}</label></div>
  <div>
    <label>{{hero.name}}</label>
    <input type="text" [(ngModel)]="hero.name" placeholder="name">
  </div>
</div>`,
  /*styleUrls: ['./app.component.css']*/
})
export class HeroDetailComponent {
 	@Input() hero: Hero;

}
