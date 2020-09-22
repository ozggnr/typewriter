const sentence = "hello there from lighthouse labs";
const written = function (str) {
  let wait = 0
  for (const char of str) {
    setTimeout(() => { process.stdout.write(char); }, wait)
    wait += 50
  } 
  setTimeout(() => {process.stdout.write("\n"); }, wait) 
}
written(sentence);