import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="text-text bg-background open-sans">
      <nav className="p-2 flex gap-2 text-lg justify-between items-center mx-[100px]">
        <div className="flex flex-row items-center justify-start gap-4 text-base font-bold">
          <Link to="/">
            <img
              className="px-8 h-[70px] mb-4 min-w-[260px]"
              src="data:image/png;base64,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"
            />
          </Link>
          <Link to="/">
            <img
              src="https://www.svgrepo.com/show/465259/home-alt-3.svg"
              className="filter-invert w-6 h-6 mr-4"
            />
          </Link>
          <Link
            className="hover:text-primary border-b-2 hover:border-b-primary border-b-white transition-colors duration-300"
            to="/about"
            activeProps={{
              className: 'border-b border-b-2',
            }}
            activeOptions={{ exact: true }}
          >
            ABOUT US
          </Link>
          <Link
            className="hover:text-primary border-b-2 hover:border-b-primary border-b-white transition-colors duration-300"
            to="/school"
            activeProps={{
              className: 'border-b border-b-2',
            }}
          >
            SCHOOL POLICIES
          </Link>
          <Link
            className="hover:text-primary border-b-2 hover:border-b-primary border-b-white transition-colors duration-300"
            to="/faq"
            activeProps={{
              className: 'border-b border-b-2',
            }}
          >
            FAQ
          </Link>
          <Link
            className="hover:text-primary border-b-2 hover:border-b-primary border-b-white transition-colors duration-300"
            to="/contact"
            activeProps={{
              className: 'border-b border-b-2',
            }}
          >
            CONTACT US
          </Link>
        </div>
        <Link
          className="hover:text-primary transition-colors duration-300 "
          to="/register"
        >
          <button className="px-8 py-2 bg-primary rounded-2xl hover:opacity-90 transition-opacity duration-300 cursor-pointer mr-4">
            <span className="text-white">REGISTER</span>
          </button>
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
