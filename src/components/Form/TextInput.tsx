import React from 'react';
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { TextInput } from '@/src/components/Form/styled';

interface ITextInputProps {
    placeholder?: string;
    label?: string;
    errorMessage?: string;
};

export function Input <TypeForm extends FieldValues> ({ 
    rules, 
    name, 
    control, 
    ...inputProps }: UseControllerProps<TypeForm>
& ITextInputProps) {

    return <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onBlur, onChange, value } }) => (
            <TextInput
                {...inputProps}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        )}
    />
};