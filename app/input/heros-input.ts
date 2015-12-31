import {Component} from 'angular2/core';
import {HerosInputKeyUp} from './keyup.component'
import {HerosInputLoopback} from './loopback.component';

@Component ({
    selector : "heros-input",
    template : `
        <div>
            <h1> Heros - input event </h1>
            <button (click) = "onClickEventTriggered()">Click here</button>
            <label *ngIf="message != undefined">{{message}}</label>
            
            <!-- input event passed to method in component -->
            <heros-input-keyup></heros-input-keyup>
            
            <!-- input event loopback to localvariable --> 
            <heros-input-loopback></heros-input-loopback>
            
            <p>With all above techinique, show list of heros</p>
            <div>
                <div>
                    <input #heroName (keyup.enter)="addHero(heroName.value)"
                                (blur)="addHero(heroName.value); heroName.value='';">
                    <button (click)="addHero(heroName.value);">Add</button>
                </div>
                <p> List of Hereos</p>             
                <ul>
                    <li *ngFor="#hero of inputHeroes">
                        {{hero}}
                    <li>
                </ul>
            
            <div>
        </div>    
    `,
    directives : [HerosInputKeyUp, HerosInputLoopback]
 })
 export class HerosInput {
     
    public message = ''; 
    public keyEventValues = '';
    
    inputHeroes = ['Gandhi', 'Bombasto', 'Magneta', 'Tornado'];
    
    addHero(heroName:string) {
        if (heroName) {
            this.inputHeroes.push(heroName);
        }    
    }
    
    onClickEventTriggered() {
        this.message = 'My click event triggered';
    }
    
    onkey(event:any) {
        this.keyEventValues +=event.target.value + ' | ';
    }   
 }