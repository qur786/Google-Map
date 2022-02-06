const form = document.querySelector("form")! as HTMLFormElement;
const input = document.getElementById("address")! as HTMLInputElement;
console.log(form);
console.log(input);
const searchAddressHandler = (e: Event) => {
    e.preventDefault();

    // TODO: send the address to Google API
    console.log(input.value);
}

form.addEventListener("submit", searchAddressHandler);