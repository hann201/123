let btn = document.querySelector('button');
let rel = document.querySelector('result');



btn.addEventListener('click', (e) =>{
    let n = 10;
    let m = 10;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            let out = `${i} x ${j} = ${i * j}`
            console.log(out);
        }
}
})