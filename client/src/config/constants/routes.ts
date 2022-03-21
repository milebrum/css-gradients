import { Display } from '../../views';
import TemplatesPage from '../../views/TemplatesPage/TemplatesPage';
import RoutePaths from './route-paths';
import { RouteKeys, RouteType } from './routes.types';

const Routes: { [key in RouteKeys]: RouteType } = {
  main: {
    path: RoutePaths.main,
    component: Display,
  },
  templates: {
    path: RoutePaths.templates,
    component: TemplatesPage,
  },
};

export const RoutesArray = Object.values(Routes).map((value) => value);

export default Routes as typeof Routes;
