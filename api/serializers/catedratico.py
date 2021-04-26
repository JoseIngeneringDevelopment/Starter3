from rest_framework import serializers
from api.models.catedratico import Catedratico
from api.models.profile import Profile
from django.contrib.auth.models import User

class CatedraticoRegisterSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=80)
    name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    password = serializers.CharField(max_length=20)
    profesion = serializers.IntegerField()

class CatedraticoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Catedratico
        fields = (
            'id',
            'profile',   
            'profesion',       
        )
        depth = 2