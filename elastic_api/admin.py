from django.contrib import admin
from .models import DataToBe

# Register your models here.

# Need to register my BlogPost so it shows up in the admin
admin.site.register(DataToBe)