exports.setPdfRoutes = (app) => {
    const PdfController = require('../controllers/pdfController');
    const controller = new PdfController();

    app.get('/search', (req, res) => {
        controller.searchPdfs(req, res);
    });
};