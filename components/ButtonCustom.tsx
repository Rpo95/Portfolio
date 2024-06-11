import Link from "next/link";

import { ButtonCustomProps } from "../types";

export default function ButtonCustom({
  title,
  containerStyles,
  disabled,
  handleClick,
}: ButtonCustomProps) {
  return (
    <Link href="">
      <button
        className={`${containerStyles}`}
        disabled={false}
        type={"button"}
        onClick={handleClick}
      >
        <span>{title}</span>
      </button>
    </Link>
  );
}
