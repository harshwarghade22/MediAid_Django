from django.contrib.auth.models import User
from rest_framework import serializers

from .models import UserAccount

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields ='__all__'