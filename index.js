const { URL } = require('url')
const { get } = require('https')

class Giffinder {
    constructor() {
        this.sfw = new sfw
        this.nsfw = new nsfw
    }
}

class sfw {
    _baseURL = 'https://purrbot.site/api/img/sfw/'

    /**
    * 
    * @returns {String} - either the IMG link or the error message
    */
    async background() {
        return await contentResolver(this._baseURL, 'background/img')
    }
    
    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async bite() {
        return await contentResolver(this._baseURL, 'bite/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async blush() {
        return await contentResolver(this._baseURL, 'blush/gif')
    }
    
    /**
    * 
    * @returns {String} - either the Gif link or the error message
    */
    async comfy() {
        return await contentResolver(this._baseURL, 'comfy/gif')
    }
    
    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async cry() {
        return await contentResolver(this._baseURL, 'cry/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async cuddle() {
        return await contentResolver(this._baseURL, 'cuddle/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async dance() {
        return await contentResolver(this._baseURL, 'dance/gif')
    }

    /**
    * 
    * @returns {String} - either the Gif link or the error message
    */
    async eevee_g() {
        return await contentResolver(this._baseURL, 'eevee/gif')
    }

    /**
    * 
    * @returns {String} - either the IMG link or the error message
    */
    async eevee_i() {
        return await contentResolver(this._baseURL, 'eevee/img')
    }
    
    /**
    * 
    * @returns {String} - either the Gif link or the error message
    */
    async feed() {
        return await contentResolver(this._baseURL, 'feed/gif')
    }
    
    /**
    * 
    * @returns {String} - either the Gif link or the error message
    */
    async fluff() {
        return await contentResolver(this._baseURL, 'fluff/gif')
    }
    
    /**
    * 
    * @returns {String} - either the IMG link or the error message
    */
    async holo() {
        return await contentResolver(this._baseURL, 'holo/img')
    }
    
    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async hug() {
        return await contentResolver(this._baseURL, 'hug/gif')
    }

    /**
    * 
    * @returns {String} - either the IMG link or the error message
    */
    async icon() {
        return await contentResolver(this._baseURL, 'icon/img')
    }
    
    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async kiss() {
        return await contentResolver(this._baseURL, 'kiss/gif')
    }

    /**
    * 
    * @returns {String} - either the IMG link or the error message
    */
    async kitsune() {
        return await contentResolver(this._baseURL, 'kitsune/img')
    }
    
    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async lick() {
        return await contentResolver(this._baseURL, 'lick/gif')
    }

    /**
    * 
    * @returns {String} - either the Gif link or the error message
    */
    async neko_g() {
        return await contentResolver(this._baseURL, 'neko/gif')
    }
    
    /**
    * 
    * @returns {String} - either the IMG link or the error message
    */
    async neko_i() {
        return await contentResolver(this._baseURL, 'neko/img')
    }
    
    /**
    * 
    * @returns {String} - either the IMG link or the error message
    */
    async okami() {
        return await contentResolver(this._baseURL, 'okami/img')
    }
    
    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async pat() {
        return await contentResolver(this._baseURL, 'pat/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async poke() {
        return await contentResolver(this._baseURL, 'poke/gif')
    }

    /**
    * 
    * @returns {String} - either the IMG link or the error message
    */
    async seneko() {
        return await contentResolver(this._baseURL, 'senko/img')
    }
    
    /**
    * 
    * @returns {String} - either the IMG link or the error message
    */
    async shiro() {
        return await contentResolver(this._baseURL, 'shiro/img')
    }
    
    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async slap() {
        return await contentResolver(this._baseURL, 'slap/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async smile() {
        return await contentResolver(this._baseURL, 'smile/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async tail() {
        return await contentResolver(this._baseURL, 'tail/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async tickle() {
        return await contentResolver(this._baseURL, 'tickle/gif')
    }
}

class nsfw {
    _baseURL = 'https://purrbot.site/api/img/nsfw/'
    constructor() {}
    
    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async anal() {
        return await contentResolver(this._baseURL, 'anal/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async bj() {
        return await contentResolver(this._baseURL, 'blowjob/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async cum() {
        return await contentResolver(this._baseURL, 'cum/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async fuck() {
        return await contentResolver(this._baseURL, 'fuck/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async neko_g() {
        return await contentResolver(this._baseURL, 'neko/gif')
    }

    /**
    * 
    * @returns {String} - either the IMG link or the error message
    */
    async neko_i() {
        return await contentResolver(this._baseURL, 'neko/img')
    }
    
    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async pussyLick() {
        return await contentResolver(this._baseURL, 'pussylick/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async solo() {
        return await contentResolver(this._baseURL, 'solo/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async threesome_fff() {
        return await contentResolver(this._baseURL, 'threesome_fff/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async threesome_ffm() {
        return await contentResolver(this._baseURL, 'threesome_ffm/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async threesome_mmf() {
        return await contentResolver(this._baseURL, 'threesome_mmf/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async yaoi() {
        return await contentResolver(this._baseURL, 'yaoi/gif')
    }

    /**
     * 
     * @returns {String} - either the Gif link or the error message
     */
    async yuri() {
        return await contentResolver(this._baseURL, 'yuri/gif')
    }
}

/**
 * 
 * @param {String} baseUrl - the base URL
 * @param {String} url - the extension to the URL
 * @returns {String} - either the Gif link or the error message
 */
async function contentResolver(baseUrl, url) {
    let uri = new URL(baseUrl + url)
    let res = await getContent(uri)
    if (!res.error) return res.link
    else {
        return res.message
    }
}

async function getContent(url) {
    return new Promise((resolve, reject) => {
        get(url, (res) => {
            if (res.statusCode !== 200) {
                res.resume();
                console.log(res)
                reject(`Request failed! Status Code: ${res.statusCode}`);
            }
            res.setEncoding('utf-8');
            let rawData = '';
            res.on('data', (chunk) => (rawData += chunk));
            res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                resolve(parsedData);
            } catch (e) {
                reject(`Error Occurred! ${e.message}`);
            }
            });
        }).on('error', (e) => {
            reject(`Error Occurred! ${e.message}`);
        });
    });
}

module.exports = Giffinder