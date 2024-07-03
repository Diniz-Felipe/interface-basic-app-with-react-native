import { useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import {z, ZodError} from 'zod';

const schema = z.object({
    name: z.string(),
    password: z.string().min(6, 'minimo 6 caractere'),
    email: z.string().min(6, 'minimo 6 caractere')
})

type TypeForm = z.infer<typeof schema>;

export const useFormHooks = () => {
    const { handleSubmit, register, control, formState: { errors, defaultValues  }, } = useForm<TypeForm>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(schema)
    });
    
    const onSubmit = (data: TypeForm) => {
        try {
            const result = schema.parse(data)

            console.log({result})
        } catch (error) {
            if (error instanceof ZodError) {
                console.warn(error.flatten())
            }
        }
    }

    return {
        handleSubmit, 
        onSubmit, 
        control, 
    register, errors, defaultValues}

    // return (
    //     <Form.Root>
    //         <Form.TextInput 
    //             {...register('name')}
    //             control={control}
    //             placeholder='name'
    //             name='name'
    //             errorMessage={errors.name?.message}
    //         />
    //         <Form.TextInput 
    //             {...register('password')}
    //             name='password'
    //             control={control}
    //             placeholder='name'
    //             errorMessage={errors.name?.message}
    //         />
    //     </Form.Root>
    // );
};
// import { zodResolver } from 'react-hook-form';

// type ILogin = { 
//     Email: string; 
//     Password: string 
// };

// type IRegister = { 
//     Name: string; 
//     Email: string; 
//     Password: string;
// };

// export type TypeForm = {
//     register: IRegister;
//     login: ILogin;
// };

// export const useFormHook = () => {
//     const { formState: { errors, defaultValues  }, register, } = useForm<TypeForm>();

//     const error = () => console.log(`Email errors', ${errors?.login?.Email}`)

//     // useEffect(() => {
//     //     console.log(`Email errors', ${errors?.Email}`)
//     // }, [errors?.Email]);
    
//     const onSubmit = () => console.log(
//         defaultValues?.login?.Email,
//         defaultValues?.login?.Password
//     )

//     return { onSubmit, error };
// };