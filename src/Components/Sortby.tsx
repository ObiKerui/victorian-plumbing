import { useSearchParams } from 'react-router-dom';
import { cn } from '../Utils/Utils';
import { sortByOptions, DEFAULT_SORT_BY } from '../Utils/ProductQuery';

function Sortby() {
  const [searchParams, setSearchParams] = useSearchParams({
    sortBy: '' + DEFAULT_SORT_BY,
  });

  const currSortBy = +(searchParams.get('sortBy') ?? DEFAULT_SORT_BY);

  const setSortBy = (sortBy: number) => {
    setSearchParams(
      prev => {
        prev.set('sortBy', '' + sortBy);
        return prev;
      },
      {
        replace: true,
      }
    );
  };

  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="flex flex-col btn justify-start pt-1 bg-base-100 px-4 items-center"
      >
        <div className="text-xs">Sort By: </div>
        <div>{sortByOptions.get(currSortBy)}</div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        {Array.from(sortByOptions.keys()).map(key => {
          return (
            <li key={key}>
              <button
                className={cn('btn btn-sm bg-base-100 border border-none', {
                  'btn-active': currSortBy === key,
                  'bg-base-200': currSortBy === key,
                })}
                onClick={() => setSortBy(key)}
              >
                {sortByOptions.get(key)}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sortby;
