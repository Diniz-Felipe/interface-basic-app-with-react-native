import {Root} from "@/src/components/Form/Root";
import {Input} from "@/src/components/Form/TextInput";
import {Error} from "@/src/components/Form/Error";
import {Label} from "@/src/components/Form/Label";

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