const cptConstruster = Vue.extend({
    template: `
    <div id="app" v-cloak>
        <label for="male">
            <input type="text" id="male" value="">
        </label>

        <h2>您选择的性别为 1212121212 </h2>
    </div>
    `,
})

Vue.component("tst-cpt", cptConstruster)