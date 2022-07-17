function tim() {
    const time = document.getElementById('time')
    const date = document.getElementById("date");
    const d = new Date();
    const t = `${d.getHours()}  ${d.getMinutes()}  ${d.getSeconds()}`;
    const da = `${d.getDate()}  ${d.getMonth()}  ${d.getFullYear()}`;
    time.textContent = t;
    date.textContent = "Date : " + da;
}
setInterval(tim, 1000);