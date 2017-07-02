var db = [
    {name: 'Jane Austen',email: 'jane-austen@gmail.com',age: 242},
    {name: 'Charles Dickens',email: 'charles-dickens@gmail.com',age: 205},
    {name: 'Mark Twain',email: 'samuel-clemens@gmail.com',age: 182},
    {name: 'Lev Tolstoy',email: 'lev-tolstoy@gmail.com',age: 189},
    {name: 'Arthur Conan Doyle',email: 'atrhur-doyle@gmail.com',age: 158}
];


(function Avatars(db) {
    this.init = function() {
        this.generateList();
        this.enterUser();
    }

    this.generateList = function() {
        
        var parent = document.querySelector('#parent_avatars');
        var template = '';

        for(var i = 0; i < db.length; i++) { 
            template += `
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-delete" data-card="`+i+`">x</div>
                    <div class="card-block">`
            template += `<h3 class="card-title">`+db[i].name+`</h3>`
            template += `<p class="card-text"><strong>Email: </strong>`+db[i].email+`</p>`
            template += `<p class="card-text"><strong>Age: </strong>`+db[i].age+`</p>`
            template += `</div>`
            template += `</div>`
            template += `</div>`
        }
        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin',template);
        deleteCard();
    }


    this.enterUser = function() {

        function grabUser() {

            var name = document.querySelector('#user_name').value;
            var email = document.querySelector('#user_email').value;
            var age = document.querySelector('#user_age').value;

            if(name.length > 3 && !isNaN(age) && email.length > 3) {
                document.querySelector('#myForm').reset();
                db.push({name: name, email: email, age: age})
                this.generateList();
            } else {
                document.querySelector('#error').style.display = 'block';
                setTimeout(function() {
                    document.querySelector('#error').style.display = 'none';
                },1800)
            }

        }

        document.querySelector('#myForm').addEventListener('submit', function(e){
            e.preventDefault();
            grabUser();
            
        });
    };
    this.deleteCard = function() {

        var buttons = document.querySelectorAll('.card-delete');

        function deleteThis(element){
            var obj = element.getAttribute('data-card');
            db.splice(obj, 1);
            this.generateList();
        }

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function(e){
                deleteThis(this)
                
            });
        }
    }

    this.init();
})(db);