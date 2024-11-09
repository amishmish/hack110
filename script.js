function Start(){
    const question = document.createElement("div");
    question.setAttribute("class", "question")
    const statement = document.createElement("h2")
    const node = document.createTextNode("This is my question?");
    statement.appendChild(node);
    question.appendChild(statement)

    const element = document.getElementById("bigBox");
    const remove = document.getElementById("delete")
    element.replaceChild(question, remove)
}