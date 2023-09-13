let yusuf = "nice"
console.log(yusuf)




for (let a = 0; a < 5; a++) {
    if (a === 1)
        console.log(a)
    for (let b = 0; b < 5; b++) {
        console.log(a, b)
        if (a === 1 && b === 1)
            break;
    }
    break;
}
