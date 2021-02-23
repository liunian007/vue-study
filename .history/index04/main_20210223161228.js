let child = {
    template: "#child",
    props: {
        childCount: {
            type: String,
            default: '101',
            required: true,
        },
        childCategories: {
            type: Array,
            default: function() {
                return [];
            },
            required: true,
        }
    },
    data() {
        return {}
    },
    methods: {
        btnClick: function(category) {
            this.$emit("itemClick")
            console.log(category.name)
        }
    }
}
let btn = {
    template: "#cpn",
    components: {
        child: child,
    },
    data() {
        return {
            count: '123456',
            categories: [{
                    id: 1,
                    name: "iphone12",
                },
                {
                    id: 2,
                    name: "huawei",
                },
                {
                    id: 3,
                    name: "xiaomi",
                },
            ],
        };
    },
}

new Vue({
    el: '#app',
    components: {
        btn: btn,
    },
})