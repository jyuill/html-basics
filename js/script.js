
function btnClick(){
    alert("You clicked the button - you're a champ.");
}
function btnChgClick(){
    document.getElementById('tgtTag').innerHTML="Hello, my name is John! I have a bicycle. I want to pay the check, please.";
}   

function btnClick2(){

    alert("Clicked (message from js file).");
}

// function for highlighting active page in nav
// using jQuery
$(function(){
    // list pages - preferably in order of nav presentation
    var pages = ['index.html','about','contact','|','list-tbl','index-v3'];
    var pathname = window.location.pathname;

    $('.nav-link').each(function(i){
        // if path matches item in page array, set class and attributes to active
        if(pathname.includes(pages[i])){
            $(this).addClass('active');
            $(this).attr('aria-current','page');
        // if class already set to active, remove new setting
        } else if(this.className.includes('active')){
            $(this).removeClass('active');
        }
    });
});
            
