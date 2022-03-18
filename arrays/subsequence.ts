var isSubsequence = function (s: number[], t: number[]) {
  let map: number[] = [];
  let map2: number[] = [];

  for (var i = 0; i < s.length; i++) {
    map.push(s[i]);
  }

  for (var i = 0; i < t.length; i++) {
    if (map.includes(t[i])) {
      map2.push(t[i]);
    }
    return map2;
  }
};
