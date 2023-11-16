const errorMiddleware = (error, req, res, next) => {
    console.log(error);
    res.status(500).send({
        success: false, 
        message: "Something went wrong",
        error
    })
}

module.exports = errorMiddleware