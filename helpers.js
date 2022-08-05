function readFile(input) {
    let file = input.files[0];
    let fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = function () {
        let cont = fileReader.result
        try {
            cont = JSON.stringify(JSON.parse(cont), null, 2)
        } 
        catch (error) {}
        
        document.getElementById("json_editor").textContent = cont;

    };
    fileReader.onerror = function () {
        alert(fileReader.error);
    };

    // document.getElementById("json_editor").oninput = function () {
    //     hljs.highlightElement(document.getElementById("json_editor"), "js")
    // }
}

const uploader = async ()=>{
    const resp = await fetch()
    const data = await resp.json()
    document.getElementById("json_resp").textContent = data;

}

