import {Component, node} from 'vidom';

class TodoApp extends Component {
    onRender() {
        return node('div')
            .attrs({className: 'TodoApp'})
    }
}
