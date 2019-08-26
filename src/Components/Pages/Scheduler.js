import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
//import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

class Scheduler extends Component {
  handleEditorChange = e => {
    console.log("Content was updated:", e.target.getContent());
    console.log(e.target.getContent());
  };
  render() {
    return (
      <React.Fragment>
        <section className="section">
          <h1 className="section-header">
            <div>Tạo mẫu Email</div>
          </h1>
        </section>

        <Editor
          initialValue="<p>Soạn thảo mẫu email tại đây</p>"
          init={{
            plugins: "link image code",
            toolbar:
              "undo redo | bold italic | link image  | alignleft aligncenter alignright | styleselect fontselect |",
            min_height: 500,
            max_height: 600
          }}
          onChange={this.handleEditorChange}
        />

        {/* <MDBCard
          className="card-body"
          style={{ width: "22rem", marginTop: "1rem" }}
        >
          <MDBCardTitle>Email Title</MDBCardTitle>
          <MDBCardText>{this.handleEditorChange}</MDBCardText>
        </MDBCard> */}
      </React.Fragment>
    );
  }
}
export default Scheduler;
