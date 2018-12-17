const rootElement = document.getElementById('root')
function tick() {
  const time = new Date().toLocaleTimeString()

  const element = <div>It is <input value={time}></input></div>
  ReactDOM.render(element, rootElement);
}

setInterval(tick, 1000);
