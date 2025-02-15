import uuid
from datetime import datetime, timedelta
from supabase import create_client
import os

supabase = create_client(os.getenv('SUPABASE_URL'), os.getenv('SUPABASE_KEY'))

class LicenseManager:
    @staticmethod
    def generate_license(product_id, user_id, license_type, valid_months=12, users=1):
        license_data = {
            'product_id': product_id,
            'user_id': user_id,
            'license_key': str(uuid.uuid4()),
            'license_type': license_type,
            'valid_from': datetime.now().date(),
            'valid_to': (datetime.now() + timedelta(days=30*valid_months)).date(),
            'max_users': users
        }
        
        result = supabase.table('licenses').insert(license_data).execute()
        return result.data[0] 