import React from 'react';

export const AppContext = React.createContext();

/*export const AppProvider = ({ children }) => {
    const data = useInitialState();
    const [initialState, setInitialState] = useState(data);
    return (
        <AppContext.Provider value={{initialState, setInitialState}}>
            { children }
        </AppContext.Provider>
    )
};*/
export default AppContext;