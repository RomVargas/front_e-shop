import { IUser } from '@core/interfaces/user.interface';

export interface ISession{
    expiredIn: string;
    token: string;
}

export interface IMeData{
    status: boolean;
    message: string;
    user: IUser;
}