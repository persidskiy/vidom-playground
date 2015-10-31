//import ComponentNode from '../../node_modules/vidom/lib/nodes/ComponentNode.js'
//import bemClass from './bemClass.js'
//
//function bemClasses(block, mods) {
//    var res = [block];
//
//    if(mods !== undefined) {
//        Object.keys(mods).forEach(function(modName) {
//            let modVal = mods[modName];
//            if(modVal) {
//                res.push(block + '-' + modName + (typeof modVal === 'boolean' ? '': '-' + modVal));
//            }
//        });
//    }
//
//    return res;
//}
//
//
//class BlockNode extends ComponentNode {
//    constructor() {
//        super();
//        this._mods = null;
//    }
//
//    mods(mods) {
//        var oldMods = this._mods;
//        this._mods = mods;
//        var className = Object(this._attrs).className;
//        if(className) {
//            var oldModsClasses = bemClasses()
//            className.split(' ')
//        }
//
//        this._mods.forEach(mod => {
//
//        })
//    }
//
//    //_getInstance() {
//    //    var attrs = this._attrs;
//    //    if(this._mods) {
//    //        var modsClassName = bemClass(this._mods);
//    //        var className = this._attrs ? this._attrs.className : '';
//    //
//    //    }
//    //    return this._instance || (this._instance = new this._component(this._attrs, this._children));
//    //}
//}
//
//
//export default BlockNode;
