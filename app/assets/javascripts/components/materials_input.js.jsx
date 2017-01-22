var MaterialsInput = React.createClass({
  addTag: function(name) {
    if (this.textInput.value === "") {
      this.textInput.value = name
    } else {
      this.textInput.value = this.textInput.value + ", " + name;
    }
  },

  handleChange: function() {
    this.props.inputChanged(this.textInput.value);
  },
  render: function() {
    return (
      <div className="form-group">
        <label htmlFor="materials">Materials:</label>
        <input
          type="text"
          name="materials"
          id="materials"
          className="form-control"
          onChange={this.handleChange}
          ref={(input) => { this.textInput = input; }}
        />
      </div>
    );
  }
});
