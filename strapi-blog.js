


let link;
let localStorageData = localStorage.getItem('lang');
if(localStorageData == 'En'){
    link = "http://localhost:1337/api/articles?populate[0]=author&populate[1]=featuredImage&locale=en"
}
    else{
        link = "http://localhost:1337/api/articles?locale=ar"
    }


fetch(link)
.then(res => res.json(res))
.then(data =>{
    console.log(data);
    let articleDataArr = data.data.forEach(article => {
        const articleData = article.attributes    
        const blogsContainer = document.getElementById("blogs-page-container");

        // console.log(articleData.title);

        blogsContainer.innerHTML += 
        `<div>
        <a href="blog-article.html">
            <img src="${articleData.featuredImage}" alt="blog1">
        </a>
        <a href="blog-article.html">
            <div class="client-details">
                <div class="client-info">
                    <div>
                        <img src="${articleData.author.data.attributes.profileImage}" alt="client">
                    </div>
                    <div>
                        <h4 data-i18n-key="client-info-author-one">${articleData.author.data.attributes.name}</h4>
                        <h5 data-i18n-key="client-info-position-one">${articleData.author.data.attributes.job}</h5>
                    </div>
                </div>
                <p data-i18n-key="client-info-description-one">${articleData.description}</p>
            </div>
        </a>
    </div>`
 

    })

})
    
console.log(localStorageData);


const slugify = (text) => {
    const slugifiedText = text.replaceAll(" ", "-")
    return slugifiedText
}