from rest_framework import serializers
from .models import Recipe, category


class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
        # fields = ['title', 'content']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = category
        fields = '__all__'
