const input = document.getElementById("numwords")
const container = document.querySelector(".container")

const generateWords = (n) =>{
    let text = "";
    
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i =0; i<n; i++){
        const random = (Math.random() * (letters.length-1)).toFixed(0);
        text += letters[random]
    }
    return text

}


let numofWords;
const getData = () =>{
    const numofWords = Number(input.value)

    const para = document.createElement("p")

    let data = "";

    for(let i = 0; i<numofWords; i++){
        const randomNumber = (Math.random() * 15).toFixed(0);
        data += generateWords(randomNumber)
        data += " ";
    }

    para.setAttribute("class" , "paras");

    para.innerText = data
    container.append(para)

}