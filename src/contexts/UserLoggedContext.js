import { createContext } from 'react';

const UserLoggedContext = createContext({ token: null, update: () => {} });

export default UserLoggedContext;
