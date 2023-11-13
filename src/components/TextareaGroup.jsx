const TextareaGroup = ({ labelText, ...props }) => {
  return (
    <p className="flex flex-col gap-1">
      <label className="label">{labelText}</label>
      <textarea
        className="input min-h-[150px]"
        {...props}
      ></textarea>
    </p>
  );
};

export default TextareaGroup;
