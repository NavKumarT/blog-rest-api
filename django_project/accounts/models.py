from django.db import models

from django.contrib.auth.models import AbstractUser

# we will be creating a new custom user model 
class CustomUser(AbstractUser):
    name = models.CharField(null = True, blank = True, max_length=50)

# after creating a custom user model update the auth model in setting.py file