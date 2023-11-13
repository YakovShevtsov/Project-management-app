import { forwardRef } from "react";

const InputGroup = forwardRef(
  ({ invalid, textarea, labelText, ...props }, inputRef) => {
    let inputStyles = "w-full rounded border p-3 bg-white";
    let labelStyles = "text-lg font-semibold";

    if (invalid) {
      inputStyles += " bg-red-100 border-red-200 text-red-500";
      labelStyles += " text-red-500";
    }

    return (
      <p className="flex flex-col gap-1">
        <label className={labelStyles}>{labelText}</label>
        {!textarea ? (
          <input
            className={inputStyles}
            {...props}
            ref={inputRef}
          />
        ) : (
          <textarea
            className={`${inputStyles} h-[10rem]`}
            {...props}
            ref={inputRef}
          ></textarea>
        )}
      </p>
    );
  }
);

export default InputGroup;
