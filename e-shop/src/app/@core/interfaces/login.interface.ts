export interface ILoginForm {
    email: string;
    password: string;
}
 
export interface IResultlogin {
    status: boolean;
    message: string;
    token?: string;
}