type tSaleInfo = {
  discountPercentage: number;
};

function SaleInfo(props: tSaleInfo) {
  return (
    <div className="bg-red-600 text-white p-2 rounded-sm">
      Save {props.discountPercentage}%
    </div>
  );
}

export default SaleInfo;
