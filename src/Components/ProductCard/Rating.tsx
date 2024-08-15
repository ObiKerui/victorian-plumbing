type tRatingProps = {
  rating: number;
  reviewsCount: number;
};

function Rating(props: tRatingProps) {
  return (
    <div className="flex flex-row gap-2 align-bottom">
      <div className="flex flex-row items-center">
        {[0, 1, 2, 3, 4].map(elem => {
          return (
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row items-center">
        <span className="text-xs">{props.reviewsCount}</span>
      </div>
    </div>
  );
}

export default Rating;
