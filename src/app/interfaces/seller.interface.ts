export interface Seller{
    id: number;
    name: string;
    type: 'Business' | 'Individual';
    role: string;
    phone: string;
    email: string;
    address: string;
    latitude: number;
    longitude: number;
    pincode: string;
    image: string;
}