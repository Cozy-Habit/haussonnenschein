export default interface InputFieldProps {
    label: string;
    placeholder?: string;
    type?: 'date' | 'text' | 'email' | 'tel' | 'number';
    inputType?: 'input' | 'textarea';
    className?: string;
}