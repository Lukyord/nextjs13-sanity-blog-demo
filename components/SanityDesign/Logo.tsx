import Image from "next/image";
import imageLogo from "../../public/images/S__61399194.jpg";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-[0.2rem]">
      <Image
        className="rounded-full object-cover"
        height={50}
        width={50}
        src={imageLogo}
        alt="logo"
      />
      {<>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
