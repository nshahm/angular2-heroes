import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from './model/hero';
import {HeroDetailComponent} from './displaydata/hero-detail.component'
import {HeroService} from './service/hero.service'
import {HerosInput} from './input/heros-input';

@Component({
    selector: 'heros-app',
    template: `
    <div>
        <h1>{{title}}</h1>
            <ul class="heroes">
                    <li *ngFor="#her of heroes" 
                        (click)="selectHero(her)"
                        [class.selected]="her === selectedHero">
                        <span class="badge"> {{her.id}}</span> {{her.name}}
                    </li>
                    <!--p *ngIf="heroes.length > 3">There are many heroes!</p-->
            </ul>
            
            <hero-detail [hero]="selectedHero"></hero-detail>
            
        <div>`,
     styles:[`
        .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
        .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
        .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
        .heroes .badge {
            font-size: small;
            color: white;
            padding: 0.1em 0.7em;
            background-color: #369;
            line-height: 1em;
            position: relative;
            left: -1px;
            top: -1px;
        }
        .selected { background-color: #EEE; color: #369; }
    `],
    directives : [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit { 
    
    public title = 'My angular first tour with hero functionalities';
    public message = '';
    // public hero = 'More';
    
    // public heroObj : Hero = {
    //     id : 1,
    //     name : 'Shahm'
    // }
    
    ngOnInit() {
        this.getHeroes();
    }
    
    constructor(private _heroService: HeroService) {
        
    }
    
    public heroes : Hero[];

    public selectedHero:Hero;
    
    selectHero(hero : Hero) {
        this.selectedHero = hero;
    } 
 
    getHeroes() {
        
        this._heroService.getHeroes().then(heroes => this.heroes = heroes); 
        //this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
}


