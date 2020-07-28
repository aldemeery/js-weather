import React from "react";
import { render } from "react-dom";

const App = () => {
    return (
        <React.StrictMode>
            <div>
                <header>Something</header>
            </div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
