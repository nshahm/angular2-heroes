import {Component} from 'angular2/core';
import {Hero} from '../model/hero';
import {HEROES} from '../service/mock-heroes';
import {HeroService} from '../service/hero.service';

//import {Logger} from '../logger/Logger'; // not required if you use factory to create instance
@Component({
  selector: 'heros-di-app',
  templateUrl: 'app/dependencyinjection/templates/heroes.di.component.html',
  providers : [HeroService]
})
export class HeroesDIComponent {
  heroes: Hero[] = HEROES;
  
  constructor(_heroService:HeroService) {
      this.heroes = _heroService.getHeroes();
  }
}