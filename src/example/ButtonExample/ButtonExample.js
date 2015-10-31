import StatefulComponent from '../../components/StatefulComponent.js'
import bemClass from '../../helpers/bemClass.js'
import {node} from 'vidom'

import '../XArea/XArea.css'
import '../XTable/XTable.css'

import Button from '../../components/Button/Button.js'
import ToggleButton from '../../components/Button/ToggleButton.js'
import LinkButton from '../../components/Button/LinkButton.js'

import '../../components/Button/size/s.css'
import '../../components/Button/size/xs.css'
import '../../components/Button/size/m.css'
import '../../components/Button/theme/normal.css'
import '../../components/Button/pin/round_brick.css'
import '../../components/Button/pin/round_clear.css'
import '../../components/Button/pin/clear_round.css'
import '../../components/Button/pin/clear_brick.css'
import '../../components/Button/pin/brick_round.css'
import '../../components/Button/pin/brick_clear.css'
import '../../components/Button/pin/brick_brick.css'
import '../../components/Button/pin/clear_clear.css'

import './ButtonExapmle.css'

class ButtonExample extends StatefulComponent {

    getInitialState() {
        return {
            showBackground: false,
            buttonsDisabled: false
        }
    }

    onRender() {
        var sizes = ['xs', 's', 'm'];
        var sizesHead = node('tr').children(sizes.map(s => node('th').children(s)));
        var sizesContent = node('tr').children(sizes.map(s => node('td').children(node(Button)
            .attrs({
                size: s,
                className: bemClass('ButtonExample--button'),
                theme: 'normal',
                disabled: this.getState().buttonsDisabled,
                text: 'Button'
            }))));
        var sizesExample = [
            node('table')
                .attrs({
                    className: bemClass('XArea', {
                        bordered: true,
                        squares: this.getState().showBackground
                    }, 'XTable')
                })
                .children([
                    sizesHead,
                    sizesContent
                ]),
            node('div')
                .attrs({className: 'XArea'})
                .children([
                    node(ToggleButton)
                        .attrs({
                            size: 's',
                            theme: 'normal',
                            pin: 'round_brick',
                            onCheckedChange: checked => this.setState({showBackground: checked}),
                            text: 'Background'
                        }),
                    node(ToggleButton)
                        .attrs({
                            size: 's',
                            theme: 'normal',
                            text: 'Disabled',
                            pin: 'clear_round',
                            onCheckedChange: checked => this.setState({buttonsDisabled: checked})
                        })
                ])
        ];

        var pins = [undefined, 'round_clear', 'clear_round', 'round_brick', 'brick_round', 'brick_clear',
            'clear_brick', 'brick_brick', 'clear_clear'];
        var pinExample = [
            node('br'),
            node('table')
                .attrs({
                    className: bemClass('XArea', {bordered: true}, 'XTable')
                })
                .children([
                    node('tr')
                        .children(pins.map(pin => node('th').children(pin))),
                    node('tr')
                        .children(pins.map(pin => node('td').children(node(Button).attrs({theme: 'normal', size: 's', pin: pin, text: 'Button'}))))
                ])
        ];


        var modesExample = [
            node('br'),
            node('table')
                .attrs({
                    className: bemClass('XArea', {bordered: true}, 'XTable')
                })
                .children([
                    node('tr').children([
                        node('th').children('Link'),
                        node('th').children('Button'),
                        node('th').children('ToggleButton[mode=check]'),
                        node('th').children('ToggleButton[mode=radio]')
                    ]),

                    node('tr').children([
                        node('td').children(node(LinkButton).attrs({theme: 'normal', size: 's', text: 'Button', url: 'http://yandex.ru', target: '_blank'})),
                        node('td').children(node(Button).attrs({theme: 'normal', size: 's', text: 'Button'})),
                        node('td').children(node(ToggleButton).attrs({theme: 'normal', size: 's', mode: 'check', text: 'Button'})),
                        node('td').children(node(ToggleButton).attrs({theme: 'normal', size: 's', mode: 'radio', text: 'Button'}))
                    ])
                ])
        ];

        return node('div')
            .attrs({className: bemClass('ButtonExample')})
            .children(sizesExample.concat(pinExample).concat(modesExample))
    }
}

export default ButtonExample;
