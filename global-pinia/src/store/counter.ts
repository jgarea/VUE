import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => {
        return {
            count: 1
        }
    },
    getters: {
        time2: (state) => {return state.count * 2}
    },
    actions: {
        increment(val=1) {
            this.count += val
        }
    }
})