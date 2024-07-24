import React from 'react';
import { TextInputProps } from 'react-native';
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
import { TextInput } from '@/src/components/Form/styled';
import { Error } from '@/src/components/Form/Error';

interface ITextInputProps extends TextInputProps {
    placeholder?: string;
    label?: string;
    errorMessage?: string;
    value?: string;
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
        render={({ field: { onBlur, onChange, value }, fieldState: { error } }) => (
            <>
                <TextInput
                    {...inputProps}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                {error?.message && <Error text={error?.message} />}
            </>
        )}
    />
};