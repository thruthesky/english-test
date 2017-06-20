var Nightmare = require('nightmare');
import * as j from 'cheerio';

class SiteTest {

    nightmare = Nightmare({
        openDevTools: { mode: '' },
        show: true
    });


    $html;

    constructor() {

    }

    async run() {

        await this.open();
        await this.register();
        await this.logout();
        await this.login();
        await this.infoUpdate();
        await this.livechat();

    }

    testBegin( msg ) {
        console.log(`>>> [ ${msg} : TEST Begin ... ] `);
    }
    success( msg ) {
        console.log(`> SUCCESS: ${msg}`);
    }
    error( msg ) {
        console.log(`> ERROR: ${msg}`);
    }
    log( msg ) {
        console.log(`> ${msg}`);
    }


    async open() {
        this.testBegin('open');
        let re = await this.nightmare
            .goto('https://englishfordevelopers.com')
            .wait("#chat-component")
            .click("#chat-component .min > div")
            .wait(".chat.max")
            .evaluate(() => {
                return document.querySelector('body').innerHTML;
            })
            .then(x => x)
            .catch(e => e);

        let $html = j.load(<any>re);

        this.log("Got site content");

        return true;
    }


    async register() {


        let re = await this.nightmare
            .click('.fa-bars')
            .wait('#small-header-register-button')
            .click('#small-header-register-button')
            .evaluate(() => {
                return document.querySelector('body').innerHTML;
            })
            .then( x => x );

        
        await this.nightmare
            .type('[name="id"]', 'test-id')
            .then( x => x );
            


        return true;
    }
    async logout() {

    }
    async login() {

    }
    async infoUpdate() {

    }

    async livechat() {
        this.testBegin("livechat");

        let re;
        let msg = "Time:" + (new Date()).getMinutes() + ':' + (new Date()).getSeconds();
        re = await this.nightmare
            .type("#chat-component input", msg)
            .click("#chat-component .fa-mail-forward")
            .wait("#chat-component span.text")
            .evaluate(() => {
                return document.querySelector('body').innerHTML;
            })
            .then(x => x)
            .catch(e => e);

        let $ = j.load(<any>re);
        this.log("Typed chat message.");



        let Time = $('body')
            .find('#chat-component')
            .find(".messages")
            .find("span.text")
            .text();

        if (msg == Time) this.success("Live chat is working fine !!");
        else this.error("Oo.. :(   Live chat is not working");
    }



}


(new SiteTest()).run();

