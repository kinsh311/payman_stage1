import React from 'react';
import ReactDom from 'react-dom';


const Info = (props) =>(
  <div>
    <h1>hello</h1>
    <p>this is hoc and {props.info}</p>
    </div>
);

const withAdminWarnig = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>this is private</p>}
            <WrappedComponent {...props}/>
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated && <WrappedComponent {...props}/>}
        </div>
    )
}
const Admininfo = withAdminWarnig(Info);
const Authinfo = requireAuthentication(Info);
ReactDom.render(<Authinfo isAuthenticated = {true} info="this is from props" />,document.getElementById('app'));