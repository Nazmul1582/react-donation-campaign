import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section>
      <div className="container mx-auto">
        <div className="h-screen flex flex-col gap-3 justify-center items-center">
          <h2 className="font-bold text-2xl">Oops!</h2>
          <p>Sorry, an unexpected error has occurred.</p>
          <p className="font-semibold italic">
            {error.status} {error.statusText || error.message}
          </p>
          <Link to="/"><button className="btn btn-success">Go Home</button></Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
