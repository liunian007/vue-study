let child = {
    template: te,
}
let btn = {
    template: "#cpn",
    components: {
        child: child,
    },
    data: function() {
        return {
            count: 0,

        };
    }
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    }
})