import { useState } from "react";
import { VisibleIcon, VisibleOffIcon } from "assests/icons";
import { Input } from "Components/Input";
import { PasswordInputProps } from "./password.types";
export const PasswordInput = ({
  name,
  error,
  value,
  id,
  onChange,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        name={name}
        value={value}
        type={showPassword ? "text" : "password"}
        onChange={onChange}
        required
        id={id}
      />
      <span
        className="absolute top-1 right-2 right padding-4 cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}>
        {showPassword && <VisibleIcon />}
        {!showPassword && <VisibleOffIcon />}
      </span>
      <h6 className="text-red-default text-sm">{error}</h6>
    </div>
  );
};
