import React, {PureComponent} from 'react';

class Demo extends PureComponent {
  static defaultProps = {
    title: 'This is a demo',
    value: 0
  };

  constructor (props) {
    super(props);
    const { title, value } = props;
    this.state = {
      title,
      value
    };
  }

  add = () => {
    this.setState({
      value: this.state.value + 1
    });
  }

  change = ev => {
    this.setState({
      value: ev.target.value
    });
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      title: nextProps.title
    });
  }

  render (){
    return (
      <div className="container">
        <h1>{this.state.title}</h1>
        <div className="counter">{this.state.value}</div>
        <input
          value={this.state.value}
          onChange={this.change} />
        <button onClick={this.add}>Value ++</button>
      </div>
    );
  }
}

export default Demo;
