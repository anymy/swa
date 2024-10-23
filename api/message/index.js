module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the API "+process.env.api_ics+"!"
    });
};