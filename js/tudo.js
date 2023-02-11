let count = 0;
document.getElementById('submit-button').addEventListener("click",function(){
    count +=1
    console.log(count);
    const inputValue = document.getElementById('input-field').value
    console.log(inputValue);

    const parent = document.getElementById('content-container');
    const tr =document.createElement('tr');
    tr.innerHTML=`
    <td>${count}</td>
    <td>${inputValue}</td>
    <td>
    <button class ="btn btn-danger deletebutton">Delete</button>
    <button class ="btn btn-primary">Done</button>
    </td>
    `;
    parent.appendChild(tr);
    document.getElementById('input-field').value= '';
    const elements = document.querySelectorAll('.deletebutton');
    for(element of elements){
    element.addEventListener("click",function(event){
    event.target.parentNode.parentNode.style.display= 'none';
     })
    }
    document.getElementById('clear-button').addEventListener("click",function(e){
        e.target.parentNode.parentNode.style.display = 'none';

    });

})