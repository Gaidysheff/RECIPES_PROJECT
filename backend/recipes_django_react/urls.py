from backend_api.views import *
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.urls import re_path as url
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RecipeView.as_view(), name='recipe'),
    path('openapi', get_schema_view(
        title="RECIPES PROJECT",
        description="API for all things …"
    ), name='openapi-schema'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
