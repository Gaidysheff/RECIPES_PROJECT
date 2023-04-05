from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Recipe
from .serializer import RecipeSerializer


class RecipeView(APIView):
    def get(self, request):
        output = [
            {
                'title': output.title,
                'description': output.description,
            } for output in Recipe.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)
