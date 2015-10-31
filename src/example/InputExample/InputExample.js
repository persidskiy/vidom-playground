import StatefulComponent from '../../components/StatefulComponent.js'
import bemClass from '../../helpers/bemClass.js'
import {node} from 'vidom'

import '../XArea/XArea.css'

import Input from '../../components/Input/Input'
import '../../components/Input/size/s.css'
import '../../components/Input/theme/normal.css'

import Button from '../../components/Button/Button'
import '../../components/Button/size/s.css'
import '../../components/Button/theme/normal.css'
import '../../components/Button/pin/clear_round.css'

export default class InputExample extends StatefulComponent {
    getInitialState() {
        return {
            sendValue: ''
        }
    }

    onRender() {
        return node('div')
            .children([
                node('h2').children('Input'),
                node('div')
                    .attrs({className: bemClass('InputExample', null, bemClass('XArea', {bordered: true}))})
                    .children([
                        node('div')
                            .children([
                                node(Input).attrs({
                                    theme: 'normal',
                                    size: 's',
                                    initialValue: 'test',
                                    onValueChange: (val, old) => console.log(val, old)
                                })
                            ]),
                        node('br'),
                        node('div')
                            .children([
                                node(Input).attrs({
                                    theme: 'normal',
                                    size: 's',
                                    placeholder: 'Input with placeholder',
                                    onValueChange: (val, _) => this.setState({sendValue: val})
                                }),
                                node(Button).attrs({
                                    size: 's',
                                    theme: 'normal',
                                    pin: 'clear_round',
                                    disabled: this.getState().sendValue.length === 0,
                                    text: 'Send'
                                })
                            ])
                    ])
            ])
    }
}
