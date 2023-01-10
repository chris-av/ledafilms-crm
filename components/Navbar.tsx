import classNames from 'classnames';
import { useThemeContext } from '@/state/theme';
import { useNavContext } from '@/state/navopen';
import Link from 'next/link';
import SunIcon from '@/components/icons/Sun';
import MoonIcon from '@/components/icons/Moon';
import ArrowOut from '@/components/icons/ArrowBarLeft';


export default function Navbar() {

  const { theme, toggleTheme } = useThemeContext();
  const { open, toggleOpen } = useNavContext();

  const toggleStyle  = {
    backgroundColor: {
      light: "#F9FCD1",
      dark: "black",
    },
    circleColor: {
      light: "#E2BFBF",
      dark: "white",
    },
    position: {
      light: "translateX(80%)",
      dark: "translateX(0)",
    }
  }

  return (
    <div className={classNames("max-w-[300px] h-full bg-slate-100 float-left transition-all ease-in-out", {
      "w-full": open === true,
      "w-[80px]": open === false,
      })}>

      <div className="w-full flex justify-start my-8 relative">
        <button className={classNames("absolute left-6 text-center transition-transform origin-center", {
          "rotate-0": open == true,
          "rotate-180": open == false,
          })} onClick={toggleOpen}>
          <ArrowOut size={26} />
        </button>
      </div>

      <div className={classNames("flex flex-col h-[85%]", {
        "flex": open === true,
        "invisible": open === false,
        })}>
        <ul className="w-full flex flex-col items-center text-xl h-[50%]">

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/titles">
              <a>Titles</a>
            </Link>
          </li>

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/contracts">
              <a>Contracts</a>
            </Link>
          </li>

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/reports">
              <a>Reports</a>
            </Link>
          </li>

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/settings">
              <a>Settings</a>
            </Link>
          </li>

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>

        </ul>

        <div className="w-full border-[black] border-t"></div>

        <ul className="w-full flex flex-col items-center text-xl">

          <li className="flex items-center w-full h-[60px] pl-8">
            <Link href="/titles">
              <a>Dashboards</a>
            </Link>
          </li>

        </ul>

      </div>

      <div className="cursor-pointer">
        <label htmlFor="checkbox" onClick={() => toggleTheme() } style={{ backgroundColor: toggleStyle.backgroundColor[theme as "dark" | "light"] }} className="relative max-w-[60px] mx-auto bg-[black] flex justify-between items-center px-2 h-[35px] rounded-xl transition-all">
          <SunIcon color="#CCD924" size={16} />
          <MoonIcon color="white" size={16} />
          <div style={{ backgroundColor: toggleStyle.circleColor[theme as "dark" | "light"], transform: toggleStyle.position[theme as "dark" | "light"] }} className="absolute cursor-pointer w-[24px] h-[24px] rounded-[50%] transition-transform ease-lineari duration-300"></div>
        </label>
      </div>

    </div>
  );
}


