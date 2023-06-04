
const test = async (req, res) => {
    
    return res.render("test2");
  };

  const testget = async (req,res) => {
    test = req.query.test
    return res.send(test)
  }

  
  
  module.exports = {
    test:test,
    testget:testget
  }
  