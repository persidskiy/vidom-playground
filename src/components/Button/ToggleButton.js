import Button from './Button'

export default class ToggleButton extends Button {
    getMods() {
        var sup = super.getMods();
        return {
            ...sup,
            checked: this.getState().checked
        };
    }

    getInitialState(attrs) {
        var sup = super.getInitialState(attrs);
        return {...sup,
            checked: false
        };
    }

    _onClick(e) {
        super._onClick(e);
        super._onClick(e);
        this._setStateIfPossible({
            checked: this.getAttrs().mode === 'radio' ? true : !this.getState().checked
        })
    }
}
