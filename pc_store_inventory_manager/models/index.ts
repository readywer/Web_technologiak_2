export interface CustomerDTO {
    id: number;
    name: string;
    address: string;
    email: string;
}
export interface ComputerDTO {
    id: number;
    name: string;
    price: number;
    cpu: string;
    cooler: string;
    mobo: string;
    ram: string;
    gpu: string;
    psu: string;
    case: string;
}
export interface PurchaseDTO {
    id: number;
    date: string;
    deliverytype: string;
    computer: ComputerDTO | null;
    customer: ComputerDTO | null;
}
export interface UserDTO {
    id: number;
    name: string;
    email: string;
    password: string | null;
}
export interface LoginDTO {
    email: string;
    password: string;
}
export interface AccessTokenDTO {
    accessToken: string;
}