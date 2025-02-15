import sentry_sdk
from sentry_sdk.integrations.fastapi import FastApiIntegration
import os

sentry_sdk.init(
    dsn=os.getenv("SENTRY_DSN"),
    integrations=[FastApiIntegration()],
    traces_sample_rate=1.0
) 