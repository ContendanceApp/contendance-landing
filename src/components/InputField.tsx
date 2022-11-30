type InputProps = {
    type: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
};

const InputField = (props: InputProps) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            className="input-field p-3 border transition-all duration-300 w-full bg-white border-gray-200 rounded-md block my-3 outline-none placeholder-sub tracking-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-primary"
            onChange={(e) => {
                props.onChange(e.target.value);
            }}
            value={props.value}
        />
    );
};

export default InputField;
