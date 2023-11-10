from rest_framework import routers
from .api import ProjectViewPublication, ProjectViewSerializerComment, ProjectViewSerializerLanguage

router = routers.DefaultRouter()

router.register("publication", ProjectViewPublication, "publication")
router.register("comment", ProjectViewSerializerComment, "comment")
router.register("language", ProjectViewSerializerLanguage, "language")

urlpatterns = router.urls