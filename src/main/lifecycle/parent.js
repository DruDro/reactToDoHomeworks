import { Mount } from './mount';

export class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      show: true
    };
  }

  render() {
    const { counter, show } = this.state;

    return (
      <div>
        <button onClick={() => this.setState({ counter: counter + 1 })}>Inc</button>
        <span className="count-text">{counter}</span>
        <br /><br />
        <button onClick={() => this.setState({ show: !show, counter: 0 })}>
          {show ? 'Destroy' : 'Create'}
        </button>

        {show && <Mount code={counter} />}
      </div>
    );
  }
};