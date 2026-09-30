import { useEffect, useState } from "react";
import ThemeDiv from "../components/ThemeDiv";
import { useFrom } from "../context/FormContext";
import { useModal } from "../context/modalContext";
import { useToast } from "../context/ToastContext";
import { register } from "../service/post-registration.service";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import OverLay from "../ui/OverLay";
import RegisterForm from "../ui/RegisterForm";

const HeroSection = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const showInviteModal = isModalOpen("Register");
    const { form } = useFrom()
    const { showToast } = useToast();
    //  state to handle loading
    const [isLoading, setIsLoading] = useState(false);


    // handle form registration 
    const handelSubmite = () => {

        // call the register function
        const register_user = async (full_name, email, phone_number) => {
            setIsLoading(true)
            try {
                const response = await register(full_name, email, phone_number);
                //  check if the request is successful
                if (response?.success) {
                    showToast(response?.message, 'Success');
                    closeModal('Register')
                    console.log(response)

                }
            } finally {
               setIsLoading(false)
            }
        }

        register_user(form?.full_name, form?.email, form?.phone_number)
    }



    return (
        <>
            {/* container */}
            <ThemeDiv className={'w-[100%]'}>
                {showInviteModal && (
                    <OverLay>
                        <Modal modal={'Register'}>
                            <RegisterForm name={'Register'} submit={handelSubmite} isLoading={isLoading} />
                        </Modal>
                    </OverLay>
                )}
                <div className=" hero-image  flex flex-col gap-[40px] flex-nowrap justify-center items-center h-[100vh] sm:h-[80vh] p-[16px]">
                    {/* head line */}
                    <div className="flex flex-col justify-center items-center gap-1.5">
                        <h1 className="text-5xl sm:text-6xl text-display"> <b className="text-(--color-brand-500)">Learn to code</b>. Build Real Project. </h1>
                        <h1 className="text-5xl sm:text-6xl text-display" > Launch Your Career</h1>
                    </div>
                    {/* sub headline */}
                    <div className="flex flex-col justify-center items-center">
                        <p className="flex flex-nowrap text-caption ">A practical web development bootcamp designed to take beginners</p>
                        <p className="text-caption ">from their first line of code to building and deploying real web application</p>
                    </div>
                    {/* action button */}
                    <div className='flex gap-5'>
                        <Button onClick={() => openModal("Register")} Title="Register Now" className={'bg-(--color-brand-500) rounded-[3px] font-semibold text-white w-[200px] translate-x-[-66px] sm:translate-x-0 '} />
                    </div>
                </div>
            </ThemeDiv>
        </>
    );
}

export default HeroSection;

function isModalOpen(arg0: string) {
    throw new Error("Function not implemented.");
}
