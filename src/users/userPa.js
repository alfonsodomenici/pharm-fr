import configData from "./../config.js";
import { html, render } from "./../lib/lit-html.js";
import { Router } from "./../lib/vaadin-router.js";
import { pharmsByUser } from "./../users/userStore.js"

export default class userPa extends HTMLElement {

    constructor() {
        super();
    }

    getRoot() {
        return this;
        // return this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        render(this.renderView(), this.getRoot());
    }

    disconnectedCallback() {
    }

    /*
    -------------------- eventi -------------------
    */

    onCreate(e) {
        e.preventDefault();
        Router.go(`/createUser`)
    }

    onLogin(e) {
        e.preventDefault();
        Router.go(`/login`)
    }

    /*
    --------------------render ---------------------
    */

    renderView() {
        return html`
            
            <h1 class="title has-text-centered">Area Personale</h1>
            
            <div class="list">
                <button @click = ${e => this.onCreate(e)} class="button is-primary">Crea Nuovo Utente</button>
                <button @click = ${e => this.onLogin(e)} class="button is-primary">Accedi</button>
            </div>
        `;
    }
}

customElements.define("user-pa", userPa);