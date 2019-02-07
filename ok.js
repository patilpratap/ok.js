var ok = (function () {
    function getIndetifiersFromString(str) {
        var arr = str.split(',');
        var trimmedArray = [];
        arr.forEach(element => {
            trimmedArray.push(element.trim());
        });
        return trimmedArray;
    };
    
    function splitArrayIntoArrays(arr) {
        var myjson = {
            'ids': [],
            'classes': []
        };
        arr.forEach(element => {
            if (element[0] === '#') {
                var temp = element.substr(1, element.length);
                myjson.ids.push(temp);
            } else if (element[0] === '.') {
                var temp = element.substr(1, element.length);
                myjson.classes.push(temp);
            }
        });
        return myjson;
    };
    
    function idAndClasses(str) {
        return splitArrayIntoArrays(getIndetifiersFromString(str));
    };
    
    function getElementsFromDocuments(document, str) {
        var myjson = idAndClasses(str);
        var elements = [];
        myjson.ids.forEach(myid => {
            var ele = document.getElementById(myid);
            if (ele !== null) {
                elements.push(ele);
            }
        });
        myjson.classes.forEach(myclass => {
            var eles = document.getElementsByClassName(myclass);
            elements.push(eles);
        });
        return elements;
    };
    
    function applyOnElements(document, str, applyFunction, value) {
        getElementsFromDocuments(document, str).forEach(element => {
            applyFunction(element, value);
        });
    };

    return {
        idAndClasses : idAndClasses,
        applyOnElements : applyOnElements
    };
})();
