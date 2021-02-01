import React from 'react';
import { render} from 'react-dom';
import MyComponent from '../src';
const App = () => (
    <MyComponent name={'test'}/>
);
render(<App />, document.getElementById("root"));