let child = {
    template: "#child",
    props: {
        child_count: {
            type: String,
            default: '101',
        }
    },
    data() {
        return {}
    }
}
let btn = {
    template: "#cpn",
    components: {
        child: child,
    },
    data() {
        return {
            count: '',
        };
    },
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    },
})