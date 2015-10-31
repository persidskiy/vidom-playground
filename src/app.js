import {node, Component, mountToDom} from 'vidom';
import ButtonExample from './example/ButtonExample/ButtonExample'
import InputExample from './example/InputExample/InputExample'


import './app.css'


class App extends Component {
    onRender() {
        return node('div')
            .attrs({className: 'app'})
            .children([
                node(ButtonExample).key('button-example'),
                node(InputExample).key('input-example')
            ]);
    }
}


const rootDomNode = document.body.appendChild(document.createElement('div'));
rootDomNode.className = 'root';
mountToDom(rootDomNode, node(App));
