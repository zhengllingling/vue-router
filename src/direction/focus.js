const focus = {
    // bind: () => {

    // },
    inserted: (el, binding, vnode) => {
        console.log(binding)
        console.log(vnode)
        el.focus()
    },
    // updated: (el, binding, vnode oldVnode) => {

    // },
    // componentUpdated: (el, binding, vnode oldVnode) => {

    // },
    // unbind: (el, binding, vnode) => {

    // }
}
export default focus;