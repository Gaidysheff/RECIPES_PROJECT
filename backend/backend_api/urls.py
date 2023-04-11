from django.urls import path, include
from .views import RecipeApiView, CategoryApiView, CategoryPostApiView, PopularPostsApiView
from rest_framework import routers

router = routers.SimpleRouter()
router.register('recipes', RecipeApiView, basename='blogs')
router.register('category', CategoryApiView, basename='category')
router.register('categoryBasedRecipes', CategoryPostApiView,
                basename='CategoryBasedRecipes')
router.register('PopularPostsApiView', PopularPostsApiView,
                basename='PopularPostsApiView')

urlpatterns = [
    path('', include(router.urls))
]
