const testController = (req, res)=>{
    res.status(200).send({
        message :  "test rsoute",
        success: true,
    });
};


module.exports = { testController };