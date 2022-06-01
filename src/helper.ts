const debounce = (fn:Function, ms = 300) => {
  let timeout:ReturnType<typeof setTimeout>;
  return function fnCall(this: any, ...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(this, args), ms);
  }
}

const months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];

const toDate = (dt: number) => {
  const a = new Date(dt * 1000);
  const date = a.getDate();
  const month = months[a.getMonth()];
  return `${date} ${month}`
}
export { debounce, toDate, months };
