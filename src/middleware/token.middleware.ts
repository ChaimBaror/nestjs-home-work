import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';

@Injectable()
export class TokenMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("TokenMiddleware");
    if (req.method == 'POST') {
      next()
    }
    if (req.body['password'] == 'My-Token') {
      console.log("['password'] == 'My-Token'");
      next()
    }
    else {
console.log("WRONG TOKEN OR NOT GIVEN");

      // throw new ForbiddenException('WRONG TOKEN OR NOT GIVEN')
      next()
      // console.log('CHECK-TOKEN in headers:', req.headers);
      // if( req.headers['token'] == 'my-token'){
      //   console.log('token:', req.headers['token']);
      // }
      // else if(req.headers['token']){
      //   throw new ForbiddenException('WRONG TOKEN OR NOT GIVEN')
    }

  }
}
