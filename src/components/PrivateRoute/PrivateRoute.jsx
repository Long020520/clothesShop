import React from "react";
import { Route } from "react-router-dom";

// export default class PrivateRoute extends Component {
//   render() {
//     console.log(this.props);
//     const { component: Component, location, RouteKey, ...res } = this.props;

//     const key = RouteKey ? location.pathname + location.search : null;
//     return (
//       <Route
//         {...res}
//         exact={true}
//         key={key}
//         render={(props) => {
//           return <Component {...props} />;
//         }}
//       />
//     );
//   }
// }

export default function RouteWithSubRoutes(route) {
  console.log(route);
  return (
    <Route
      path={route.path}
      render={(props) => <route.component {...props} routes={route} />}
    />
  );
}
