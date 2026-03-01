"""
URL configuration for secondProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

# import views from demoApp
from demoApp import views as v1

# import views from timeApp
from timeApp import views as v2

urlpatterns = [

    path('admin/', admin.site.urls),
    
    # set the url path for demoApp

    path('gm/',v1.gm_view ,name='gm'),
    path('ge/',v1.ge_view ,name='ge'),
    path('gn/',v1.gn_view ,name='gn'),
    
    # set the url path for timeApp

    path('time/',v2.tellMeTime ,name='time'),

]

'''

 
'''
