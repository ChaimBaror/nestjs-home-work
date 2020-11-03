import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("UserMiddleware ");
    
    if(req.method == 'GET'){
      console.log('req: ', req.headers);
      console.log('params: ', req.url);
    }
    else if(req.method == 'POST'){
      console.log('req: ', req.body);
    }
    next();
  }
}
