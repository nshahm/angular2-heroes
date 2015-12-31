import {Component} from 'angular2/core';

@Component ({
    selector : "heros-input-keyup",
    template : `
            <div>
                <p> user key events</p>
                <input (keyup)="onKey($event)">
                <p> {{keyEventValues}}
            </div>
            <div>
            
                <p> user get input box value with no $event.</p>
                <input #localval (keyup)="onKeyCaptureValue(localval.value)">
                <p> {{values}}
            <div>
            
            <div>
            
                <p> user get input box value with event filtering !!When Press Enter key/ onBlur.</p>
                <input #localval 
                    (keyup.enter)="keyFilterValues=(localval.value)"
                    (blur)="keyFilterValues=(localval.value)">
                <p> {{keyFilterValues}}
            <div>
    `
 })
 export class HerosInputKeyUp {
      
    public keyEventValues = '';
    public keyCaptureValues = '';
    public keyFilterValues = '';
    
    // onKey(event:any) {
    //     this.keyEventValues +=event.target.value + ' | ';
    // }  
 
    onKey(event:KeyboardEvent) {
            this.keyEventValues += (<HTMLInputElement>event.target).value + ' | ';
        }  
    
    onKeyCaptureValue(value) {
        this.keyCaptureValues += value + '|';
    }   
   
        
 }
 