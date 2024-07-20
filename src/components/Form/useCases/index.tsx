import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, ZodError } from 'zod';

const defaultSchema = z.object({
    name: z.string().optional(),
    password: z.string().min(6, 'minimo 6 caractere').optional(),
    email: z.string().min(6, 'minimo 6 caractere').optional(),
    // search query
    search: z.string().optional(),
})

type TypeForm = z.infer<typeof defaultSchema>;

export const useFormHooks = (customSchema?: z.ZodSchema<TypeForm>) => {
    const schemaToUse = customSchema || defaultSchema;

    const { handleSubmit, register, control, formState: { errors, defaultValues  }, } = useForm<TypeForm>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: zodResolver(schemaToUse)
    });
    
    const onSubmit = (data: TypeForm) => {
        try {
            const result = schemaToUse.parse(data)

            console.log({ result })
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
        register, 
        errors, 
        defaultValues
    }
};