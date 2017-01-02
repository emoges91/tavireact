import React from 'react';
import classnames from 'classnames';

const TextField = ({ field, value, label, error, type, onChange }) => {
    return (
        <div className="item form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12" for={field}>
                {label} <span className="required">*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <input id={field}
                    onChange={onChange}
                    className="form-control col-md-7 col-xs-12"
                    data-validate-length-range="6"
                    data-validate-words="2"
                    name={field}
                    placeholder="BTL-1334"
                    required="required"
                    value={value}
                    type={type} />
                {error && <span className="help-block">{error}</span>}
            </div>
        </div>
    );
}

TextField.propTypes = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    type: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
}

TextField.defaultProps = {
    type: 'text'
}

export default TextField;