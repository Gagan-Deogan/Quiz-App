type HeaderProps = {
  username: string;
  points: number;
};
export const Header = ({ username, points }: HeaderProps) => {
  return (
    <>
      <h1>Welcome {username} to Quiz App</h1>
      <h3>your score is {points}</h3>
    </>
  );
};
