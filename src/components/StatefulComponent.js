import {Component} from 'vidom';

class StatefulComponent extends Component {
    onInit() {
        var attrs = this.getAttrs();
        this._prevState = this.getInitialState(attrs);
        this._state = this._prevState;
    }

    getInitialState() {
        return {};
    }

    setState(state, silent) {
        this._prevState = this._state;
        this._state = Object.assign({}, this._state, state);
        silent || this.update(() => this._prevState = this._state);

        var attrs = this.getAttrs();
        Object.keys(state).forEach(key => {
            var observer = attrs['on' + key.charAt(0).toUpperCase() + key.slice(1) + 'Change'];
            if(observer) {
                observer(this._state[key], this._prevState[key]);
            }
        });
    }

    getState() {
        return this._state;
    }

    getPrevState() {
        return this._prevState;
    }
}

export default StatefulComponent;
