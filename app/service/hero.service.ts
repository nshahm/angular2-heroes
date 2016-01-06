import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from '../model/hero';
import {Logger} from '../logger/Logger';
import { LoggerConfig } from '../logger/logger.config';

//Used for DI  
@Injectable()
export class HeroService {
    
    heroes: Hero[];
    
    constructor(private logger:Logger, private loggerConfig:LoggerConfig) {
        this.heroes = HEROES;
    }
    
    getHeroes() {
        //return HEROES;
        if (this.loggerConfig.loggingEnabled) {
            this.logger.log('Getting heroes...');    
        }
        
        //return Promise.resolve(HEROES);
        //updated per DI sample
        return this.heroes;
    }
    
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve=>setTimeout(()=>resolve(HEROES), 2000));
    }
}