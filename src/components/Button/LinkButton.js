import Button from './Button'

export default class LinkButton extends Button {
    _tag() {
        return 'a'
    }

    _nodeAttrs() {
        var sup = super._nodeAttrs();
        var attrs = this.getAttrs();
        return Object.assign({}, sup, {
            href: attrs.url,
            target: attrs.target
        });
    }
}
