function Sidebar() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-bold">Filter By</h1>
      <div className="collapse bg-base-100 rounded-none">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium">Price</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse bg-base-100 rounded-none">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Style</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse bg-base-100 rounded-none">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium">Type</div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export { Sidebar };
