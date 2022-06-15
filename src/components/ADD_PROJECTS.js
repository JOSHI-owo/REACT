import React, { Component } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from "react-markdown";

class ADD_PROJECTS extends Component {
  state = {
    imageUrl: "",
    title: "",
    excerpt: "",
    body: "",
    submitMessage: "",
    submitMessageTextcolor: "",
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onBodyChange = (value) => {
    this.setState({
      body: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    let isSuccesfull = true;
    const { name } = this.state;

    if (isSuccesfull) {
      this.setState({
        submitMessage: `Project published successfully ${name}`,
        Z: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Publish failed",
        submitMessageTextcolor: "text-danger",
      });
    }
  };

  render() {
    const { imageUrl, title, body, submitMessage, submitMessageTextcolor } =
      this.state;
    return (
      <div className="container-fluid my-5 py-5">
        <h1 className="text-center my-5 font-weight-light">
          Add <span className="text-info">Blog</span>
        </h1>
        <div className="row px-3 px-lg-5">
          <div className="col-12 col-lg-6 px-lg-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="imageUrl">Featured Image Url *</label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Title *</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="excerpt">Excerpt *</label>
                <input
                  type="text"
                  name="excerpt"
                  id="excerpt"
                  className="form-control"
                  onChange={this.onChange}
                  required
                />
              </div>
              <SimpleMDE
                onChange={this.onBodyChange}
                options={{
                  hideIcons: ["preview", "side-by-side", "fullscreen"],
                }}
              />
              <button
                type="submit"
                className="btn btn-dark btn-block my-5"
                style={{ backgroundColor: "black" }}
              >
                Publish
              </button>
            </form>
            <div className="text-center">
              <h5 className={submitMessageTextcolor}>{submitMessage}</h5>
            </div>
          </div>
          <div className="col-12 col-lg-6 markdown">
            <div className="justify-content-center">
              <img src={imageUrl} alt={title} />
            </div>
            <h1 className="font-weight-light text-center my-5">{title}</h1>
            <ReactMarkdown source={body} />
          </div>
        </div>
      </div>
    );
  }
}
export default ADD_PROJECTS;
