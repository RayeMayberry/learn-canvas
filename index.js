function main () {
    const canvas = document.querySelector('#canvas');

const context = canvas.getContext('webgl');
console.log(context);
// getContext is a built in function with the canvas

    if (context === null){
        alert("Could not initialize WebGL. Your browser or device may not support it.")
    }
}

main();