import { BiMoviePlay } from "react-icons/bi";

export default function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          href="#"
          className="flex cursor-pointer items-center gap-3 text-3xl font-bold"
        >
          <BiMoviePlay size={40} />
          MovieAPP
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-32 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
