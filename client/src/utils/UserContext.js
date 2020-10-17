import { createContext } from 'react';

const UserContext = createContext({
    admin: false,
    user: false
    // changeState: () => undefined
});

export default UserContext;