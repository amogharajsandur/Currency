import "./button.css"

export default function btn({type="button", id, text="button"} = {}) {
    return (
        `
        <button type="${type}" id="${id}">${text}</button>
        `
    )
}