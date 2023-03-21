const isEqual = (obj1, obj2) => {
    const obj1Keys = object.keys(obj1);
    const obj2Keys = object.keys(obj2);

    if (obj1Keys.length !== obj2Keys.length) {
        return false;
    }

    for (let objKey of obj1Keys) {
        if(obj1[objKey] !== obj2[objKey])
        return false;
    }

    return true;
};


const obj1 = {
    name: 'Ian',
    age: 33
};

const obj1 = {
    name: 'Ian',
    age: 33
};

obj1 == obj2; 
isEqual(obj1, obj2);