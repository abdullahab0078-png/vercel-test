# PDF Tools Website - Complete Full-Stack Application

یہ ایک مکمل PDF Tools ویب سائٹ ہے جو iLovePDF جیسی ہے، dark theme کے ساتھ۔

## Features

- ✅ **25+ PDF Tools**: Merge, Split, Compress, Convert, Edit, Security
- ✅ **Dark Theme**: Modern dark color scheme
- ✅ **Full-Stack**: Frontend + Backend (Node.js + Express)
- ✅ **Real PDF Processing**: Actual PDF operations using pdf-lib
- ✅ **File Upload**: Drag & drop support
- ✅ **Responsive Design**: Mobile, tablet, desktop support

## Installation

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Server

```bash
npm start
```

یا development mode کے لیے:

```bash
npm run dev
```

### 3. Open Browser

Browser میں کھولیں: `http://localhost:3000`

## Project Structure

```
.
├── index.html          # Frontend HTML
├── styles.css          # Dark theme CSS
├── script.js           # Frontend JavaScript (API calls)
├── server.js           # Express server
├── package.json        # Dependencies
├── routes/
│   └── pdfRoutes.js    # PDF processing API routes
├── uploads/            # Uploaded files (auto-created)
└── outputs/            # Processed files (auto-created)
```

## Available Tools

### Organize PDF
- Merge PDF
- Split PDF
- Organize PDF

### Optimize PDF
- Compress PDF
- Repair PDF
- OCR PDF

### Convert PDF
- PDF to Word
- PDF to PowerPoint
- PDF to Excel
- PDF to JPG
- Word to PDF
- PowerPoint to PDF
- Excel to PDF
- JPG to PDF
- HTML to PDF

### Edit PDF
- Edit PDF
- Rotate PDF
- Watermark
- Page Numbers
- Crop PDF

### PDF Security
- Unlock PDF
- Protect PDF
- Sign PDF
- Redact PDF
- Compare PDF

## API Endpoints

- `POST /api/pdf/merge` - Merge multiple PDFs
- `POST /api/pdf/split` - Split PDF into pages
- `POST /api/pdf/compress` - Compress PDF
- `POST /api/pdf/rotate` - Rotate PDF pages
- `POST /api/pdf/protect` - Protect PDF with password
- `POST /api/pdf/organize` - Reorder PDF pages
- `POST /api/pdf/pdf-to-word` - Convert PDF to text
- `POST /api/pdf/word-to-pdf` - Convert Word to PDF
- `POST /api/pdf/jpg-to-pdf` - Convert images to PDF

## Technologies Used

### Frontend
- HTML5
- CSS3 (Dark Theme)
- JavaScript (ES6+)
- Fetch API

### Backend
- Node.js
- Express.js
- Multer (File uploads)
- pdf-lib (PDF manipulation)
- pdf-parse (PDF parsing)
- jimp (Image processing)
- mammoth (Word to HTML)
- archiver (ZIP files)

## Notes

- Files are automatically deleted after 1 hour
- Maximum file size: 100MB
- Some advanced features require additional libraries
- For production, add proper authentication and security

## License

MIT

