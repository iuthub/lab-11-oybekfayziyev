window.onload = function()
{
    let mainTextArea = document.querySelector('#mainTextArea');

    function makeBigger()
    {
        mainTextArea.style.fontSize = '24pt';
    }

    function applyStyles(e)
    {
        if(e.target.checked){
            mainTextArea.classList.add('styled');
        }else{
            mainTextArea.classList.remove('styled');
        }
    }

    function snoopify()
    {
        mainTextArea.value = mainTextArea.value.toUpperCase().split('.').join('-izzle.');
    }
    
    document.querySelector('#bigger').onclick = makeBigger;
    document.querySelector('#applyStyles').onclick = applyStyles;
    document.querySelector('#snoopifier').onclick = snoopify;
}