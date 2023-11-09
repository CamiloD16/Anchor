from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import SerializerAuthUser


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.username

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
        '/api/cambiar-contrasena',
    ]

    return Response(routes)

@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        serializer = SerializerAuthUser(data=request.data)
        if serializer.is_valid():
            # Obtiene la contraseña proporcionada por el usuario
            password = serializer.validated_data['password']
            # Crea un nuevo usuario
            user = serializer.save()
            # Realiza el hashing de la contraseña
            user.set_password(password)
            user.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


