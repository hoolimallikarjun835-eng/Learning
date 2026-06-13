function classifyJsBasicsScore(score) {
  if (score >= 90) {
    return"EXCELLENT"
  }
   if (score >= 75) {
    return "GOOD"
  }
  if (score >= 50) {
    return "NEEDS_PRACTICE"
  }
  else {
    return "REVISIT"
  }
}
console.log(classifyJsBasicsScore(10))
