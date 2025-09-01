export default defineEventHandler(async (event) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // return sendError(event, createError({
    //     statusCode: 500,
    //     statusMessage: "Oh no! Something went wrong!"
    // }))

    return [
        {
            id: 0,
            title: "Project 1",
            done: false,
        },
        {
            id: 1,
            title: "Project 2",
            done: false,
        },
    ];
});
