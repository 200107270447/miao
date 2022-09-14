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
    }
}