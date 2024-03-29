import os

from django.core.wsgi import get_wsgi_application

settings_module = 'recipes_django_react.deployment' if 'WEBSITE_HOSTNAME' in os.environ else 'recipes_django_react.settings'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'recipes_django_react.settings')

application = get_wsgi_application()
