const a = {
    namespaced: true,
    state: {
        name: "测试"
    },
    getters: {
        upName: (state, getter, rootState, rootGetter) => {
            return state.name.uppercase();
        }
    },
    mutations: {
        SETNAME: (state, val) => {
            state.name = val
        }
    },
    actions: {
        SetName({ commit, rootState }, val) {
            commit("SETNAME", val);
        }
    }
}
export default a;