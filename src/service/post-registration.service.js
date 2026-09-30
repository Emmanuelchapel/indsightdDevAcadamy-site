// service function for registration
const baseUrl = import.meta.env.VITE_BASE_URL
export const register = async (full_name, email, phone_number) => {

    const payLoad = {
        full_name,
        email,
        phone_number
    }

    // call in the fetch method
   try {

     const response = await fetch(`${baseUrl}/api/v1/registrations/register/`, {
        method: 'POST',
        headers: {
           "Content-Type": "application/json"
        },

        body: JSON.stringify(payLoad)

    })

    // check if the response is not ok
    if (!response.ok) {
        throw new Error("Something went wrong check net work connection");
        
    }
    
    const data = await response.json();

    return data;

    
   } catch (error) {
    
    return{ error : error}
   }

}