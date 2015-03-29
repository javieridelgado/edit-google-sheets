util = {};

//parse number
util.num = function(obj) {
    if(obj === undefined) return 0;
    if(typeof obj === 'number' || typeof obj === 'boolean') return obj;
    if(typeof obj === 'string') {
        //ensure that the string is *only* a number
        if(!/^\-?\d+(\.\d+)?$/.test(obj)) return obj;
        var res = parseFloat(obj, 10);
        if(isNaN(res)) return obj;
        return res;
    }
    throw "Invalid number: " + JSON.stringify(obj);
};

util.int2cell = function(r,c) {
    return String.fromCharCode(64+c)+r;
};
