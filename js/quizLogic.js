function calculateAnswer(){
    var formElements = document.getElementsByClassName('quizForm')[0].elements;
    var total = 0;
    for (var i = 0; i < formElements.length; i++){
        if (formElements[i].type === 'radio' && formElements[i].checked === true)
            total += parseInt(formElements[i].value);
    }

    console.log(total);

    var result = document.getElementById('result');
    if (total === 1){
        result.innerText = 'You hate dogs...';
    }else if (total === 2){
        result.innerText = 'You meh dogs...';
    }else if (total === 3){
        result.innerText = 'You like dogs.';
    }else if (total === 4){
        result.innerText = 'You love dogs!';
    }else{
        result.innerText = 'You didnt select anything';
    }

    // Or you use a switch statement
    switch (total){
        case 1:
            result.innerText = 'You hate dogs...';
            break;
        case 2:
            result.innerText = 'You meh dogs...';
            break;
        // and so on
        default:
            result.innerText = 'You didn\'t select anything';
    }
    
    console.log(document.images);

}