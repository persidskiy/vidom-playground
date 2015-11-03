import {node, Component} from 'vidom';
import StatefulComponent from '../StatefulComponent'
import bemClass from '../../helpers/bemClass'

import '../Pointerfocus'
import {is} from '../Keycodes'

import './Button.css'

class Button extends StatefulComponent {
    onInit() {
        super.onInit.apply(this, arguments);
        this._onDocMouseUp = this._onDocMouseUp.bind(this);
        this._onDocKeyUp = this._onDocKeyUp.bind(this);
    }

    getInitialState({size, theme}) {
        return {
            hovered: false,
            pressed: false
        }
    }

    getMods() {
        var state = this.getState();
        var attrs = this.getAttrs();
        var obj = {};
        ['hovered', 'pressed', 'checked', 'focused'].forEach(key => obj[key] = state[key]);
        ['size', 'theme', 'pin', 'disabled'].forEach(key => obj[key] = attrs[key]);
        return obj;
    }

    _tag() {
        return 'button'
    }

    _nodeAttrs() {
        var attrs = this.getAttrs();
        return {
            className: bemClass('Button', this.getMods(), attrs.className),
            'aria-pressed': this.getState().pressed,
            disabled: this.getAttrs().disabled,
            tabindex: this.getAttrs().disabled ? false : this.getAttrs().tabindex,
            onMouseOver: e => {this._setStateIfPossible({hovered: true})},
            onMouseOut: e => {this._setStateIfPossible({hovered: false})},
            onFocus: e => this._setStateIfPossible({focused: true}),
            onBlur: e => this._setStateIfPossible({focused: false}),
            onMouseDown: e => this._onMouseDown(e),
            onMouseUp: e => this._onMouseUp(e),
            onKeyDown: e => this._onKeyDown(e),
            onClick: e => this._onClick(e)
        }
    }

    onRender(_, children) {
        return node(this._tag())
            .attrs(this._nodeAttrs())
            .children(children || [
                node(ButtonText).children(this.getAttrs().text)
            ]);
    }

    _setStateIfPossible(state) {
        this.getAttrs().disabled || this.setState(state);
    }

    _onMouseDown () {
        if(!this.getAttrs().disabled) {
            document.addEventListener('mouseup', this._onDocMouseUp, false);
            this.setState({pressed: true})
        }
    }

    _onDocMouseUp() {
        document.removeEventListener('mouseup', this._onDocMouseUp);
        this.setState({pressed: false});
    }

    _onMouseUp () {
        this.setState({pressed: false})
    }

    _onClick(e) {
        this.getAttrs().onClick && this.getAttrs().onClick(e);
    }

    _onKeyDown(e) {
        var keyCode = e.nativeEvent.keyCode;
        if(is(e.nativeEvent.keyCode, 'SPACE', 'ENTER')) {
            if(!this.getAttrs().disabled) {
                document.addEventListener('keyup', this._onDocKeyUp, false);
                this.setState({pressed: true});
            }
        }
    }

    _onDocKeyUp(e) {
        document.removeEventListener('keyup', this._onDocKeyUp);
        this.setState({pressed: false});
    }
}

class ButtonText extends Component {
    onRender(_, children) {
        return node('span')
            .attrs({className: 'Button--text'}).children(children);

    }
}

Button.Text = ButtonText;

export default Button;
