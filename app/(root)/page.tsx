import { UserButton } from "@clerk/nextjs";
//CONTINUE: 34:42
const Home = () => {
  return (
    <div>
      <p>Home</p>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
