class PdfController {
    constructor() {
        this.pdfs = this.loadPdfs();
        console.log('Loaded PDFs:', this.pdfs); // 添加日志输出
    }

    
    loadPdfs() {
        try {
            const fs = require('fs');
            const path = require('path');
            const pdfDir = path.join(__dirname, '../public/pdfs');
            return fs.readdirSync(pdfDir).filter(file => file.endsWith('.pdf'));
        } catch (error) {
            console.error('加载PDF文件失败:', error);
            return [];
        }
    }

    getAllPdfs(req, res) {
        console.log('Rendering index with PDFs:', this.pdfs); // 添加日志输出
        res.render('index', { pdfs: this.pdfs });
    }

    searchPdfs(req, res) {
        const query = req.query.query.toLowerCase();
        const filteredPdfs = this.pdfs.filter(pdf => pdf.toLowerCase().includes(query));
        console.log('Rendering search with PDFs:', filteredPdfs); // 添加日志输出
        res.render('search', { pdfs: filteredPdfs, query });
    }
}

module.exports = PdfController;