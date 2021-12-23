/**
 * * Depndencies
 */
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

/**
 * * Controller
 */
import { AppController } from './app.controller';

/**
 * * Services
 */
import { AppService } from './app.service';

/**
 * * Filters
 */
import { GlobalExceptionFilter } from './common/expection-filters/global-exception.filter';

/**
 * * Config
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    AppService,
  ],
})
export class AppModule {}
