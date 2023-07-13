function tableOfNum(){
    let num = document.getElementById('num').value;
    num = Number(num);
    for(let i=1; i<=10; i++){
        let result = num*i
        console.log(result);
        document.getElementById('result').innerHTML = result;
    }
    
}