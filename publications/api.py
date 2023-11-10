from .models import Publication, Comment, Language
from rest_framework import viewsets, permissions
from .serializers import SerializerPublication, SerializerComment, SerializerLanguage

class ProjectViewPublication(viewsets.ModelViewSet):
    queryset = Publication.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = SerializerPublication

class ProjectViewSerializerComment(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = SerializerComment

class ProjectViewSerializerLanguage(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = SerializerLanguage