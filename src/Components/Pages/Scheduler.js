import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
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
            <div>Tạo mẫu Email (Sắp ra mắt...)</div>
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
        <br />
        <br />

        <br />

        <br />
      </React.Fragment>
    );
  }
}
export default Scheduler;
