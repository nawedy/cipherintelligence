from fastapi import APIRouter, Request
from .services.payment_processor import PaymentProcessor

router = APIRouter()

@router.post("/stripe-webhook")
async def handle_stripe_webhook(request: Request):
    payload = await request.json()
    event_type = payload['type']
    
    if event_type == 'invoice.paid':
        # Update payment status
        payment_id = payload['data']['object']['metadata']['payment_id']
        supabase.table('payments').update({'status': 'paid'}).eq('payment_id', payment_id).execute()
        
    elif event_type == 'customer.subscription.deleted':
        # Mark subscription as canceled
        subscription_id = payload['data']['object']['id']
        supabase.table('subscriptions').update({'status': 'canceled'}).eq('stripe_subscription_id', subscription_id).execute()
    
    return {"status": "success"} 