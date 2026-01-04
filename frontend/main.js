document.getElementById('generateBtn').addEventListener('click', async () => {
    const url = document.getElementById('urlInput').value;
    if (!url) {
        alert('Please enter a URL');
        return;
    }

    // Show loading spinner
    const loadingSpinner = document.getElementById('loadingSpinner');
    const generateBtn = document.getElementById('generateBtn');
    const qrImage = document.getElementById('qrImage');
    const downloadLink = document.getElementById('downloadLink');

    loadingSpinner.style.display = 'flex';
    generateBtn.disabled = true;
    generateBtn.textContent = 'Generating...';
    qrImage.style.display = 'none';
    downloadLink.style.display = 'none';

    try {
        const response = await fetch('/generate_qr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        if (response.ok) {
            const blob = await response.blob();
            const imgUrl = URL.createObjectURL(blob);

            qrImage.src = imgUrl;
            qrImage.style.display = 'block';

            downloadLink.href = imgUrl;
            downloadLink.style.display = 'inline-block';
        } else {
            alert('Error generating QR code');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error generating QR code');
    } finally {
        // Hide loading spinner
        loadingSpinner.style.display = 'none';
        generateBtn.disabled = false;
        generateBtn.textContent = 'Touch me to create the QRCode';
    }
});

// Add click animation for download link
document.getElementById('downloadLink').addEventListener('click', () => {
    const downloadBtn = document.getElementById('downloadLink');
    downloadBtn.style.animation = 'none';
    setTimeout(() => {
        downloadBtn.style.animation = 'bounceIn 0.6s ease-out';
    }, 10);
});
