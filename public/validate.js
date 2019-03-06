const validar = ()=>{
    const regex =  /.{8}/g
    let code = document.getElementById("code").value;
    console.log(code)
    result = regex.exec(code)
    console.log(result)
}