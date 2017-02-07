import React from 'react';
import classnames from 'classnames';

const SingleCheckboxField = ({ field, checked, label, error, onChange }) => {
    return (
        <div className="item form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12" >
                {label} <span className="required">*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="checkbox">
                    <input type={"checkbox"} className="flat" checked={"checked"} value={"1"} name={field} onChange={onChange} />
                </div>
            </div>
        </div>
    );
}

SingleCheckboxField.propTypes = {
    field: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
}

export default SingleCheckboxField;