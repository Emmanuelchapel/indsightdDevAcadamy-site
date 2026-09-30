import InputField from "./InputField";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { useFrom } from "../context/FormContext";
const RegisterForm = ({ name, submit, isLoading }) => {
  // state hold inputs form the input component
  const [email, setemail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // call the hook
  const { setForm, form } = useFrom();

  useEffect(() => {
    // update the state with the current input
    setForm((prev) => ({
      ...prev,
      full_name: fullName,
      email,
      phone_number: phoneNumber,
    }));

     
  },[email, phoneNumber, fullName]);

  console.log(form.email, form.full_name, form.phone_number);

 
  return (
    <>
      <div>
        {/* Registratoin form */}
        <div>
          {/* container */}
          <div className="p-[16px] flex flex-col justify-center, items-center gap-[50px]">
            {/* header container */}
            <div className="flex justify-center items-center">
              <h1 className="text-white font-bold text-3xl">{name}</h1>
            </div>
            {/* form field */}
            <div className="flex flex-col gap-5">
              <InputField
                value={form.full_name || ''}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="Enter your full name"
              />
              <InputField
                value={form.email || ''}
                onChange={(e) => setemail(e.target.value)}
                type="email"
                placeholder="Enter your email"
              />
              <InputField
                value={form.phone_number || ''}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="number"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="flex gap-5">
              <Button
               onClick={()=>submit()}
                Title={isLoading?"Submiting...": "Submite"}
                className={
                  "bg-(--color-brand-500) sm:w-[300px] rounded-[10px] font-semibold text-white w-[200px] translate-x-[-6px] sm:translate-x-0 "
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
