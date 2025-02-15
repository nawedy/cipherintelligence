from supabase import create_client
import os

supabase = create_client(os.getenv('SUPABASE_URL'), os.getenv('SUPABASE_KEY'))

class PaymentProcessor:
    @staticmethod
    def create_subscription(user_id, product_id, payment_method):
        product = supabase.table('products').select('*').eq('product_id', product_id).single().execute()
        
        # Create payment record
        payment_data = {
            'user_id': user_id,
            'amount': product['base_price'],
            'payment_method': payment_method,
            'status': 'pending'
        }
        payment = supabase.table('payments').insert(payment_data).execute()
        
        # Create subscription
        subscription_data = {
            'user_id': user_id,
            'product_id': product_id,
            'payment_id': payment.data[0]['payment_id'],
            'start_date': 'now()',
            'end_date': f"now() + interval '{product['subscription_interval']}'"
        }
        subscription = supabase.table('subscriptions').insert(subscription_data).execute()
        
        return subscription.data[0] 