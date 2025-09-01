export default defineEventHandler(async (event) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    // return sendError(event, createError({
    //     statusCode: 500,
    //     statusMessage: "Oh no! Something went wrong!"
    // }))

    return [
        {
            id: 0,
            title: "A mobile application supporting the organization of 6-a-side football matches (SGGW 2024)",
            description:
                "<p>Design and implementation of a mobile application supporting the organization of 6-a-side football matches with the usage of:</p><ul><li>Frontend: JavaScript with React Native and Expo Go,</li><li>Backend: Python with Flask and SQLite.</li></ul>",
            preview: "",
            github: "",
        },
        {
            id: 1,
            title: "Programming on the Internet. (SGGW 2023)",
            description:
                "<ul><li>Design a responsive website.</li> <li>Implement language versions (PL / EN / ES)</li></ul>",
            preview: "https://glistening-torrone-e1ef76.netlify.app/",
            github: "https://github.com/Arizfurinmoto/project-website",
        },
        {
            id: 2,
            title: "Diary app (2023)",
            description:
                "<p>Diary mobile application with the usage of React Native and JavaScript.</p>",
            preview: "",
            github: "https://github.com/Arizfurinmoto/diaryRN",
        },
        {
            id: 3,
            title: "Ski shop (SGGW 2023)",
            description:
                "<p>Project made as a part of one of the classes at the Warsaw University of Life Sciences.</p>",
            preview: "https://subtle-douhua-d4133a.netlify.app/",
            github: "https://github.com/Arizfurinmoto/ski-shop",
        },
        {
            id: 4,
            title: "MusicPlayer (SGGW 2022)",
            description:
                "<p>Project made as a part of one of the classes at the Warsaw University of Life Sciences.</p>",
            preview: "https://monumental-pavlova-93ba75.netlify.app/",
            github: "https://github.com/Arizfurinmoto/MusicPlayer",
        },
        {
            id: 5,
            title: "Projektownia (Tech Minds PWC 2024 - finalist)",
            description:
                "<p>A group project for which we designed an online platform enabling professionals with complementary skill sets to connect, collaborate, and co-create projects in a network-driven environment. We were one of the finalists of the PWC contest.</p>",
            preview: "",
            github: "",
        },
    ];
});
