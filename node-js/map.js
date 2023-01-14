var arr = [
    {score:10, name:"green"},
    {score:20, name:"klay"},
    {score:30, name:"curry"}
]

var newArr = arr.map(ele => {
    if (ele.name === "curry") {
        ele.score = 50
    }
    return ele
})

console.log(newArr);