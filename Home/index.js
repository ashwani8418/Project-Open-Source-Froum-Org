import React from "react";
import {Container} from "react-bootstrap";


import Filters from "./Filters";
import Dashboard from "./Dashboard";
import "./index.css"
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state  = {
      filterData: {}
    }
  }

  updateFilters = (filterData) => {
    console.log("Filters updated");
    this.setState ({filterData})
  }

  render ( ){
    return <Container fluid className="main-body">
        <Filters updateFilters={this.updateFilters}/>

        <Dashboard filterData={this.state.filterData}/>

    </Container>
  }
}
export default  Home;
