var MaterialsTags = React.createClass({
  getInitialState: function() {
    return {
      materials: []
    };
  },

  handleClick: function(name) {
    this.props.tagClicked(name);
  },

  componentDidMount: function() {
    this.refreshTags();
  },

  refreshTags: function(query) {
    var that = this;
    var materials = [];

    if (query === undefined) {
      $.get("/materials").then(function(resp) {
        that.setState({ materials: resp.data });
      });
    } else {
      $.get("/materials/filter", {query: query}).then(function(resp) {
        that.setState({ materials: resp.data });
      });
    }
  },

  render: function() {
    const materialItems = this.state.materials.map((material) =>
      <span
        key={material.id}
        className="label label-info"
        onClick={this.handleClick.bind(null, material.name)}
      >
      {material.name}
      </span>
    );
    return (
      <div className="material-items">{materialItems}</div>
    );
  }
});
