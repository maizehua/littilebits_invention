var TagsView = React.createClass({
  getInitialState: function() {
    return {
      tags: []
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
    var tags = [];

    if (query === undefined) {
      $.get("/" + this.props.type).then(function(resp) {
        that.setState({ tags: resp.data });
      });
    } else {
      $.get("/" + this.props.type + "/filter", {query: query}).then(function(resp) {
        that.setState({ tags: resp.data });
      });
    }
  },

  render: function() {
    const tagItems = this.state.tags.map((tag) =>
      <span
        key={tag.id}
        className="label label-info"
        onClick={this.handleClick.bind(null, tag.name)}
      >
      {tag.name}
      </span>
    );
    return (
      <div className="tag-items">{tagItems}</div>
    );
  }
});
