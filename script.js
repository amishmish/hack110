function Start(){
    
}

function makeQuestion(string){
    const question = document.createElement("div");
    question.setAttribute("class", "question")
    const statement = document.createElement("h2")
    const node = document.createTextNode("string");
    statement.appendChild(node);
    question.appendChild(statement)

    const answers = MakeAnswers()
    question.appendChild(answers)

    return question
}

function MakeAnswers(){
    const form = document.createElement("form");

    const answer1 = document.createElement("input");
    answer1.setAttribute("type", "radio");
    answer1.setAttribute("id", "first");
    const label1 = document.createElement("label");
    label1.setAttribute("for", "'first");
    const node1 = document.createTextNode("1");
    label1.appendChild(node1);
    form.appendChild(answer1);
    form.appendChild(label1);

    const answer2 = document.createElement("input");
    answer2.setAttribute("type", "radio");
    answer2.setAttribute("id", "second");
    const label2 = document.createElement("label");
    label2.setAttribute("for", "'second");
    const node2 = document.createTextNode("2");
    label2.appendChild(node2);
    form.appendChild(answer2);
    form.appendChild(label2);

    const answer3 = document.createElement("input");
    answer3.setAttribute("type", "radio");
    answer3.setAttribute("id", "third");
    const label3 = document.createElement("label");
    label3.setAttribute("for", "'third");
    const node3 = document.createTextNode("3");
    label3.appendChild(node3);
    form.appendChild(answer3);
    form.appendChild(label3);

    const answer4 = document.createElement("input");
    answer4.setAttribute("type", "radio");
    answer4.setAttribute("id", "fourth");
    const label4 = document.createElement("label");
    label4.setAttribute("for", "'fourth");
    const node4 = document.createTextNode("4");
    label4.appendChild(node4);
    form.appendChild(answer4);
    form.appendChild(label4);

    const answer5 = document.createElement("input");
    answer5.setAttribute("type", "radio");
    answer5.setAttribute("id", "fifth");
    const label5 = document.createElement("label");
    label5.setAttribute("for", "'fifth");
    const node5 = document.createTextNode("5");
    label5.appendChild(node5);
    form.appendChild(answer5);
    form.appendChild(label5);

    return form
}