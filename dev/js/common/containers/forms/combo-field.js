import React from 'react';
import classnames from 'classnames';

const ComboField = ({ field, value, label, options, error, onChange }) => {
    var optionsList = options.map(function (item, i) {
        return (
            <option key={item.id} value={item.id}>{item.name}</option>
        );
    });

    return (
        <div className="item form-group">
            <label className="control-label col-md-3 col-sm-3 col-xs-12" >
                {label}  <span className="required">*</span>
            </label>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <select className="form-control" name={field}>
                    <option >Escoja una opcion</option>
                    {optionsList}
                </select>
            </div>
            {error && <span className="help-block">{error}</span>}
        </div>
    );
}

ComboField.propTypes = {
    field: React.PropTypes.string.isRequired,
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    error: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
}

ComboField.defaultProps = {
}

export default ComboField;