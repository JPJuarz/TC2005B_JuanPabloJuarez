const Lab = require('../models/labs.model');

exports.get_list = (req, res, next) => {
    res.render('labs', {
        labs: Lab.fetchAll(),
        username: req.session.username || '',
        isLoggedIn: req.session.isLoggedIn || '',
    });
};

exports.get_lab = (req, res, next) => {
    const labParam = req.params.labId;
    const labNumber = labParam.replace('lab', '');
    const lab = Lab.findById(labNumber);

    if (!lab) {
        return res.status(404).send("Lab no encontrado");
    }

    res.render(lab.view, {
        title: `Lab ${lab.id}`,
        cssFile: lab.css,
        username: req.session.username || '',
        isLoggedIn: req.session.isLoggedIn || '',
    });
};