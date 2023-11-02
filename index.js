let nebula = {
    init: function (gtag = '') {
        this.gtag = gtag
    },
    floodlight: function (type = '', cat = '', custom_variables = {}) {
        if(!this.gtag) throw new TypeError('You must before initialize the gtag')
        if(!type) throw new TypeError('You must initialize type')
        if(!cat) throw new TypeError('You must initialize cat')
        this.type = type
        this.cat = cat
        this.custom_variables = custom_variables
        const script = document.createElement('script')
        script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gtag}`
        const script_text = document.createElement('script')
        script_text.text = `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${this.gtag}');`
        script.async = true
        document.head.appendChild(script)
        document.head.appendChild(script_text)
    },
    event: function (counting_method = '', allow_custom_scripts = null) {
        if(!this.gtag) throw new TypeError('You must before initialize the gtag')
        if(!this.type) throw new TypeError('You must before initialize the floodlight tag and set-up the type value')
        if(!this.cat) throw new TypeError('You must before initialize the floodlight tag and set-up the cat value')
        let custom_variables_object = [];
        for(let key in this.custom_variables){
            if (this.custom_variables.hasOwnProperty(key)) {
                custom_variables_object.push(`'${key}'` + ":" + `'[${this.custom_variables[key]}]'`);
            }
        }
        const script = document.createElement('script')
        script.text = custom_variables_object.length > 0
            ? `gtag('event', 'conversion', {
        'allow_custom_scripts': ${allow_custom_scripts},
        ${custom_variables_object.join(",")},
        'send_to': '${this.gtag}/${this.type}/${this.cat}+${counting_method}'
        });`
            : `gtag('event', 'conversion', {
        'allow_custom_scripts': ${allow_custom_scripts},
        'send_to': '${this.gtag}/${this.type}/${this.cat}+${counting_method}'
        });`
        document.head.appendChild(script)
    },
}
