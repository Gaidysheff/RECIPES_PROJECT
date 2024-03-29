import os
from .settings import *
from .settings import BASE_DIR

# ALLOWED_HOSTS = ['recipes.gaidysheff.store', 'www.recipes.gaidysheff.store']

ALLOWED_HOSTS = [os.environ['WEBSITE_HOSTNAME']]
CSRF_TRUSTED_ORIGIN = ['https://'+os.environ['WEBSITE_HOSTNAME']]

DEBUG = False

SECRET_KEY = os.environ['MY_SECRET_KEY']

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
# --- newly added
    'whitenoise.middleware.WhiteNoiseMiddleware',
# ---
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.common.CommonMiddleware',
]

# CORS_ALLOWED_ORIGINS = [
# ]

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

CONNECTION = os.environ['DJANGO_CONNECTION_STRING']
CONNECTION_STR = {pair.split('=')[0]:pair.split('=')[1] for pair in CONNECTION.split(' ')}

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': CONNECTION_STR['dbname'],
        # 'NAME': 'gaidys2d_recipes',
        'USER': CONNECTION_STR['user'],
        # 'USER': 'gaidys2d_recipes',
        'PASSWORD': CONNECTION_STR['password'],
        # 'PASSWORD': 'hbPDBi7&',
        'HOST': CONNECTION_STR['host'],
        # 'HOST': 'localhost',
        'POST': '3306',
    },
    'OPTIONS': {
        'init_command': "SET sql_mode='STRICT_TRANS_TABLES'",
    },
}

STATIC_ROOT = BASE_DIR/'staticfiles'