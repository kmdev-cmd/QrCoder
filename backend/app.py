from flask import Flask, request, send_file
import qrcode
import io

app = Flask(__name__)

@app.route('/')
def index():
    return send_file('../frontend/index.html')

@app.route('/style.css')
def style():
    return send_file('../frontend/style.css')

@app.route('/main.js')
def main():
    return send_file('../frontend/main.js')

@app.route('/generate_qr', methods=['POST'])
def generate_qr():
    data = request.json.get('url')
    if not data:
        return {'error': 'No URL provided'}, 400

    qr = qrcode.QRCode(version=1, box_size=10, border=5)
    qr.add_data(data)
    qr.make(fit=True)
    img = qr.make_image(fill='black', back_color='white')

    buf = io.BytesIO()
    img.save(buf, format='PNG')
    buf.seek(0)

    return send_file(buf, mimetype='image/png')

if __name__ == '__main__':
    app.run(debug=True, port=5001)
