import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faHeart, faMinus } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../contents/header";

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../counterSlice';

const Header = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{data.name}</h1>
      <p className="text-lg font-medium text-fg">{data.title}</p>
      <p className="max-w-sm text-muted">{data.caption}</p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
        >
          {data.btnText}
          <FontAwesomeIcon className="text-xs" icon={faArrowUpRightFromSquare} />
        </a>
        <div className="inline-flex items-center rounded-full border border-line text-sm">
          <button
            type="button"
            aria-label="Like"
            onClick={() => dispatch(increment())}
            className="flex items-center gap-2 rounded-l-full px-4 py-2.5 transition-colors hover:text-accent cursor-pointer"
          >
            <FontAwesomeIcon className={count > 0 ? "text-red-500" : ""} icon={faHeart} />
            <span className="tabular-nums">{count}</span>
          </button>
          <button
            type="button"
            aria-label="Remove like"
            onClick={() => dispatch(decrement())}
            className="rounded-r-full border-l border-line px-3 py-2.5 text-muted transition-colors hover:text-fg cursor-pointer"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
