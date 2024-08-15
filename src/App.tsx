import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar';

function App() {
  const [searchParams, setSearchParams] = useSearchParams({
    theme: 'light',
  });

  const currTheme = searchParams.get('theme');

  const setTheme = () => {
    setSearchParams(
      prev => {
        prev.set('theme', currTheme === 'light' ? 'dark' : 'light');
        return prev;
      },
      {
        replace: true,
      }
    );
  };

  return (
    <div data-theme={currTheme} className="bg-base-200 mx-auto min-h-screen">
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full px-2 sm:w-1/3 md:w-1/4">
          <div className="sticky top-0 w-full p-4">
            <div className="pb-4">
              <button
                type="button"
                className="btn btn-sm bg-base-100"
                onClick={() => setTheme()}
              >
                Set Theme
              </button>
            </div>

            <Sidebar />
          </div>
        </aside>
        <main role="main" className="flex w-full px-2 pt-1 sm:w-2/3 md:w-3/4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
