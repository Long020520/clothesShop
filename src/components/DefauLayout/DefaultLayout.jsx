import React, { Component } from "react";
import routes from "../../routes";

import { Redirect, Switch } from "react-router-dom";
import RouteWithSubRoutes from "../PrivateRoute/PrivateRoute";
import { Button } from "reactstrap";
// import Dress from "../Dress/Dress";
// import Home from "../Home/Home";
import { connect } from "react-redux";
import { getData } from "../../redux/actions/math.action";
// import mathReducer from "../../redux/reducers/math.reducer";

const DefaultHeader = React.lazy(() => import("./DefaultHeader"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));

const loading = () => <div>Loding....</div>;

class DefaultLayout extends Component {
  componentDidMount() {
    console.log(this.props.data);
  }
  render() {
    console.log("da a¥vao day");
    console.log(this.props);
    return (
      <div>
        <DefaultHeader {...this.props} />
        <div>
          <main>
            <React.Suspense fallback={loading()}>
              <Switch>
                {routes.map((route, i) => {
                  return <RouteWithSubRoutes key={i} {...route} />;
                })}
                <Redirect from="/" to="/home" />
              </Switch>
            </React.Suspense>
          </main>
        </div>
        <DefaultFooter {...this.props} />
        {/* <Button
          onClick={() =>
            this.props.history.push("/dress", { imgsource: "oke" })
          }
        >
          rederect
        </Button> */}
        {/* <Button onClick={() => this.props.incre()}>-</Button>
        <p>{this.props.count}</p> */}
      </div>
    );
  }
}

const mapDispatchToProps = {
  getData: getData,
};

const mapStateToProps = (state) => {
  return {
    data: state.dataReducer.data,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
