const Lab = require('../models/labs.model');

exports.get_list = (req, res, next) => {
    res.render('labs', {
        labs: Lab.fetchAll(),
        username: req.session.username || '',
        isLoggedIn: req.session.isLoggedIn || '',
        permisos: req.session.permisos || [],
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
        permisos: req.session.permisos || [],
    });
};

exports.get_lab22 = (req, res, next) => {
    res.render('questions/lab22', {
        title: 'Lab 22',
        cssFile: '/css/lab6.css',
        username: req.session.username || '',
        isLoggedIn: req.session.isLoggedIn || '',
        permisos: req.session.permisos || [],
        imagen: req.session.ultimaImagen || null,
        mensaje: req.session.mensaje || null,
    });
    req.session.ultimaImagen = null;
    req.session.mensaje = null;
};

exports.post_lab22 = (req, res, next) => {
    if (!req.file) {
        req.session.mensaje = 'Solo se permiten imágenes PNG, JPG o JPEG';
        return req.session.save(() => {
            res.redirect('/labs/lab22');
        });
    }
    req.session.ultimaImagen = req.file.path.replace(/\\/g, '/');
    req.session.mensaje = 'Imagen subida correctamente';
    req.session.save(() => {
        res.redirect('/labs/lab22');
    });
};