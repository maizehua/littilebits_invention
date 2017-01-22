var AddMaterials = React.createClass({
  addTag: function(name) {
    this.textInput.addTag(name)
  },
  handleChange: function(query) {
    this.tags.refreshTags(query);
  },
  render: function() {
    return (
      <div>
        <MaterialsInput
          inputChanged={this.handleChange}
          ref={(input) => { this.textInput = input; }}
        />
        <MaterialsTags
          tagClicked={this.addTag}
          ref={(tags) => { this.tags = tags; }}
        />
      </div>
    );
  }
});
