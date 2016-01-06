import { bootstrap }    from 'angular2/platform/browser';
// import {AppComponent} from './app.component';
// import {HerosInput} from './input/heros-input';
// import {HeroFormAppComponent} from './forms/heros-form';
import { HeroesDIComponent } from './dependencyinjection/heros-di.component'; 
import { HeroService } from './service/hero.service';
import { Logger } from './logger/Logger';
import { Provider, provide } from 'angular2/core';
import { HeroServiceFactory } from './service/hero.service.factory';
import { LoggerConfig } from './logger/logger.config';

// bootstrap(AppComponent);
// bootstrap(HerosInput);
// bootstrap(HeroFormAppComponent);


/*

Dependency Injection varios options of inject.
*/

// EXCEPTION: No provider for Logger! (HeroesDIComponent -> HeroService -> Logger)
// If not initializing global instance this will work.
//      bootstrap(HeroesDIComponent);

// Inject Logger at this point as this instance is global accross HeroesDIComponent App and inject the service at HeroesDIComponent providers array.
//      bootstrap(HeroesDIComponent, [HeroService, Logger]);

//bootstrap(HeroesDIComponent, [Logger]);
// Do this in couple of other ways
// useClass with provide() method
//      bootstrap(HeroesDIComponent, [ provide(Logger, { useClass:Logger}) ]);

// useClass with new Provider()
//      bootstrap(HeroesDIComponent, [ new Provider(Logger, { useClass:Logger}) ]); // useValue option will be used for testcase mostly.

// useFactory

bootstrap(HeroesDIComponent, [provide(HeroService, 
                                        { useFactory : HeroServiceFactory,
                                             deps:[Logger, LoggerConfig]
                                        }
                                      ), Logger, LoggerConfig]);     
     

