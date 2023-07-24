from django.urls import path
from . import views

urlpatterns = [
    path('', views.bilingual_reading_view, name='bilingual_reading'),
    path('formResponse/', views.formResponse, name='formResponse'),

    path('hello/', views.hello_world, name='hello_world'),
]