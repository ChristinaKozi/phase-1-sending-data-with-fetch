// Add your code here

const submitData = (name, email) => {
   return fetch("http://localhost:3000/users",{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body:JSON.stringify({name, email})
    })
    .then(res => res.json())
    .then(user => {
        const newID = user.id;
        const idElement =  document.createElement('p')
        idElement.textContent = `${newID}`
        document.body.appendChild(idElement)
    })
    .catch(error => {
        alert("Post failed")
        const errorMessage = error.message;
        const errorDom = document.createElement('p')
        errorDom.textContent = errorMessage
        document.body.appendChild(errorDom)
    });
}


