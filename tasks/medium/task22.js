function combinStr(str) {
    for (var i = 0; i < str.length; i++) {
        for (var j = i+1; j < str.length+1; j++){
            console.log(str.slice(i, j));
        }
    }
}

combinStr("dog");