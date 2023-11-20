import { forwardRef } from "react";

const InputGroup = forwardRef(({ textarea, labelText, ...props }, inputRef) => {
  return (
    <p className="flex flex-col gap-1">
      <label className="text-lg font-semibold">{labelText}</label>
      {!textarea ? (
        <input
          className="w-full rounded border p-3 bg-white"
          {...props}
          ref={inputRef}
        />
      ) : (
        <textarea
          className="w-full rounded border p-3 bg-white h-[10rem]"
          {...props}
          ref={inputRef}
        ></textarea>
      )}
    </p>
  );
});

export default InputGroup;
