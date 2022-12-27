import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbarCustomize(props: any) {
  return (
    <div>
      <div className="bg-[#1a1a1a] flex items-center justify-between p-[1rem]">
        <Link href="/" className="text-[#c27ba0] flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-[#c27ba0] mr-[1rem]" />
          Go to Website
        </Link>
        <div className="flex items-center border-2 border-[#fff] rounded-xl justify-center p-[0.5rem]">
          <h1 className="text-[#fff] flex items-center">
            Don't forget to have some fun! 👉
          </h1>
          <Link
            href="https://www.youtube.com/"
            className="text-[#c27ba0] flex items-center ml-[1rem]"
          >
            YouTube
          </Link>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbarCustomize;
