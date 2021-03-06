NodeList = React.createClass({
  propTypes: {
    list: React.PropTypes.array
  },
  render() {
    const { list } = this.props;

    return (
      <ul className="list-group">
        {list.map((node, i) => {
          return <Node key={i} file={node}/>
        })}
      </ul>
    )
  }
});