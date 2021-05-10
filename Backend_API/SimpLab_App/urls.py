from django.urls import path,include
from . import views
from django.conf.urls import url

urlpatterns=[
    path('api/', include('SimpLab_App.api.urls'))
]