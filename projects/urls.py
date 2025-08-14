from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing, name='landing'),
    path('Projects/', views.Projects, name='projects'),
    #api paths
    path('Contact/',views.ContactForm, name='Contact'),
]
