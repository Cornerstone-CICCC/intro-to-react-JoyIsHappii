const Header = () => {
  return (
    <header className ="header">
      <h1 className="text-xl font-bold">Today's Date: {new Date().toLocaleDateString()}</h1>
    </header>
  );
};

export default Header;