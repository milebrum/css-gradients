interface RouteTypeBase {
  path: string;
  component?: React.ComponentType;
}

interface RouteTypeComponent extends RouteTypeBase {
  component: React.ComponentType<any>;
}

export type RouteKeys =
  | 'main';

export type RouteType = RouteTypeComponent;
