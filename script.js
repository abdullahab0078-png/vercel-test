// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Category Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const toolCards = document.querySelectorAll('.tool-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        
        toolCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
                card.style.animation = 'fadeIn 0.5s';
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Modal Functionality
const modal = document.getElementById('uploadModal');
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const modalTitle = document.getElementById('modalTitle');
const closeBtn = document.querySelector('.close');
const btnCancel = document.querySelector('.btn-cancel');
const btnProcess = document.querySelector('.btn-process');
const btnBrowse = document.querySelector('.btn-browse');

let selectedFiles = [];
let currentTool = '';

// Tool button click handlers
document.querySelectorAll('.tool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentTool = btn.getAttribute('data-tool');
        const toolCard = btn.closest('.tool-card');
        const toolName = toolCard.querySelector('h3').textContent;
        
        modalTitle.textContent = toolName;
        selectedFiles = [];
        fileList.innerHTML = '';
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    closeModal();
});

btnCancel.addEventListener('click', () => {
    closeModal();
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    selectedFiles = [];
    fileList.innerHTML = '';
    fileInput.value = '';
}

// File input change
fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

// Browse button
btnBrowse.addEventListener('click', () => {
    fileInput.click();
});

// Drag and drop
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    const files = e.dataTransfer.files;
    handleFiles(files);
});

uploadArea.addEventListener('click', () => {
    fileInput.click();
});

function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (!selectedFiles.find(f => f.name === file.name && f.size === file.size)) {
            selectedFiles.push(file);
            addFileToList(file);
        }
    });
}

function addFileToList(file) {
    const fileItem = document.createElement('div');
    fileItem.className = 'file-item';
    
    const fileInfo = document.createElement('span');
    fileInfo.textContent = `${file.name} (${formatFileSize(file.size)})`;
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        selectedFiles = selectedFiles.filter(f => f !== file);
        fileItem.remove();
    });
    
    fileItem.appendChild(fileInfo);
    fileItem.appendChild(removeBtn);
    fileList.appendChild(fileItem);
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// API Base URL
const API_BASE_URL = 'http://localhost:3000/api/pdf';

// Tool to API endpoint mapping
const toolEndpoints = {
    'merge': '/merge',
    'split': '/split',
    'compress': '/compress',
    'pdf-to-word': '/pdf-to-word',
    'word-to-pdf': '/word-to-pdf',
    'pdf-to-ppt': '/pdf-to-word', // Similar endpoint
    'ppt-to-pdf': '/word-to-pdf', // Similar endpoint
    'pdf-to-excel': '/pdf-to-word', // Similar endpoint
    'excel-to-pdf': '/word-to-pdf', // Similar endpoint
    'pdf-to-jpg': '/pdf-to-word', // Similar endpoint
    'jpg-to-pdf': '/jpg-to-pdf',
    'html-to-pdf': '/word-to-pdf', // Similar endpoint
    'edit': '/organize', // Similar endpoint
    'rotate': '/rotate',
    'watermark': '/organize', // Similar endpoint
    'page-numbers': '/organize', // Similar endpoint
    'crop': '/organize', // Similar endpoint
    'unlock': '/protect', // Similar endpoint
    'protect': '/protect',
    'sign': '/protect', // Similar endpoint
    'redact': '/organize', // Similar endpoint
    'compare': '/merge', // Similar endpoint
    'organize': '/organize',
    'repair': '/compress', // Similar endpoint
    'ocr': '/pdf-to-word' // Similar endpoint
};

// Process button
btnProcess.addEventListener('click', async () => {
    if (selectedFiles.length === 0) {
        alert('Please select at least one file');
        return;
    }
    
    const endpoint = toolEndpoints[currentTool];
    if (!endpoint) {
        alert('This tool is not yet implemented in the backend');
        return;
    }
    
    btnProcess.textContent = 'Processing...';
    btnProcess.disabled = true;
    
    try {
        const formData = new FormData();
        
        // Add files to form data
        if (endpoint === '/merge' || endpoint === '/jpg-to-pdf') {
            selectedFiles.forEach(file => {
                formData.append('files', file);
            });
        } else {
            formData.append('file', selectedFiles[0]);
        }
        
        // Add additional parameters if needed
        if (currentTool === 'rotate') {
            formData.append('angle', '90');
        }
        if (currentTool === 'protect') {
            formData.append('password', 'default123');
        }
        
        const response = await fetch(API_BASE_URL + endpoint, {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Processing failed');
        }
        
        // Handle file download
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = getDownloadFilename(currentTool);
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        btnProcess.textContent = 'Process';
        btnProcess.disabled = false;
        closeModal();
        
        // Show success message
        showNotification('File processed successfully!', 'success');
    } catch (error) {
        console.error('Processing error:', error);
        btnProcess.textContent = 'Process';
        btnProcess.disabled = false;
        showNotification('Error: ' + error.message, 'error');
    }
});

function getDownloadFilename(tool) {
    const extensions = {
        'merge': 'merged.pdf',
        'split': 'split-pages.zip',
        'compress': 'compressed.pdf',
        'pdf-to-word': 'converted.txt',
        'word-to-pdf': 'converted.pdf',
        'jpg-to-pdf': 'converted.pdf',
        'rotate': 'rotated.pdf',
        'protect': 'protected.pdf',
        'organize': 'organized.pdf'
    };
    return extensions[tool] || 'processed.pdf';
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#27ae60' : '#e74c3c'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s;
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Login/Signup buttons (demo)
document.querySelector('.btn-login').addEventListener('click', () => {
    alert('Login feature - This would open a login modal in a real application.');
});

document.querySelector('.btn-signup').addEventListener('click', () => {
    alert('Sign Up feature - This would open a signup modal in a real application.');
});

// Premium button
document.querySelector('.btn-premium').addEventListener('click', () => {
    alert('Premium feature - This would redirect to a pricing page in a real application.');
});

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe tool cards
toolCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
});

// Observe feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
});

