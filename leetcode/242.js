var isAnagram = function(s, t) {
    return s.length === t.length&&[...s].sort().join('') ===[...t].sort().join('')
};