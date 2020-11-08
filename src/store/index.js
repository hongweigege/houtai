import Vue from 'vue'
import Vuex from 'vuex'

import common from './common'
import user from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        common,
        user
    }
})

export default store