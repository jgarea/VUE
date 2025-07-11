import { defineStore } from 'pinia';
export const useExample = defineStore('useExample', {
    state: () => {
        return {
            count:1
        }
    },
    actions: {
        init () {
            const initCount = localStorage.getItem('count');
            if (initCount) {
                this.count = parseInt(initCount);
            } else {
                this.count = 1; // Default value
            }
        },
        increment( val=1) {
            this.count += val;
            localStorage.setItem('count', this.count.toString());
        },
        decrement() {
            this.count--;
        }
    },
    persist: {
        storage: sessionStorage // or localStorage     
    }
});