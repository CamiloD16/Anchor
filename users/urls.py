from rest_framework import routers
from .api import ProjectViewSetUser, ProjectViewSetUserProfile, ProjectViewSetFollower

router = routers.DefaultRouter()

router.register("user", ProjectViewSetUser, "user")
router.register("user-profile", ProjectViewSetUserProfile, "user-profile")
router.register("follower", ProjectViewSetFollower, "follower")

urlpatterns = router.urls