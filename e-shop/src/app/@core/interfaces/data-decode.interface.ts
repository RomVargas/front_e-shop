import { IUser } from './user.interface';

export interface IDataDecode {
    exp: number,
    iat: number,
    user: IUser,
}