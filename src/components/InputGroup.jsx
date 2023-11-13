const InputGroup = ({ labelText, ...props }) => {
  return (
    <p className="flex flex-col gap-1">
      <label className="label">{labelText}</label>
      <input
        className="input"
        {...props}
      />
    </p>
  );
};

export default InputGroup;
