import * as React from 'react';
// import YOUR_COMPONENT from './PATH_TO_YOUR_COMPONENT';

// class constructor

export defualt class App extends React.Component<any, any> {
  constructor(props:any) {
    super(props);
    this.state = {
      foo: 'bar'
    };

    // this.functionBaz = this.functionBaz.bind(this);
  }

  // public functionBaz() {
    // this.setState({baz: false});
  // }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <h2>Hello from App component!</h2>
          </div>
        </div>
      </div>
    );
  }
}


/*

const App = (props:any) => {
  console.log(props, 'props in App component');
  return (
    <div>
      Hello from App component!
    </div>
  );
}

export default App;

*/
