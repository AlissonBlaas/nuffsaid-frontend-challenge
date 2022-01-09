import { useRoutes } from 'react-router';
import routes from './routes';

const Routes = () => {
  const content = useRoutes(routes);

  return <div>{content}</div>;
};

export default Routes;
