/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotesCreateFormInputValues = {
    Title?: string;
    Text?: string;
};
export declare type NotesCreateFormValidationValues = {
    Title?: ValidationFunction<string>;
    Text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotesCreateFormOverridesProps = {
    NotesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Title?: PrimitiveOverrideProps<TextFieldProps>;
    Text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotesCreateFormProps = React.PropsWithChildren<{
    overrides?: NotesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotesCreateFormInputValues) => NotesCreateFormInputValues;
    onSuccess?: (fields: NotesCreateFormInputValues) => void;
    onError?: (fields: NotesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotesCreateFormInputValues) => NotesCreateFormInputValues;
    onValidate?: NotesCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotesCreateForm(props: NotesCreateFormProps): React.ReactElement;
