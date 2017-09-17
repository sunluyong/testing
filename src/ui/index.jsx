import React, { Component } from 'react';

class Demo extends Component {
  static defaultProps = {
    title: 'This is a demo',
    value: 0
  };

  constructor (props) {
    super(props);

    this.state = {
      value: props.value
    };
  }

  add = () => {
    this.setState({
      vaule: this.state.value ++
    });
  }

  display = (ev) => {
    this.setState({
      value: ev.target.value
    });
  }

  componentDidMount() {
    this.container.style.backgroundColor = '#f2f3f7';
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      title: nextProps.title
    });
  }

  render() {
    return (
      <div className="demo" ref={container => this.container = container}>
        <h1>{this.props.title}</h1>
        <div className="counter">{this.state.value}</div>
        <input value={this.state.value} onChange={this.display} />
        <button onClick={this.add}>value ++</button>
      </div>
    );
  }
}

export default Demo;
