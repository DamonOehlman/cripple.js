(function() {
    var features = {
        'Object': [
            'create',
            'defineProperty',
            'defineProperties',
            'getPrototypeOf',
            'keys',
            'seal',
            'freeze',
            'preventExtensions',
            'isSealed',
            'isFrozen',
            'isExtensible',
            // ie8 supported 'getOwnPropertyDescriptor',
            'getOwnPropertyNames'
        ],
    
        'Date': [
            'toISOString',
            'now'
        ],
    
        'Array': [
            'isArray',
            'indexOf',
            'lastIndexOf',
            'every',
            'some',
            'forEach',
            'map',
            'filter',
            'reduce',
            'reduceRight'
        ],
    
        'Function': [
            'bind'
        ],
    
        'String': [
            'trim'
        ]
    };
    
    for (var key in features) {
        var target = this[key],
            props = features[key];
            
        // iterate through the supplied props and delete
        // from either the object or the prototype if it exists
        for (var ii = 0; ii < props.length; ii++) {
            var prop = props[ii];
            
            if (typeof target.prototype[prop] != 'undefined') {
                delete target.prototype[prop];
            }
            else if (typeof target[prop] != 'undefined') {
                delete target[prop];
            }
        }
    }
}());