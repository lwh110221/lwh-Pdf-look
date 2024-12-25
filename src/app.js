const express = require('express');
const path = require('path');
const pdfRoutes = require('./routes/pdfRoutes');
const compression = require('compression');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());

// 设置视图引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 设置静态文件夹
app.use(express.static(path.join(__dirname, 'public')));

// 解析请求体
app.use(express.urlencoded({ extended: true }));

// 设置PDF相关路由
pdfRoutes.setPdfRoutes(app);

// 添加根路由
const PdfController = require('./controllers/pdfController');
const controller = new PdfController();
app.get('/', (req, res) => {
    controller.getAllPdfs(req, res);
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器正在运行，访问地址: http://localhost:${PORT}`);
});