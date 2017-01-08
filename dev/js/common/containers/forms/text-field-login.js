import React from 'react';
import classnames from 'classnames';

const TextField = ({ field, value, error, type, onChange, placeholder }) => {
    return (
        <div>
            <input
                id={field}
                onChange={onChange}
                className="form-control"
                data-validate-length-range="6"
                data-validate-words="2"
                name={field}
                placeholder={placeholder}
                required="required"
                value={value}
                type={type} />
            {error && <span className="help-block">{error}</span>}
        </div>
    );
}

TextField.propTypes = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
}

TextField.defaultProps = {
    type: 'text'
}

export default TextField;