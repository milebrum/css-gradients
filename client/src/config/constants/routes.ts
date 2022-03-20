import { Layout } from '../../components/Layout';
import RoutePaths from './route-paths';
import { RouteKeys, RouteType } from './routes.types';

const Routes: { [key in RouteKeys]: RouteType } = {
  main: {
    path: RoutePaths.main,
    component: Layout,
  },
};

export const RoutesArray = Object.values(Routes).map((value) => value);

export default Routes as typeof Routes;
