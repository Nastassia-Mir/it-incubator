function longest(s1, s2) {
    let s1s2 = s1 + s2;
    let itogStr = [...new Set(s1s2)].sort()
                                    .join("")
    return itogStr;
  }