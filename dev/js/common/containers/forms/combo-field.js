import React from 'react';
import classnames from 'classnames';

const ComboField = ({ field, value, label, error, onChange }) => {
    return (
        <div className="item form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12" for={field}>
                {label}  <span className="required">*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <select className="form-control" name={field}>
                    <option>Choose option</option>
                    <option>Option one</option>
                    <option>Option two</option>
                    <option>Option three</option>
                    <option>Option four</option>
                </select>
            </div>
        </div>
    );
}

ComboField.propTypes = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
}

ComboField.defaultProps = {
}

export default ComboField;