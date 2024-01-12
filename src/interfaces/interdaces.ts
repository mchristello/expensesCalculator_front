
export interface User {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    age: number;
    social: string;
    role: string;
}

export interface Income {
    description: string;
    amount: number;
    category: string;
    date: Date;
    user: User['_id'];
}

export interface Expense {
    description: string;
    amount: number;
    category: string;
    date: Date;
    user: User['_id']
}