export class CreateUserDto {
    id:string
    username:string
    lastName:string
    firstName:string
    email?:string;
    password:string
    accessToken ?:string
}