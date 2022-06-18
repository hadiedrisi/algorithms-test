const first = [12, 18, 15, 16, 210, -2]
const second = [12, 18, 15, 9, -2, 210]

function findMiss(first, second) {
  var myMap = new Map()
  for (const f of first) {
    myMap.set(f, f)
  }
  for (const s of second) {
    if(!myMap.has(s))
    {
        return s
    }
  }
}

console.log(findMiss(first, second))
