import {Component} from 'angular2/core';
import {HeroFormComponent} from './heros-form.component';

@Component({
    selector : 'heros-forms-app',
    template : '<hero-form></hero-form>',
    directives : [HeroFormComponent]
})
export class HeroFormAppComponent {
    
}