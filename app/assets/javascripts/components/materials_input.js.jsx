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
    throttledHandleChange = _.throttle(this.handleChange, 200);
    return (
      <div className="form-group">
        <label htmlFor="materials">Materials:</label>
        <input
          type="text"
          name="materials"
          id="materials"
          className="form-control"
          onChange={throttledHandleChange}
          ref={(input) => { this.textInput = input; }}
        />
      </div>
    );
  }
});
