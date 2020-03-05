function notes() {

    // Variables
    const form = document.querySelector('form');
    let ul = document.querySelector('ul');
    let tasks = [];

    let serverData = sessionStorage.getItem('item');
    // console.log(serverData);
    // console.log(typeof JSON.parse(serverData));
    
    if (serverData) {
        tasks = JSON.parse(serverData);
    }

    tasks.forEach(task => {

        // List
        const li = document.createElement('li');

        // Span 
        const spanX = document.createElement('span');
        const x = document.createTextNode('x');
        spanX.appendChild(x);

        // Text
        const textP = document.createElement('p');
        const text = document.createTextNode(task);
        textP.appendChild(text);
        
        // Append elements
        li.append(textP, spanX);
        ul.appendChild(li);
    });
    

    // Add Note
    const addNote = (e) => {
        e.preventDefault();
        ul.innerHTML = '';

        // Push string to taks array
        input = document.querySelector('input[type="text"]');
        tasks.push(input.value);
        sessionStorage.setItem('item', JSON.stringify(tasks));
        input.value = '';

        // Create elements for each task
        tasks.forEach(task => {

            // List
            const li = document.createElement('li');

            // Span 
            const spanX = document.createElement('span');
            const x = document.createTextNode('x');
            spanX.appendChild(x);

            // Text
            const textP = document.createElement('p');
            const text = document.createTextNode(task);
            textP.appendChild(text);
            
            // Append elements
            li.append(textP, spanX);
            ul.appendChild(li);
        })

    }

    // Remove Note
    const removeNote = event => {
        let clickedText = event.target.parentElement.firstChild.innerHTML;

        if (event.target.tagName === 'SPAN') {
            let index = tasks.indexOf(clickedText);
            tasks.splice(index, 1);
            sessionStorage.setItem('item', JSON.stringify(tasks));
            event.target.parentElement.remove()
            
        }
    }

    form.addEventListener('submit', addNote);
    ul.addEventListener('click', removeNote);

}