import { createContext, useContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";


type AppContextType = {
    // Maps
    isPreviewOpen: boolean;
    setPreviewOpen: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    // Maps
    const [isPreviewOpen, setPreviewOpen] = useState(false);

    return (
        <AppContext.Provider
            value={{
                // Maps
                isPreviewOpen,
                setPreviewOpen
            }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};