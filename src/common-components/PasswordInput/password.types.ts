export type PasswordInputProps = {
  name: string;
  value?: string;
  error?: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
