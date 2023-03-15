import { FC } from "react";

export const NavItem: FC<{
  onMouseOver?: () => void;
  onClick?: () => void;
  toggled?: boolean;
  shown?: boolean;
}> = ({ children, onMouseOver, onClick, toggled, shown }) => {
  if (shown) {
    return (
      <li>
        <button
          className={`${
            toggled &&
            "relative border-b-2 border-black bg-gray-200 text-black dark:bg-violet-500 dark:text-black"
          } flex h-14  w-full items-center justify-center bg-gray-600 px-4 text-gray-300 sm:h-16 sm:px-6 md:hover:bg-gray-200 md:hover:text-gray-800 md:dark:hover:bg-violet-500`}
          onClick={onClick}
          onMouseOver={onMouseOver}
        >
          {children}
        </button>
      </li>
    );
  } else {
    return <></>;
  }
};
