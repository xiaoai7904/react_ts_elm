
interface fastclickInter {
    attach(ele:any): any
}
declare module 'fastclick' {
    const FastClick: fastclickInter
    export default FastClick
}