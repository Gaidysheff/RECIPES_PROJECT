from django.contrib import admin
from django.urls import path, include
from django.urls import re_path as url
from backend_api.views import *
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', RecipeView.as_view(), name='recipe'),
    path('openapi', get_schema_view(
        title="RECIPES PROJECT",
        description="API for all things …"
    ), name='openapi-schema'),
]
