export let useNebula = {
    init: function (gtag = '') {
        this.gtag = gtag
        if(!gtag) throw new TypeError('Gtag must not be empty')
        if (typeof document !== 'undefined') {
            if(gtag.includes('GTM-')){
                const script = document.createElement('script')
                script.text = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtag}');`
                document.head.appendChild(script)
            }
            if(gtag.includes('G-')){
                const script = document.createElement('script')
                script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gtag}`
                script.async = true
                document.head.appendChild(script)
                const script_text = document.createElement('script')
                script_text.text = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${this.gtag}');`
                document.head.appendChild(script_text)
            }
            if(gtag.includes('AW-')){
                const script = document.createElement('script')
                script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gtag}`
                script.async = true
                document.head.appendChild(script)
                const script_text = document.createElement('script')
                script_text.text = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${this.gtag}');`
                document.head.appendChild(script_text)
            }
            if(gtag.includes('DC-')){
                const script = document.createElement('script')
                script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gtag}`
                script.async = true
                document.head.appendChild(script)
                const script_text = document.createElement('script')
                script_text.text = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${this.gtag}');`
                document.head.appendChild(script_text)
            }
        }
    },
    event: function (
        options = {},
    ) {
        if(!this.gtag) throw new TypeError('You must before initialize the gtag')
        if(this.gtag.includes('G-')){
            if(!options.event_name) throw new TypeError('Event name must not be empty')
            if (typeof document !== 'undefined') {
                const script = document.createElement('script')
                script.text = `gtag('event', '${options.event_name}')`
                return document.body.appendChild(script)
            }
        }
        if(this.gtag.includes('DC-')) {
            if(!options.type) throw new TypeError('Type must not be empty')
            if(!options.cat) throw new TypeError('Cat must not be empty')
            if(options.event_name) throw new TypeError('Event name field not allowed for CM360')
            if (typeof options !== "object") throw new TypeError("Options must be an object");
            if (typeof options.custom_variables !== "object") throw new TypeError("Custom variables must be an object");
            if (typeof options.allow_custom_scripts !== "boolean") throw new TypeError("Allow custom scripts must be boolean");
            let custom_variables_object = [];
            for(let key in options.custom_variables){
                if (options.custom_variables.hasOwnProperty(key)) {
                    custom_variables_object.push(`'${key}'` + ":" + `'[${options.custom_variables[key]}]'`);
                }
            }
            if (typeof document !== 'undefined') {
                const script = document.createElement('script')
                script.text = custom_variables_object.length > 0
                    ? `gtag('event', 'conversion', {
    'allow_custom_scripts': ${options.allow_custom_scripts},
    ${custom_variables_object.join(",")},
    'send_to': '${this.gtag}/${options.type}/${options.cat}+${options.counting_method}'
});`
                    : `gtag('event', 'conversion', {
    'allow_custom_scripts': ${options.allow_custom_scripts},
    'send_to': '${this.gtag}/${options.type}/${options.cat}+${options.counting_method}'
});`
                document.head.appendChild(script)
            }
        }
    },
}
