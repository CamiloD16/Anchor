from rest_framework import serializers
from .models import Publication, Comment, Language
from django.contrib.auth.models import User

class SerializerUser(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username")

class SerializerLanguage(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = "__all__"

class SerializerPublication(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    language = serializers.PrimaryKeyRelatedField(queryset=Language.objects.all())

    class Meta:
        model = Publication
        fields = ("id", "title", "description", "image", "user", "date", "language")

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['user'] = SerializerUser(instance.user).data
        representation['language'] = SerializerLanguage(instance.language).data.get('language')
        return representation


class SerializerComment(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ("id", "description")