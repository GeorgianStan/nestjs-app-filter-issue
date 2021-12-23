/**
 * * Dependencies
 */
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

/**
 * * Modules
 */
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);





  // start the application
  const port = 8081;
  await app.listen(port, () => {
    console.log(
      `Application is up at port ${port}.`,
    );
  });
}

bootstrap();
