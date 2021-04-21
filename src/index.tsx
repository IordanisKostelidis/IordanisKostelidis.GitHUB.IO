import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <div style={{
            textAlign: "center",

        }}>
            <div>Iordanis Kostelidis</div>
            <div>Software Engineer</div>
            <hr/>
            <span>
            Coming soon..., until then, check my <a href={"https://github.com/IordanisKostelidis"}>GitHub Profile</a>
        </span>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
