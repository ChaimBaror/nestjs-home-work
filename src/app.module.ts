import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserMiddleware } from './middleware/user.middleware';
import { UserController } from './user/user.controller';
import { TokenMiddleware } from './middleware/token.middleware';
 

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TokenMiddleware)
      .forRoutes('auth')

      .apply(UserMiddleware)
      .exclude(
        { path: 'user', method: RequestMethod.GET },
        { path: 'user', method: RequestMethod.POST },
        'cats/(.*)',
      )
      .forRoutes(UserController);

  }
}
