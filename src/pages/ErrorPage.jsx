import { useRouteError } from 'react-router-dom';

export function ErrorPage({error}) {

  return (
    <div className="error">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error occurred.</p>
      <p><i>{error.message}</i></p>
    </div>
  );
}
