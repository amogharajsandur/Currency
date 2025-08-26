import header from "./components/header/header";
import footer from "./components/footer/footer";
import btn from "./components/buttons/button";

export default function renderer() {
    return (
        `
        ${header()}
        <main>
            <form>
                <label for="input-value">Enter Value (in $)</label>
                <input type="number" name="input-value" id="input-value" placeholder=0>
                <div class="actions">
                ${btn({type:"reset",id:"clear",text:"Clear"})}
                ${btn({id:"convert",text:"Convert"})}
                </div>
            </form>
            <div id="converted"></div>
        </main>
        ${footer()}
        `
    )
}