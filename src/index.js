import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';
import Search from './Search'; // eslint-disable-line no-unused-vars
import './style.css';

const App = () => ( // eslint-disable-line no-unused-vars
        <React.StrictMode>
            <div className="content">
                <Search />
            </div>
        </React.StrictMode>
);

render(<App />, document.getElementById('root'));
