import {node, Component} from 'vidom';
import StatefulComponent from '../StatefulComponent'
import bemClass from '../../helpers/bemClass'

import './Button.css'

class Button extends StatefulComponent {

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
        ['hovered', 'pressed', 'checked'].forEach(key => obj[key] = state[key]);
        ['size', 'theme', 'pin', 'disabled'].forEach(key => obj[key] = attrs[key]);
        return obj;
    }

    _tag() {
        return 'button'
    }

    _nodeAttrs() {
        var attrs = this.getAttrs()
        return {
            className: bemClass('Button', this.getMods(), attrs.className),
            'aria-pressed': this.getState().pressed,
            disabled: this.getAttrs().disabled,
            tabindex: this.getAttrs().disabled ? false : this.getAttrs().tabindex,
            onMouseOver: e => this._setStateIfPossible({hovered: true}),
            onMouseOut: e => this._setStateIfPossible({hovered: false}),
            onMouseDown: e => this._onMouseDown(e),
            onMouseUp: e => this._onMouseUp(e),
            onKeyDown: e => this._setStateIfPossible({hovered: true}),
            onKeyUp: e => this._setStateIfPossible({hovered: true}),
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
        this.getAttrs().disabled|| this.setState({pressed: true})
    }

    _onMouseUp () {
        this.setState({pressed: false})
    }

    _onClick(e) {
        this.getAttrs().onClick && this.getAttrs().onClick(e);
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
