import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './model/Hero';

@Component ({
    selector : 'hero-form',
    templateUrl : 'app/forms/templates/hero-form.component.html'
})

export class HeroFormComponent {
    powers = ['Really Smart','Super Flexible', 'Super Hot', 'Weather Changer'];
    
    model = new Hero(18, 'Dr S', this.powers[0], 'Chuck Overstreet');
    
    submitted = false;
    
    onSubmit() {
        this.submitted =true;
    }
    
    get diagnostic() {
        return JSON.stringify(this.model);
    }
}
