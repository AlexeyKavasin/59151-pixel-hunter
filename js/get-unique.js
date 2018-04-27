export default (arr) => {
  const duplicates = [];
  arr.filter((v, ind) => {
    if (arr.indexOf(v) !== ind) {
      duplicates.push(v);
    }
  });

  return arr.filter((it) => duplicates.indexOf(it) < 0).join(``);
};
