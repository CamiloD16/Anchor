from rest_framework import routers
from .api import ProjectViewSetUser

router = routers.DefaultRouter()

router.register("user", ProjectViewSetUser, "user")

urlpatterns = router.urls