var codes = {
    BACKSPACE: 8,
    TAB: 9,
    ENTER: 13,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    INSERT: 45,
    DELETE: 46
};

function is(code, name) {
    return Array.prototype.slice.call(arguments, 1).some(function(name) {
        return codes[name] === code;
    }, this);
}

export {
    codes,
    is
}
