let FORMvalidator = {
    handleSubmit: (event) => {
        event.preventDefault();

        let send = true;

        let inputs = form.querySelectorAll('input')
        inputs.forEach((input) => {
            let check = FORMvalidator.checkInput(input)
            if (check !== true) {
                send = false
                console.log(check)
            }
        })

        if (send) {
            form.submit()
        }
    },

    checkInput: (input) => {
        let rules = input.getAttribute("data-rules");

        if (rules !== null) {
            rules = rules.split('|');
            for (let i in rules) {
                let ruleDetails = rules[i].split('=');
                switch (ruleDetails[0]) {
                    case 'required':
                        if (input.value == '') {
                            return `Campo Obrigatório`
                        }
                        break;
                    case 'min':

                        break;
                }
            }
        }
        return true
    }
}

let form = document.querySelector('.form-validator');
form.addEventListener('submit', FORMvalidator.handleSubmit);