import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { Form, Button, FormGroup, Label, Input, Row, Col } from "reactstrap";

class TodoAppAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <Form
        onSubmit={(e) => {
          /// formun default davranisi olan sayfa yenileme ve post etmeyi engelliyorum
          e.preventDefault();
          // statete tuttugum inputu son degerini aliyorum
          const newContent = this.state.value;
          this.props.addTodo(newContent);
          this.setState({
            value: ""
          })
        }}
      >
        <FormGroup>
          <Row>
            <Col className="ml-4" xs="8">
              <Input
                type="text"
                placeholder="Entry Todo"
                value={this.state.value}
                onChange={(e) => {
                  this.setState({
                    value: e.target.value,
                  });
                }}
              />
            </Col>
            <Col xs="3">
              <Button color="success" type="submit">Add Todo</Button>
            </Col>
          </Row>
        </FormGroup>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(TodoAppAdd);
