let currentUser = localStorage.getItem('currentUser')
try {
    currentUser = JSON.parse(currentUser) || {}
} catch (error) {
    currentUser = {}
}

const user = {
    namespaced: true,
    state: {
        currentUser
    },

    getters: {
        
    },

    mutations: {
        login(state, payload) {
            
            localStorage.setItem('currentUser', JSON.stringify(payload))
            state.currentUser = payload
        },

        logout(state) {
            localStorage.removeItem('currentUser')
            state.currentUser = {}
        }
    },

    actions: {
        
    }
}

export default user