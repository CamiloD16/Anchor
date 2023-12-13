from .models import Publication, Comment, Language
from rest_framework import viewsets
from .serializers import SerializerPublication, SerializerComment, SerializerLanguage
from .permissions import PermissionsGetNotPost

class ProjectViewPublication(viewsets.ModelViewSet):
    queryset = Publication.objects.all()
    permission_classes = [PermissionsGetNotPost]
    serializer_class = SerializerPublication

class ProjectViewSerializerComment(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    permission_classes = [PermissionsGetNotPost]
    serializer_class = SerializerComment

class ProjectViewSerializerLanguage(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    permission_classes = [PermissionsGetNotPost]
    serializer_class = SerializerLanguage