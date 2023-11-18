const errorMiddleware = (error, req, res, next) => {
  console.log(error)
  return res.status(500).json({
    success: false,
    message: "Something went wrong",
    error,
  })
}

module.exports = errorMiddleware
