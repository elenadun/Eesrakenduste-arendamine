class Entry{ //Класс JavaScript — это вид функции. Для декларирования классов используется ключевое слово class
    constructor(title, description, date){ //Если в двух словах, constructor возвращает ссылку на функцию, которая создала прототип экземпляра.
        this.title = title;
        this.description = description;
        this.date = date;
        this.done = false;
    }
}

class Todo{
    constructor(){
        this.entries = JSON.parse(window.localStorage.getItem('entries')) || [];
        document.querySelector('#addButton').addEventListener('click', ()=>{this.addEntry();});
        this.render();
    }

    addEntry(){
        const titleValue = document.querySelector('#title').value;
        const descriptionValue = document.querySelector('#description').value;
        const dateValue = document.querySelector('#date').value;

        this.entries.push(new Entry(titleValue, descriptionValue, dateValue));

        this.saveLocal(); //This — это ключевое слово, используемое в JavaScript, которое имеет особое значение, зависящее от контекста в котором оно применяется.

        this.render();

        console.log(this.entries);
    }

    render(){
        if(document.querySelector('.todo-list')){
            document.body.removeChild(document.querySelector('.todo-list'));
        }

        const ul = document.createElement('ul');
        ul.className = "todo-list";
        this.entries.forEach((entryValue, entryIndex)=>{
            const li = document.createElement('li');
            li.classList.add('entry');
            const div = document.createElement('div');
            div.classList.add('entry-value');
            const removeButton = document.createElement('div');
            removeButton.className = "delete-button";
            const removeIcon = document.createTextNode('X');

            div.innerHTML = `<div>${entryValue.title}</div><div>${entryValue.description}</div>
            <div>${entryValue.date}</div>`;

            removeButton.addEventListener('click', ()=>{
                ul.removeChild(li);
                this.entries.splice(entryIndex, 1);
                this.saveLocal();
            });

            if(entryValue.done){
                div.classList.add('task-completed');
            }

            div.addEventListener('click', ()=>{
                if(entryValue.done){
                    div.classList.remove('task-completed');
                    this.entries[entryIndex].done = false;
                    this.saveLocal();
                } else{
                    div.classList.add('task-completed');
                    this.entries[entryIndex].done = true;
                    this.saveLocal();
                }
            });

            removeButton.appendChild(removeIcon);
            li.appendChild(div);
            li.appendChild(removeButton);
            ul.appendChild(li);
        });

        document.body.appendChild(ul);
    }

    saveLocal(){
        window.localStorage.setItem('entries', JSON.stringify(this.entries));
    }
}

let todo = new Todo();






//let entry = new Entry("Osta poest midagi", "Osta poest piima", "28.02.2021");

//console.log(entry.title);