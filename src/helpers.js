export function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

export function compareReverse(a, b) {
  if (a.name > b.name) return -1;
  if (a.name < b.name) return 1;
  return 0;
}

export function compareMarks(a, b) {
  if (calculateTotalMarks(a.marks) < calculateTotalMarks(b.marks)) {
    return -1;
  }
  if (calculateTotalMarks(a.marks) > calculateTotalMarks(b.marks)) {
    return 1;
  }
  return 0;
}

export function compareMarksReverse(a, b) {
  if (calculateTotalMarks(a.marks) > calculateTotalMarks(b.marks)) {
    return -1;
  }
  if (calculateTotalMarks(a.marks) < calculateTotalMarks(b.marks)) {
    return 1;
  }
  return 0;
}

export function calculateTotalMarks(json) {
  const sum = Object.values(json).reduce(function(acc, val) {
    return acc + val;
  });
  return sum;
}
