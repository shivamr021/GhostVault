import numpy as np
from androguard.misc import AnalyzeAPK

def extract_features_from_apk(apk_path, feature_list):
    """
    Extracts permissions/features from an APK and returns
    a numpy array in the same order as training features.
    """
    try:
        a, d, dx = AnalyzeAPK(apk_path)
        permissions = a.get_permissions()

        feature_vector = [
            1 if f in permissions else 0
            for f in feature_list
        ]

        return np.array(feature_vector).reshape(1, -1)
    
    except Exception as e:
        print(f"❌ Error analyzing {apk_path}: {e}")
        return None
