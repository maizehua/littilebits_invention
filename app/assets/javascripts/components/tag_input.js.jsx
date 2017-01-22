var TagInput = React.createClass({
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
    var opts = {};
    if( !this.props.editable ) {
      opts['readOnly'] = 'readOnly';
    }
    var type = this.props.type;
    return (
      <div className="form-group">
        <label htmlFor={type}>{type}:</label>
        <input
          type="text"
          name={type}
          id={type}
          className="form-control"
          onChange={throttledHandleChange}
          ref={(input) => { this.textInput = input; }}
          {...opts}
        />
      </div>
    );
  }
});
