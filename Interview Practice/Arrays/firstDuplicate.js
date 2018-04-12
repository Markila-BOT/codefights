function firstDuplicate(a) {
    var set = new Set();
    
    for (var i=0;i<a.length;i++) {
        if (set.has(a[i])) {
            return a[i];
        }
           set.add(a[i]);
    }
    return -1;
}
