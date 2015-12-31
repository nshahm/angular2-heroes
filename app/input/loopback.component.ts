import {Component} from 'angular2/core';

@Component({
    selector : 'heros-input-loopback',
    template : `
     <div>
        <div>
            <p>user input using #loopback local variable<p> <input #loopback (keyup)="0" placeholder="Using #"> <!-- On key press no event triggered to any component method instead store it in local variable and display below -->
            <p> {{loopback.value}}</p>
        </div>
        <div>
            <p>user input using var-loopback local variable<p>
            <input var-loopbackone (keyup)="0" placeholder="Using var">
            <p> {{ loopbackone.value}} </p>
        </div>
       <div>     
    `
})
export class HerosInputLoopback {
    
}