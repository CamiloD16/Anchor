from rest_framework import routers
from .api import ProjectViewPublication, ProjectViewSerializerComment

router = routers.DefaultRouter()

router.register("publication", ProjectViewPublication, "publication")
router.register("comment", ProjectViewSerializerComment, "comment")

urlpatterns = router.urls