const flatten = ([first, ...rest]) => {
  if (first === undefined) {
    return [];
  }
  else if (!Array.isArray(first)) {
    return [first, ...flatten(rest)];
  }
  else {
    return [...flatten(first), ...flatten(rest)];
  }
};

export default flatten;

const list = [1, 2, [3, 5], [[4, 3], 2]];

flatten(list);
// [1, 2, 3, 5, 4, 3, 2]