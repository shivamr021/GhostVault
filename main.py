import joblib
import pickle
from flask import Flask, request, jsonify
import tempfile
from model.feature_extractor import extract_features_from_apk

# Load model once
model = joblib.load("model/apk_malware_model.pkl")

# Load feature list once
with open("model/features.pkl", "rb") as f:
    feature_list = pickle.load(f)

app = Flask(__name__)

@app.route('/')
def home():
    return "APK Malware Detection API"

@app.route('/predict', methods=['POST'])
def predict():
    if 'apk' not in request.files:
        return jsonify({"error": "No APK file in request"}), 400
    
    apk_file = request.files['apk']

    # Save APK temporarily
    with tempfile.NamedTemporaryFile(delete=False, suffix=".apk") as tmp:
        apk_file.save(tmp.name)
        feature_extracted = extract_features_from_apk(tmp.name, feature_list)

    if feature_extracted is None:
        return jsonify({"error": "Failed to extract features"}), 500

    # Predict
    model_prediction = model.predict(feature_extracted)
    prediction_proba = model.predict_proba(feature_extracted)
    confidence = prediction_proba.max()

    result = "Malware" if model_prediction[0] == 1 else "Benign"

    return jsonify({
        "result": result,
        "confidence": float(confidence)
    })

if __name__ == "__main__":
    app.run(debug=True)
