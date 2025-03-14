let FORMvalidator = {
    handleSubmit: (event) => {
        event.preventDefault();

        let send = true;

        FORMvalidator.clearErrors();

        let inputs = form.querySelectorAll('input')
        inputs.forEach((input) => {
            let check = FORMvalidator.checkInput(input)
            if (check !== true) {
                send = false
                FORMvalidator.showError(input, check)
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
    },
    showError: (input, error) => {
        input.style.border = '2px solid #f00'

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;
        input.parentElement.insertBefore(errorElement, input.elementSibling)
    },
    clearErrors: () => {
        let inputs = form.querySelectorAll('input');
        inputs.forEach((input) => {
            input.style.border = '';
        })

        let erros = document.querySelectorAll('.error');
        erros.forEach((error) => {
            error.remove();

        })
    }
}

let form = document.querySelector('.form-validator');
form.addEventListener('submit', FORMvalidator.handleSubmit);