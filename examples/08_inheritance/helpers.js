function flattenObject(obj){
    var flattenedObject = {};

    for(key in obj){
        flattenedObject[key] = obj[key];
    }

    return flattenedObject;
}

exports.flattenObject = flattenObject;