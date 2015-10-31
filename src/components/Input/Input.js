import {node, Component} from 'vidom'
import StatefulComponent from '../StatefulComponent'
import bemClass from '../../helpers/bemClass'

import './Input.css'

class Input extends StatefulComponent {
    getInitialState(attrs) {
        console.log('set initial value:', attrs.initialValue);
        return {
            value: attrs.initialValue || '',
            clearHovered: false
        }
    }

    getMods() {
        var state = this.getState();
        var attrs = this.getAttrs();
        var obj = {};
        ['hovered', 'focused'].forEach(key => obj[key] = state[key]);
        ['size', 'theme', 'disabled'].forEach(key => obj[key] = attrs[key]);
        return obj;
    }

    onRender(attrs) {
        return node('div')
            .attrs({className: bemClass('Input', this.getMods(), attrs.className)})
            .children([
                node('span')
                    .attrs({
                        className: bemClass('Input--clear', {
                            visible: this.getState().value.length > 0,
                            hovered: this.getState().clearHovered
                        }),
                        onMouseOver: e => this._setStateIfPossible({clearHovered: true}),
                        onMouseOut: e => this._setStateIfPossible({clearHovered: false}),
                        onMouseDown: e => this._onClearMouseDown(e)
                    }),
                node('input')
                    .attrs({
                        className: bemClass('Input--control'),
                        placeholder: this.getAttrs().placeholder,
                        value: this.getState().value,
                        onChange: e => this._onChange(e),
                        onFocus: e => this._setStateIfPossible({focused: true}),
                        onBlur: e => this._setStateIfPossible({focused: false}),
                        onMouseOver: e => this._setStateIfPossible({hovered: true}),
                        onMouseOut: e => this._setStateIfPossible({hovered: false})
                    })
            ])
    }

    _setStateIfPossible(state) {
        this.getAttrs().disabled || this.setState(state);
    }

    _onChange(e) {
        this.setState({value: e.target.value});
    }

    _onClearMouseDown(e) {
        if(this.getState().focused) {
            e.preventDefault();
        } else {
            setTimeout(() => this._setStateIfPossible({focused: true}), 0);
        }
        this._setStateIfPossible({value: ''});
    }
}

class InputControl extends Component {
    onRender(attrs) {
        return node('input')
            .attrs({value: attrs.value})
    }
}

export default Input;
