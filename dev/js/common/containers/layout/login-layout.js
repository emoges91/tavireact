import React from 'react'

var backgroundOptions = { "Default": "#F7F7F7", };

const LoginLayout = (props) => (
    <div style={{ background: backgroundOptions.Default }} >
        {props.children}
    </div>
)

export default LoginLayout