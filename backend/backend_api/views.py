from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.response import Response

from .models import Recipe, Category
from .serializer import RecipeSerializer, CategorySerializer


class RecipeApiView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Recipe.objects.all()
    # queryset = Recipe.objects.filter(id__lte=5)
    serializer_class = RecipeSerializer
    lookup_field = 'slug'


class CategoryApiView(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'id'


class CategoryPostApiView(viewsets.ViewSet):
    def retrieve(self, request, pk=None):
        queryset = Recipe.objects.filter(category=pk)
        serializer = RecipeSerializer(queryset, many=True)
        return Response(serializer.data)


class PopularPostsApiView(viewsets.ViewSet):
    def list(self, request, pk=None):
        queryset = Recipe.objects.filter(
            postLabel__iexact='POPULAR').order_by('-id')[0:4]
        serializer = RecipeSerializer(queryset, many=True)
        return Response(serializer.data)
