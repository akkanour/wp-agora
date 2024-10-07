import { NavLink, useRouteError, isRouteErrorResponse } from "react-router-dom";
function NotFound() {
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  return (
    
      <div className="h-full flex flex-grow items-center justify-center bg-bglight dark:bg-bgdark">
        <div className="rounded-lg bg-white p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-bold">{errorStatus}</h1>
          <p className="text-gray-600">{errorStatusText}</p>

          <NavLink
            to="/"
            className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
          >
            {" "}
            Go back to Home
          </NavLink>
        </div>
      </div>
  );
}

export default NotFound;
