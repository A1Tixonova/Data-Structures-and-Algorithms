//this would still work for objects that have only a string or a number as the property.

function isEquivalent(a, b) {
    // arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    
    // If their property lengths are different, they're different objects
     if (aProps.length != bProps.length) {
        return false;
     } 
    
     for (var i = 0; i < aProps.length; i++) {
         var propName = aProps[i];
         if (a[propName] !== b[propName]) {
             return false;
    // If the values of the property are different, not equal
    }
    }
    
    // If everything matched, correct
    return true;
}
