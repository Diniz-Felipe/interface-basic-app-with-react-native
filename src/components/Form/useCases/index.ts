import { useForm } from "react-hook-form";

type ILogin = { 
    Email: string; 
    Password: string 
};

type IRegister = { 
    Name: string; 
    Email: string; 
    Password: string;
};

export type TypeForm = {
    register: IRegister;
    login: ILogin;
};

export const useFormHook = () => {
    const { formState: { errors, defaultValues  }, } = useForm<TypeForm>();

    const error = () => console.log(`Email errors', ${errors?.login?.Email}`)

    // useEffect(() => {
    //     console.log(`Email errors', ${errors?.Email}`)
    // }, [errors?.Email]);
    
    const onSubmit = () => console.log(
        defaultValues?.login?.Email,
        defaultValues?.login?.Password
    )

    return { onSubmit, error };
}
