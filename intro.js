function showText(cant) {
    const disp = document.getElementById("disp");
    let add = "";
    let count = cant;
    let subCount = 0;
    const display = [
        "Easily store customers' debts without stress",
        "Lower risk of loosing data",
        "Massive space storage for storing records",
        ]

setTimeout(() => { 
    let erp = display[count]
   timer = setInterval(() => {
        if (subCount < erp.length) {
add += erp[subCount]
 disp.innerHTML = ""
disp.innerHTML = `<h3>${add}</h3>`
subCount++
    } else {
        count = (count+1)%3
         clearInterval(timer)
        showText(count)
        return 
    }
    }, 35)
    }, 2000)  
}
showText(0)

function logIn() {
    window.location.href = "https://richard791-rucdary.github.io/Shop-Web?login=yes";
}