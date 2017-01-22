var AddTags = React.createClass({
  addTag: function(name) {
    this.textInput.addTag(name)
  },
  handleChange: function(query) {
    this.tags.refreshTags(query);
  },
  render: function() {
    return (
      <div>
        <TagInput
          type={this.props.type}
          editable={this.props.editable}
          inputChanged={this.handleChange}
          ref={(input) => { this.textInput = input; }}
        />
        <TagsView
          type={this.props.type}
          tagClicked={this.addTag}
          ref={(tags) => { this.tags = tags; }}
        />
      </div>
    );
  }
});
