import React from "react";
import { render } from "react-dom";
import Search from "./Search";

const App = () => {
    return (
        <React.StrictMode>
            <div className="content">
                <Search />
            </div>
        </React.StrictMode>
    );
};

render(<App />, document.getElementById("root"));
