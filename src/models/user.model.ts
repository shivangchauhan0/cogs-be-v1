export interface User {
    id: number;
    name: string;
    email: string;
}

const users: User[] = [];

export const getAllUsers = (): User[] => users;
export const createUser = (user: User) => users.push(user);