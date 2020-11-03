תרגילים / משימות ליום שני 02.11.20:
הקדמה למשימות:
1. יציתת פרוייקט NESTJS וקריאה לו AUTHENTICATE_TOKEN_EXAMPLE
2. יצירת MODULE של USERS.
3. יצירת CONTROLLER של USERS.
4. יצירת 2 SERVICES אחד בשם USERS והשני AUTH
5. יצירת 2 MIDDLEWARE אחד בשם MYLOGGER והשני בשם CHECK_TOKEN
6. יצירת FILTER בשביל שגיאות בשם EXCEPTIONFILTER.
משימות:
1. לבנות מודל של USERS שמכיל את השיטות הבאות:
כל יוזר צריך להכיל את התכונות הבאות:
משתנה יחודי - ID, שם פרטי - FIRSTNAME, שם משפחה LASTNAME
שם משתמש - USERNAME שצריך להיות מסוג EMAIL. וסיסמא - PASSWORD.
ומשתנה אופציונלי בשם TOKEN (נא לבדוק איך עושים משתנה לא חובה).
המשתמש הראשון שחייב להיות שם יהיה : {id : 1, username: "test", password: "test", firstname: "test", lastname: "Testing"}
תוסיפו בבקשה רק עוד משתמש אחד (אתם מוזמנים להוסיף יותר, כמה ואיזה שאתם רוצים).
2. להשתמש בSERVICE של USERS
לעשות בו 2 שיטות
שיטה להחזרת היוזרים הקיימים שנקראת GETALL
השיטה תחזיר מערך של יוזרים או OBSERVABLE של מערך של יוזרים.
שיטה שניה שתחזיר יוזר לפי הID שלו GETBYID:
השיטה תחזיר יוזר בודד או OBSERVABLE של USER בודד:
יוחזרו כל התכונות שלו.
להשתמש בSERVICE של AUTH
ולעשןת בו שיטה שנקראת AUTHENTICATE 
מטרת השיטה היא להעביר USERNAME וPASSWORD ולקבל TOKEN בחזרה
מהשיטה הזו יחזור יוזר עם כל הפרטים חוץ מהPASSWORD ובמקומו יהיה הTOKEN.
ערך הTOKEN יהיה "My-Token" כרגע לכולם.
3. בUSER CONTROLLER יהיה 3 ROUTES של בקשת GET ל "/USERS" 
שתשתמש בSERVICE של USERS להחזיר בצורה של JSON את כל היוזרים במערכת בלי הסיסמא שלהם.
אותו דבר רק לפי הID של יוזר נקבל מבקשת  GET ל "id:/USERS" בצורה של JSON את כל הפרטים של המשתמש הבודד מבלי הסיסמא שלו.
הROUTE בשני היה של בקשת POST ל'/users/authenticate' 
בקשה תשתמש בAUTH SERVICE בשישת הAUTHETICATE ותחזיר את כל הפרטים של המתשמש בלי סיסמא
ועם TOKEN במקום.
4. לכל אחד מהבקשות בCONTROLLER יש להעביר ל2 MIDDLEWARE ים ,
הראשון יעשה CONSOLE.LOG לבקשות הGET והPOST בצורה נפרדת:
לבקשת הGET של ה "/users" וה"users/:id" ירשמו הפרמטרים שעוברים בHEADER של הבקשה והPARAMS של הבקשה.
בCONSOLE ויועברו לMIDDLEWARE השני של CHECK_TOKEN ,
שיעשה בדיקה האם בHEADER או בPARAMS יש את הטוקן : "My-Token".
אם כן אז הכל יעבור בהצלחה ויעביר את הבקשה העלה ואם לא אז יזרוק חריגה/שגיאה של HTTPFORBIDDEN
בנוסף הMIDDLEWARE הראשון לבקשות POST ל "users/authenticate" 
יעשה CONSOLE.LOG לפרמטרים של BODY וזהו.
והשני לא יעבוד על ה"users/authenticate" לבקשות מסוג POST 
5. במקרה של שגיאה מסוג של HTTPFORBIDDEN יש ליצור FILTER אשר יתלבש על השגיאה 
ולעשות שגיאה חדשה משלנו מסוג HTTPBADTOKEN ותכיל את ההודעה "WRONG TOKEN OR NOT GIVEN". (משימה למתקדמים)
או לחליפין פשוט לעשות שהשגיאה שתציג את ההודעה משלנו "WRONG TOKEN OR NOT GIVEN".
6. להשתמש בPOSTMAN ולבדוק שהכל עובד תקין.
סופ"ש נעים , משימה לא קשה במיוחד מספיק לכם יום ראשון בשביל לעשות אותה,
זאת משימה שבודקת את הידע שנלמד עד עכשיו, יש להגיע מוכנים עם המשימה ביום שני.
שיהיה בהצלחה חברים.
 


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
