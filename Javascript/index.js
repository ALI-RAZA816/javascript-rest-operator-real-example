function renderdata(...input_data_value){
    return input_data_value.join('-');
}


function add_data(){
    const input_data = document.querySelector('#input_data').value.trim();
    const input_data_value = input_data.split(',').map(value=> value.trim());
    if(input_data_value){
        const value = renderdata(...input_data_value);
        const result = document.querySelector('.result');
        result.textContent= `Aggregated Data:${value}`;
    }else{
        alert('Fiil the data ');
    }
}


const Add_data = document.querySelector('.add_data');
Add_data.addEventListener('click',add_data);