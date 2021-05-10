from django.urls import path,include
from django.conf.urls import url
from . import views

urlpatterns=[
    path('signup/',views.signup,name='signup')
]