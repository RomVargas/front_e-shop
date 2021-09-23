export interface IRegisterForm {
    name: string;
    lastname: string;
    email: string;
    birthday: string;
    password: string;
    id: number;
    role: string;
}

export interface IResultRegister {
    status: boolean;
    message: string;
    token?: string;
}
