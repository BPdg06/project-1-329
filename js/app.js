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


/////////////////////////////////////
/////////////////////////////////////
})

//.catch in case of an error
.catch((error) => {
    console.error(error)
})