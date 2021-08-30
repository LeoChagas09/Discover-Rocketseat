// clearTimeout cancelar um timeout
const TimeOut = 3000
const finished = () => console.log('Done!!!')

 let timer = setTimeout(finished, TimeOut)
 clearTimeout(timer)