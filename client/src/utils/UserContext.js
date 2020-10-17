import { createContext } from 'react';

const UserContext = createContext({
    admin: false,
    user: false
});

export default UserContext;