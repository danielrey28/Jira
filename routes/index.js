app.get('/dropdown', function(req,res){
    res.render("dropdown", {id : req.query['id'], mode : req.query['mode'] });
});
