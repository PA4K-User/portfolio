import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faHeart, faMinus } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../contents/header";

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../counterSlice';

const Header = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <p className="font-display text-2xl font-bold sm:text-3xl xl:text-4xl">Hi, I am</p>
      <h1 className="mt-3 font-display text-5xl font-bold leading-[1.05] sm:text-6xl xl:text-7xl">{data.name}</h1>
      <p className="mt-4 font-display text-lg font-extrabold text-muted sm:text-xl">{data.title}</p>
      <p className="mt-2 text-sm leading-body text-fg/70">{data.caption}</p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={data.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border-x-2 border-line px-6 py-2 font-heading text-sm font-semibold uppercase tracking-label transition-colors hover:bg-fg hover:text-surface-fg"
        >
          {data.btnText}
          <FontAwesomeIcon className="text-xs" icon={faArrowUpRightFromSquare} />
        </a>
        <div className="inline-flex items-stretch bg-tile text-sm shadow-tile">
          <button
            type="button"
            aria-label="Like"
            onClick={() => dispatch(increment())}
            className="flex items-center gap-2 px-4 py-2.5 transition-colors hover:bg-fg hover:text-surface-fg cursor-pointer"
          >
            <FontAwesomeIcon className={count > 0 ? "text-red-600" : ""} icon={faHeart} />
            <span className="font-heading font-semibold tabular-nums">{count}</span>
          </button>
          <button
            type="button"
            aria-label="Remove like"
            onClick={() => dispatch(decrement())}
            className="border-l border-fg/20 px-3 py-2.5 transition-colors hover:bg-fg hover:text-surface-fg cursor-pointer"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
