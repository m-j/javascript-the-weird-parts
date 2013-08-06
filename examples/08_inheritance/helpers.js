function flattenObject(obj){
    var flattenedObject = {};

    for(key in obj){
        flattenedObject[key] = obj[key];
    }

    return flattenedObject;
}

var ROOT_PROTO = {}.__proto__;

function deeplySearchForProperty(obj, propertyName, accumulatorArray){
    accumulatorArray.push(obj[propertyName]);

    if(!obj.__proto__){
        return accumulatorArray;
    }
    else {
        deeplySearchForProperty(obj.__proto__, propertyName, accumulatorArray);
    }
}

function deepFlatten(obj){
    var flattenedObject = {};

    for(key in obj){
        flattenedObject[key] = deeplySearchForProperty(obj, key, []);
    }

    return flattenedObject;
}

exports.flattenObject = flattenObject;
exports.deepFlatten = deepFlatten;