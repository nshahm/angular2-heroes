import {Component} from 'angular2/core';
import {Hero} from '../model/hero';

@Component({
    selector : 'hero-detail',
    template : `<div *ngIf="hero">
                <h2>{{hero.name}} details!</h2>
                <div>
                    <label>id: </label>{{hero.id}}
                </div>
                <div>
                    <input [(ngModel)]="hero.name" placeholder="Name">
                <div>
            </div>`,
    inputs : ['hero']
    
})
export class HeroDetailComponent {
    public hero:Hero;
}