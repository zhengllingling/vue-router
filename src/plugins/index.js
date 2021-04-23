const myPlugin = store => {
    // store初始化调用
    console.log(store);
    store.subscribe((mutation, state) => {
        // 每次 mutation 之后调用
        // mutation 的格式为 { type, payload }
        console.log(mutation)
        console.log(state);
    })
}

export default myPlugin;