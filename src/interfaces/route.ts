export default interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: React.FC<any>;
  props?: any;
}
