const checkBoxList = document.querySelectorAll('.checkBox')
const inputFilled= document.querySelectorAll('.checkInput')
const errorLabel = document.querySelector('.full')

checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener('click',(e) => {
        const allFieldFilled =[...inputFilled].every((e) =>{
            return e.value
        })
        if(allFieldFilled){
            checkbox.parentElement.classList.toggle('completed')
        }else{
            errorLabel.classList.add('showError')
        }
    })
})

errorFilled.forEach((e) => {
    e.addEventListener('focus', () => {
        errorLabel.classList.remove('showError')
    })
})

