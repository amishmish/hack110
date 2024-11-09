function Start(){
    const question = document.createElement("p");
    const node = document.createTextNode("This is my question?");
    question.appendChild(node);

    const element = document.getElementByClass("bigBox");
    element.appendChild(question)
}