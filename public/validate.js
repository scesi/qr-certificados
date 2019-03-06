const validar = ()=>{
    const regex =  /^[\w\d-_]{8}/g
    let code = document.getElementById("code").value;
    console.log(code)
    result = regex.exec(code)
    let message = document.getElementById("message")
    if(result != null)
        message.innerHTML = "es codigo es valido"
    else message.innerHTML = "codigo invalido"
    console.log(result)

    return false
}