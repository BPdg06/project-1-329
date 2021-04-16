/////////////////////////////////////
// Get data from Google Sheets
/////////////////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1x7L4nA2fjjO3LgSizQn75avLHsrnCkwwGNU7RSoIpjE/1/public/full?alt=json")

//.then for when the data when arrives
.then((data) => {
    console.log(data)
    // Map over the data, generate a simpler dataset
    const projects = data.feed.entry.map((item) => {
        return {
            project: item.gsx$project.$t,
            liveURL: item.gsx$liveurl.$t,
            gitURL: item.gsx$giturl.$t,
            image: item.gsx$image.$t,
            description: item.gsx$description.$t,
        }
    })


    console.log(projects)


/////////////////////////////////////
// jQuery to render your projects below
/////////////////////////////////////
    projects.forEach((project,index) => {
        console.log(project)
        let $projectCard = $(`
            <div>
                <img src="${project.image}"/>
                <h4>${project.project}</h4>
                <p class="project_description">${project.description}</p>

                <a href="${project.gitURL}" target="_blank">
                    <img src="image/github.png" class="github_icon"></a>
                <a href="${project.liveURL}" target="_blank">
                    <img src="image/internet.png" class="internet_icon"></a>
            </div>
        `)

        $('div.project_content').append($projectCard)
    })

/////////////////////////////////////
/////////////////////////////////////
})

//.catch in case of an error
.catch((error) => {
    console.error(error)
})


//javascript hamburger navigation bar
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
});

const hamburgerBar = document.querySelector(".hamburgerBar");
const nav = document.querySelector(".navigationBar");

hamburgerBar.addEventListener("click", () => {
    hamburgerBar.classList.toggle("active");
    nav.classList.toggle("active");
});
