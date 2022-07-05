import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav>
        <Image src="/assets/svg/logo.svg" alt="logo" width={200} height={40} />
      </nav>
    </header>
  );
};

export default Header;
