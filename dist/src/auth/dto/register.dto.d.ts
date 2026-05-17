import { Role } from '../../generated/client/enums.js';
export declare class RegisterDto {
    email: string;
    password: string;
    name: string;
    role?: Role;
}
