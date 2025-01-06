const express = require('express')
const { nextTick } = require('process')
const app = express()

const albums = {
    sunsetSeason: [
    {
    title: "Idle Town",
    duration: "3 minutes and 57 seconds",
    dateReleased: "March 19, 2017"
    },
    {
    title: "Generation Why",
    duration: "3:39",
    dateReleased: "October 3, 2018"
    },
    {
    title: "Crush Culture",
    duration: "3:24",
    dateReleased: "October 26, 2018"
    },
    {
    title: "Greek God",
    duration: "3:56",
    dateReleased: "November 16, 2018"
    },
    {
    title: "Lookalike",
    duration: "3:40",
    dateReleased: "November 16, 2018"
    }
    ],
    kidKrow: [
    {
    title: "Comfort Crowd",
    duration: "2:54",
    dateReleased: "September 5, 2019"
    },
    {
    title: "Wish You Were Sober",
    duration: "2:48",
    dateReleased: "March 18, 2020"
    },
    {
    title: "Maniac",
    duration: "3:05",
    dateReleased: "October 25, 2019"
    },
    {
    title: "(Online Love)",
    duration: "0:37",
    dateReleased: "March 20, 2020"
    },
    {
    title: "Checkmate",
    duration: "2:28",
    dateReleased: "June 26, 2019"
    },
    {
    title: "The Cut That Always Bleeds",
    duration: "3:51",
    dateReleased: "March 20, 2020"
    },
    {
    title: "Fight or Flight",
    duration: "2:51",
    dateReleased: "March 20, 2020"
    },
    {
    title: "Affluenza",
    duration: "3:19",
    dateReleased: "March 20, 2020"
    },
    {
    title: "(Can We Be Friends?)",
    duration: "0:57",
    dateReleased: "March 20, 2020"
    },
    {
    title: "Heather",
    duration: "3:18",
    dateReleased: "September 4, 2020"
    },
    {
    title: "Little League",
    duration: "3:14",
    dateReleased: "March 20, 2020"
    },
    {
    title: "The Story",
    duration: "4:05",
    dateReleased: "January 10, 2020"
    }
    ],
    superache: [
    {
    title: "Movies",
    duration: "3:34",
    dateReleased: "June 24, 2022"
    },
    {
    title: "People Watching",
    duration: "2:38",
    dateReleased: "July 15, 2021"
    },
    {
    title: "Disaster",
    duration: "2:33",
    dateReleased: "June 24, 2022"
    },
    {
    title: "Best Friend",
    duration: "2:28",
    dateReleased: "June 24, 2022"
    },
    {
    title: "Astronomy",
    duration: "4:03",
    dateReleased: "May 7, 2021"
    },
    {
    title: "Yours",
    duration: "3:24",
    dateReleased: "May 19, 2022"
    },
    {
    title: "Jigsaw",
    duration: "3:28",
    dateReleased: "January 21, 2022"
    },
    {
    title: "Family Line",
    duration: "3:36",
    dateReleased: "June 24, 2022"
    },
    {
    title: "Summer Child",
    duration: "2:59",
    dateReleased: "June 24, 2022"
    },
    {
    title: "Footnote",
    duration: "3:44",
    dateReleased: "June 24, 2022"
    },
    {
    title: "Memories",
    duration: "4:08",
    dateReleased: "April 15, 2022"
    },
    {
    title: "The Exit",
    duration: "3:41",
    dateReleased: "June 24, 2022"
    }
    ],
    foundHeaven: [
    {
    title: "Found Heaven",
    duration: "2:57",
    dateReleased: "April 5, 2024"
    },
    {
    title: "Never Ending Song",
    duration: "2:34",
    dateReleased: "May 19, 2023"
    },
    {
    title: "Fainted Love",
    duration: "2:50",
    dateReleased: "April 5, 2024"
    },
    {
    title: "Lonely Dancers",
    duration: "2:28",
    dateReleased: "February 9, 2024"
    },
    {
    title: "Alley Rose",
    duration: "3:28",
    dateReleased: "March 8, 2024"
    },
    {
    title: "The Final Fight",
    duration: "2:09",
    dateReleased: "April 5, 2024"
    },
    {
    title: "Miss You",
    duration: "2:23",
    dateReleased: "April 5, 2024"
    },
    {
    title: "Bourgeoisieses",
    duration: "2:31",
    dateReleased: "April 5, 2024"
    },
    {
    title: "Forever With me",
    duration: "3:35",
    dateReleased: "April 5, 2024"
    },
    {
    title: "Eye Of The Night",
    duration: "2:21",
    dateReleased: "April 5, 2024"
    },
    {
    title: "Boys & Girls",
    duration: "2:22",
    dateReleased: "April 5, 2024"
    },
    {
    title: "Killing Me",
    duration: "3:24",
    dateReleased: "October 31, 2023"
    },
    {
    title: "Winner",
    duration: "3:36",
    dateReleased: "August 25, 2023"
    }
    ]
};
    
app.use((req, res, next) => {
    console.log(req.method + " " + req.url)
})

app.get("/", (req, res) => {
    res.status(200).send(`<h1>Welcome to the Conan Gray API!</h1>`);
});





app.use((req, res, next) =>{
    res.status(404).send("404 NOT FOUND")
})

app.listen(3000, () => {
    console.log("Server running")
})