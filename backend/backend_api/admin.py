from django.contrib import admin
from .models import category, Recipe


class RecipeAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('title',)}


admin.site.register(category)
admin.site.register(Recipe, RecipeAdmin)
