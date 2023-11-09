from .models import Publication, Comment
from rest_framework import viewsets, permissions
from .serializers import SerializerPublication, SerializerComment

class ProjectViewPublication(viewsets.ModelViewSet):
    queryset = Publication.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = SerializerPublication

class ProjectViewSerializerComment(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = SerializerComment