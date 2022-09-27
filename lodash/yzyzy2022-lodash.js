var yzyzy2022 = {
    chunk:function (array,size) {
        var result = []
        var ary = []
        for (var i = 0; i <array.length; i++) {
            if (i % size == 0) {
                result.push(ary)
                var ary = []
            }
            ary.push(array[i])
        }
        result.push(ary)
        result.shift()
        return result
    },

    compact:function (ary) {
        var result = []
        for (var i = 0; i < ary.length; i++) {
            if (ary[i]) {
                result.push(ary[i])
            }
        }
        return result
    },
    

    drop: function (array,n=1) {
        var result = []
        if (n > array.length) {
            return []
        }
        for (var i = 0; i < array.length; i++) {
            if (i >= n) {
                result.push(array[i])
            } 
        }
        return result
    },

    dropRight: function (array,n = 1) {
        var result = []
       
        for (var i = 0; i < array.length - n; i++) {
            result.push(array[i])
        }
        return result
    },

    fill: function (ary,vu,st = 0, ed = ary.length) {
       
        for (var i = st; i < ed; i++) {
            
                ary[i] = vu
            
            
        }
        return ary
    },

    
    flatten: function (array) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            var it = array[i]
            if (Array.isArray(it)) {
                for (var j = 0; j < it.length; j++) {
                    result.push(it[j])
                }
            } else {
                result.push(it)
            }
        }
        return result
    },
    
    flattenDeep: function flattenDeep(array) {
        var result = []
        for (var i = 0; i < array.length; i++) {
            
            if (Array.isArray(array[i])) {
                result  = result.concat(yzyzy2022.flattenDeep(array[i]))
               
            } else {
                result  = result.concat(array[i])
            }
        }
        return result
    },

    flattenDepth: function flattenDepth(array, depth=1) {
        if (depth == 0) {
            return array.slice()
        }
        var result = []
        for (var i = 0; i < array.length; i++) {
            var it = array[i]
            if (Array.isArray(it)) {
                var item = flattenDepth(it,depth - 1)
                for (var j = 0; j < it.length; j++) {
                    result.push(item[j])
                }
            } else {
                result.push(it)
            }
        }
        return result
    },

    indexOf: function (array, value, fromIndex = 0) {
        for (var i = fromIndex; i < array.length; i++) {
           if(array[i] === value) {
            return i
           }
        }
        return -1
    },

    lastIndexOf: function(array, value, fromIndex=array.length-1) {
        for (var i = array.length - 1; i >= 0; i--) {
            if(array[i] === value) {
                return i
               }
        }
        return -1
    },
    
    join:function (array, separator=',') {
        res = ''
        for (var i = 0; i < array.length;i++) {
            res += array[i] + separator
        }
        return res
    },
    last:function (array) {
        return array.length - 1
    },

    head :function (array) {
        if (array.length == 0) {
            return undefined
        } else {
            return array[0]
        }
       
    }
}
















