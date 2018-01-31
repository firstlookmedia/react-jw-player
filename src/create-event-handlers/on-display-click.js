function onDisplayClick(event) {
  if (typeof this.props.onClick === 'function') {
    this.props.onClick(event);
  }
}

export default onDisplayClick;
