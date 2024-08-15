function StockStatus() {
  return (
    <div className="flex flex-row items-center">
      <input
        type="checkbox"
        defaultChecked
        className="checkbox checkbox-error"
      />
      <span className="label-text pl-2">In Stock</span>
    </div>
  );
}

export default StockStatus;
