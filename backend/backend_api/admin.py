from django.contrib import admin
from .models import Category, Recipe


class RecipeAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(Category)
admin.site.register(Recipe, RecipeAdmin)
