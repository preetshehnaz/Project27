function sendResponse(res, message, error, results) {
    // console.log("myrsp", results);
    res
        .status(error !== null ? (error !== null ? 200 : 200) : 200)
        .json({
            'statusCode': (error !== null ? (error !== null ? 400 : 200) : 200),
            'message': message,
            'results': results,
            'error': error,
        })
}

module.exports ={sendResponse}