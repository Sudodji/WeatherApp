const debounce = (fn:Function, ms = 300) => {
  let timeout:ReturnType<typeof setTimeout>;
  return function fnCall(this: any, ...args: any[]) {
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(this, args), ms);
  }
}
export default debounce;
