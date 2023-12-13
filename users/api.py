from django.contrib.auth.models import User

from rest_framework import viewsets, permissions
from .serializers import SerializerAuthUser,  SerializerUserProfile, SerializerFollower

from .models import UserProfile, Follower
from publications.permissions import PermissionsGetNotPost

class ProjectViewSetUser(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class = SerializerAuthUser

class ProjectViewSetUserProfile(viewsets.ModelViewSet):
    queryset =UserProfile.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class =  SerializerUserProfile

class ProjectViewSetFollower(viewsets.ModelViewSet):
    queryset =Follower.objects.all()
    permissions_classes = [permissions.AllowAny]
    serializer_class =  SerializerFollower