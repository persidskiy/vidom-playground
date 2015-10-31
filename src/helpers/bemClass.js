export default function bemClass(block, mods, ...extra) {
    var res = [block].concat(extra);

    if(mods != undefined) {
        Object.keys(mods).forEach(function(modName) {
            let modVal = mods[modName];
            if(modVal) {
                res.push(block + '-' + modName + (typeof modVal === 'boolean' ? '': '-' + modVal));
            }
        });
    }

    return res.join(' ');
}
