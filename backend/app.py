from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import qrcode
import io

app = Flask(__name__)
CORS(app)  # libera chamadas do frontend

@app.route('/generate_qr', methods=['POST'])
def generate_qr():
    data = request.json.get('url') if request.is_json else None

    if not data:
        return jsonify({'error': 'No URL provided'}), 400

    qr = qrcode.QRCode(
        version=1,
        box_size=10,
        border=5
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color='black', back_color='white')

    buf = io.BytesIO()
    img.save(buf, format='PNG')
    buf.seek(0)

    return send_file(
        buf,
        mimetype='image/png',
        as_attachment=False
    )
