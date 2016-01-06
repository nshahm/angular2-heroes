import { HeroService } from './hero.service';
import { Logger } from '../logger/Logger';
import { LoggerConfig } from '../logger/logger.config'

export let HeroServiceFactory = (logger:Logger, loggerConfig:LoggerConfig) => {
    return new HeroService(logger, loggerConfig);
};