from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Follower

class SerializerAuthUser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "password")


class SerializerUserProfile(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"

class SerializerFollower(serializers.ModelSerializer):
    class Meta:
        model = Follower
        fields = "__all__"