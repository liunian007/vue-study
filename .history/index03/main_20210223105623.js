let btn2 = {
    template: `
        <div> this is test02 </div>
    `,
}
btn1 = {
template: `
        <div> this is test </div>
    `,
components: {
    btn2: btn2,
}
})

new Vue({
    el: '#components-demo',
    components: {
        btn2: btn2,
    }
})