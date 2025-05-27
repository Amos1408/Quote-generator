const Text_info=document.querySelector('#displayQuote');
        const Author_info=document.querySelector('#displayAuthor');
        const nextBtn=document.querySelector('#Next');
        const prevBtn=document.querySelector('#Previous');

        let quotes=[];
        let currentIndex=0;

        fetch('quotes.json')
        .then(response => response.json())
        .then(data =>{
            quotes=data;
            currentIndex = Math.floor(Math.random()*quotes.length);
            showQuote(currentIndex);

            //adding buttons functionality 
            nextBtn.addEventListener('click', ()=>{
                currentIndex=(currentIndex+1) % quotes.length;
                showQuote(currentIndex);
            });

            prevBtn.addEventListener('click',()=>{
                currentIndex=(currentIndex-1 + quotes.length) % quotes.length;
                showQuote(currentIndex);
            });
        })
        .catch(error =>{
            Text_info.textContent="failed to load quote.";
            console.log('error fetching quotes:',error);
        })

        // displaying the quotes based on button functionality
        function showQuote(index){
            Text_info.textContent= quotes[index].text
            Author_info.textContent= quotes[index].author
        }