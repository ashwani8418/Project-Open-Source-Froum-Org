import React from "react";
import {Form, FormControl, Button} from "react-bootstrap"
import "./index.css"

class Filters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      landmark: "",
      area: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]:e.target.value})
  }

  handleSubmission = () => {
    let temp = {
      landmark : this.state.landmark,
      area : this.state.area,
    }
    this.props.updateFilters(temp)
  }

  render ( ){
    return <div className="filter-bar">
        <Form inline>
          <FormControl type="text" placeholder="Search your query" value={this.state.area} name="area" onChange={(e)=>{this.handleChange(e)}} className="mr-sm-2" />
          <Button variant="outline-success" onClick={()=>{this.handleSubmission()}}>Search</Button>
        </Form>
    </div>
  }
}
export default  Filters;
