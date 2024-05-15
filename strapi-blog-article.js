
let link;
let localStorageData = localStorage.getItem("lang");
if (localStorageData == "En") {
  link = "http://localhost:1337/api/articles/1?locale=en";
} else {
  link = "http://localhost:1337/api/articles/1?locale=ar";
}

fetch(link)
  .then((res) => res.json(res))
  .then((data) => {
    // console.log(data);
    let singleAricleData = data.data.attributes;
    // console.log(singleAricleData);

    const blogContentSection = document.getElementById(
      "blog-article-background"
    );
    blogContentSection.innerHTML = `<h1>KSA Crash Lab Insights</h1>
    <h1>${singleAricleData.title}</h1>
    <p>${singleAricleData.description}</p>
    `;

    //////////////////////////////////////////////////////////////////////////////////

    const contentSection = document.getElementById("content-container");
    // const contentSection = document.getElementById("table-of-content");
    const tableQuestions = document.getElementById("table-of-content");

    // ADDING CONTENT
    contentSection.innerHTML += singleAricleData.content;

   

    const headingOneTags = Array.from(
      contentSection.getElementsByTagName("h1")
    );

    console.log(headingOneTags);

    headingOneTags.forEach((heading) => {
      heading.id = slugify(heading.innerText);
      const aTag = `<a href="#${heading.id}">${heading.innerText}</a><br>`;
      tableQuestions.innerHTML += aTag;
    });
  });


const slugify = (text) => {
  let slugifiedText = text.replaceAll(" ", "-");

  slugifiedText = slugifiedText.trim()
  return slugifiedText;
};
