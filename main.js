//initial on submit press query
// const submitBtn = document.querySelector('#submit-button');

//stretch goal input query on keydown
const input = document.querySelector('#translator-input')

const helperBtn = document.querySelector('.help-btn')
helperBtn.addEventListener('click', () => {
    const list = document.querySelector('.radio-button')

    if (list.style.display === 'none') {
        list.style.display = 'block'
    } else {
        list.style.display = 'none'
    }
})

    //--------Main function which holds all code-----------//
    input.addEventListener('keydown', () => {
        console.log('submit pressed:');

        //----------input box query & value --------//
        const input = document.querySelector('#translator-input');
        let inputValue = input.value;

        //-----------results query---------------//
        const result = document.querySelector('#results')
        

        //-----Radio Buttons query---------------//
        const radioButtons = document.querySelectorAll('[type="radio"]')

        //loop through all buttons to check value and if checked call function of checked box on the inputValue//
        for (const btn of radioButtons) {
            if (btn.checked && btn.value === 'encode')
                result.innerText = encode(inputValue);
            
            if (btn.checked && btn.value === 'madlib')
                result.innerText = madlib(inputValue);
            
            if (btn.checked && btn.value === 'translate')
                result.innerText = translate(inputValue);
                
            
            //search criteria -- create a function because you will need this to loop through the emoji object again when the random button lands on the search criteria//
            if (btn.checked && btn.value === 'search') {

                //clear results
                result.innerHTML = '';
                              
                //loop through emojis object
                const searchObj = search(inputValue);
                for (const obj of searchObj) {

                    //edge case if obj is empty return statement
                    if (obj.length === 0) result.innerText = 'No emojis found!' ;
                    
                    //create new <p> element, add the return of the search objects symbol based on search criteria and append it to the result parent element//
                    const newElement = document.createElement('p');
                    const elContent = obj.symbol;
                    newElement.innerText = elContent
                    result.appendChild(newElement)
                    console.log('search is running')                
                }
            }

            //Random button//
            if (btn.checked && btn.value === 'random') {

                //create a variable to hold an array of functions and use the randomElement function to randomize the order//
                const randomSelector = randomElement(['encode', 'madlib', 'translate', 'search']);           
                if (randomSelector === 'encode') result.innerText = encode(inputValue);
                if (randomSelector === 'madlib') result.innerText = madlib(inputValue);
                if (randomSelector === 'translate') result.innerText = translate(inputValue);
                if (randomSelector === 'search') {
                    result.innerHTML = '';                 
                    const searchObj = search(inputValue);

                    for (const obj of searchObj) {

                        if (obj.length === 0) result.innerText = 'No emojis found!';
                    
                        const newElement = document.createElement('p');
                        const elContent = obj.symbol;
                        newElement.innerText = elContent
                        result.appendChild(newElement)
                    }
                }
            }         
        }
    })