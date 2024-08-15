function Sortby() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        Sort By
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <button className="btn">Item 1</button>
        </li>
        <li>
          <button className="btn">Item 2</button>
        </li>
      </ul>
    </div>
  );
}

export default Sortby;
