import {Root} from "@/components/Form/Root";
import {Input} from "@/components/Form/TextInput";
import {Error} from "@/components/Form/Error";
import {Label} from "@/components/Form/Label";

// interface IForm {
//     Root?: () => React.JSX.Element;
//     Input?: () => React.JSX.Element;
//     Error?: () => React.JSX.Element;
//     Label?: () => React.JSX.Element;
// };

export const Form = {
    Root: Root,
    TextInput: Input,
    Error: Error,
    Label: Label,
};