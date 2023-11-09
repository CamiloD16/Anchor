from django.contrib.auth.models import User

from rest_framework import viewsets, permissions
from .serializers import SerializerAuthUser

class ProjectViewSetUser(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = SerializerAuthUser

