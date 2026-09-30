import { createContext, useContext, useState } from "react";



const FromContext = createContext(undefined);

const FromProvider = ({ children }) => {
    // Keep the form category as a category id. The backend can send a nested object,
    // but the form and API payload should use the id so the value stays consistent.
    const [form, setForm] = useState({
        full_name:"",
        email:"",
        phone_number:"",
    })

    // function to update form

    // const updateForm =(
    // ) => {
    //     setForm((prev => (
    //         {
    //             ...prev,
    //             [field]: value
    //         }
    //     )))
    // }


    return (
        <FromContext.Provider value={{
            form,
            setForm,
        }}>
            {children}
        </FromContext.Provider>
    );
};

const useFrom = () => {
    const context = useContext(FromContext);
    if (context === undefined) {
        throw new Error("useTask must be used within a TaskProvider");
    }
    return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { FromProvider, useFrom };

