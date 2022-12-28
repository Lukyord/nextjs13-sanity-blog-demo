import Link from "next/link";
import Image from "next/image";
import imageLogo from "../../public/images/S__61399194.jpg";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-[1rem] font-bold px-[2rem] py-[2rem]">
      <div className="flex items-center space-x-[0.5rem]">
        <Link href="/">
          <Image
            className="rounded-full object-cover"
            height={50}
            width={50}
            src={imageLogo}
            alt="logo"
          />
        </Link>
        <h1>KT's Blog</h1>
      </div>
      <div>
        <Link
          href="/"
          className="md:px-[2rem] px-[0.5rem] md:py-[1rem] py-[0.25rem] text-base bg-[#f3f6f4] text-[#c27ba0] flex items-center rounded-full"
        >
          Sign up to the most exciting life's blog
        </Link>
      </div>
    </header>
  );
}

export default Header;
