import React from "react";
import {Card, Badge, Button} from "react-bootstrap"
import "./index.css"

const dataSet = [
  {"Ques_id": 1,
"Ques":"How can I use another PHP class static methods inside namespace class?",
"Ques_discription":"Trying to consume a library within a namespace php class.I've implemented previously the ORM library with no problems within a global namespace class. Also tried adding backslash before ORM:: and PDO:...",
"tags": [
{
    "tag_id": 1,
    "tag_name":"Java"
  },
{
    "tag_id": 6,
    "tag_name":"C++"
  },	{
    "tag_id": 9,
    "tag_name":"php"
  },	{
    "tag_id": 21,
    "tag_name":"Jquery"
  },	{
    "tag_id": 331,
    "tag_name":"CSS"
  },
],
"creator_id":11012,
"answer_accepted":true

},
{"Ques_id": 1,
"Ques":"How can I use another PHP class static methods inside namespace class?",
"Ques_discription":"Trying to consume a library within a namespace php class.I've implemented previously the ORM library with no problems within a global namespace class. Also tried adding backslash before ORM:: and PDO:...",
"tags": [
{
    "tag_id": 1,
    "tag_name":"Java"
  },
{
    "tag_id": 6,
    "tag_name":"C++"
  },	{
    "tag_id": 9,
    "tag_name":"php"
  },	{
    "tag_id": 21,
    "tag_name":"Jquery"
  },	{
    "tag_id": 331,
    "tag_name":"CSS"
  },
],
"creator_id":11012,
"answer_accepted":true

},
{"Ques_id": 1,
"Ques":"How can I use another PHP class static methods inside namespace class?",
"Ques_discription":"Trying to consume a library within a namespace php class.I've implemented previously the ORM library with no problems within a global namespace class. Also tried adding backslash before ORM:: and PDO:...",
"tags": [
{
    "tag_id": 1,
    "tag_name":"Java"
  },
{
    "tag_id": 6,
    "tag_name":"C++"
  },	{
    "tag_id": 9,
    "tag_name":"php"
  },	{
    "tag_id": 21,
    "tag_name":"Jquery"
  },	{
    "tag_id": 331,
    "tag_name":"CSS"
  },
],
"creator_id":11012,
"answer_accepted":true

},
{"Ques_id": 1,
"Ques":"How can I use another PHP class static methods inside namespace class?",
"Ques_discription":"Trying to consume a library within a namespace php class.I've implemented previously the ORM library with no problems within a global namespace class. Also tried adding backslash before ORM:: and PDO:...",
"tags": [
{
    "tag_id": 1,
    "tag_name":"Java"
  },
{
    "tag_id": 6,
    "tag_name":"C++"
  },	{
    "tag_id": 9,
    "tag_name":"php"
  },	{
    "tag_id": 21,
    "tag_name":"Jquery"
  },	{
    "tag_id": 331,
    "tag_name":"CSS"
  },
],
"creator_id":11012,
"answer_accepted":true

},
{"Ques_id": 1,
"Ques":"How can I use another PHP class static methods inside namespace class?",
"Ques_discription":"Trying to consume a library within a namespace php class.I've implemented previously the ORM library with no problems within a global namespace class. Also tried adding backslash before ORM:: and PDO:...",
"tags": [
{
    "tag_id": 1,
    "tag_name":"Java"
  },
{
    "tag_id": 6,
    "tag_name":"C++"
  },	{
    "tag_id": 9,
    "tag_name":"php"
  },	{
    "tag_id": 21,
    "tag_name":"Jquery"
  },	{
    "tag_id": 331,
    "tag_name":"CSS"
  },
],
"creator_id":11012,
"answer_accepted":true

},
{"Ques_id": 1,
"Ques":"How can I use another PHP class static methods inside namespace class?",
"Ques_discription":"Trying to consume a library within a namespace php class.I've implemented previously the ORM library with no problems within a global namespace class. Also tried adding backslash before ORM:: and PDO:...",
"tags": [
{
    "tag_id": 1,
    "tag_name":"Java"
  },
{
    "tag_id": 6,
    "tag_name":"C++"
  },	{
    "tag_id": 9,
    "tag_name":"php"
  },	{
    "tag_id": 21,
    "tag_name":"Jquery"
  },	{
    "tag_id": 331,
    "tag_name":"CSS"
  },
],
"creator_id":11012,
"answer_accepted":true

},
{"Ques_id": 1,
"Ques":"How can I use another PHP class static methods inside namespace class?",
"Ques_discription":"Trying to consume a library within a namespace php class.I've implemented previously the ORM library with no problems within a global namespace class. Also tried adding backslash before ORM:: and PDO:...",
"tags": [
{
    "tag_id": 1,
    "tag_name":"Java"
  },
{
    "tag_id": 6,
    "tag_name":"C++"
  },	{
    "tag_id": 9,
    "tag_name":"php"
  },	{
    "tag_id": 21,
    "tag_name":"Jquery"
  },	{
    "tag_id": 331,
    "tag_name":"CSS"
  },
],
"creator_id":11012,
"answer_accepted":true

},
{"Ques_id": 1,
"Ques":"How can I use another PHP class static methods inside namespace class?",
"Ques_discription":"Trying to consume a library within a namespace php class.I've implemented previously the ORM library with no problems within a global namespace class. Also tried adding backslash before ORM:: and PDO:...",
"tags": [
{
    "tag_id": 1,
    "tag_name":"Java"
  },
{
    "tag_id": 6,
    "tag_name":"C++"
  },	{
    "tag_id": 9,
    "tag_name":"php"
  },	{
    "tag_id": 21,
    "tag_name":"Jquery"
  },	{
    "tag_id": 331,
    "tag_name":"CSS"
  },
],
"creator_id":11012,
"answer_accepted":true

},
{"Ques_id": 1,
"Ques":"How can I use another PHP class static methods inside namespace class?",
"Ques_discription":"Trying to consume a library within a namespace php class.I've implemented previously the ORM library with no problems within a global namespace class. Also tried adding backslash before ORM:: and PDO:...",
"tags": [
{
    "tag_id": 1,
    "tag_name":"Java"
  },
{
    "tag_id": 6,
    "tag_name":"C++"
  },	{
    "tag_id": 9,
    "tag_name":"php"
  },	{
    "tag_id": 21,
    "tag_name":"Jquery"
  },	{
    "tag_id": 331,
    "tag_name":"CSS"
  },
],
"creator_id":11012,
"answer_accepted":true

}

]

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSet : []
    }
  }
   componentWillReceiveProps ( nextProps ) {
     console.log("nextPropsnextPropsnextProps",nextProps);
     ///API with Filter
     ///API Update state variable with dataSet
     // this.setState({dataSet: response})
   }
  render ( ){
    return <>
      <div className="property-main-body">
      
      {
        dataSet.map((item,index) =>

          <Card key={index} className="bg-light text-dark property-card">
              <Card.Title>{item.Ques}</Card.Title>
              <Card.Text>
                 {item.Ques_discription}
              </Card.Text>
              <Card.Text>
              <Button variant="success" size="sm">Open this Question </Button>{' '}
              </Card.Text>

              <div>
                {item.tags.map((tag,tag_index) => {
                  return <Badge pill variant="primary" key={tag_index} className="tag-pill">
                  {tag.tag_name}
              </Badge>

                })}
              </div>

            </Card>
        )
      }
    </div>
    </>
  }
}
export default  Dashboard;
