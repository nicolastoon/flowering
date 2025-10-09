import type { MouseEventHandler } from "react";
import { hover, unhover } from "../hover.ts";

type HeaderButtonProp = {
  page: string;
  onClick: MouseEventHandler;
};

export default function HeaderButton({ page, onClick }: HeaderButtonProp) {
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => hover(page)}
      onMouseLeave={() => unhover(page)}
      className="tenor-sans header-btn button"
      id={`${page}-btn`}
    >
      <span className="btn-text" id={`${page}-link-head`}>
        {page}
      </span>
      <span className="btn-text" id={`${page}-link-tail`}>
        {page}
      </span>
    </div>
  );
}
